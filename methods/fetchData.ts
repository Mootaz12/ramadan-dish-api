// deno-lint-ignore-file no-explicit-any
import dishes from "../dishes.json" with { type: "json" } 
const fetchData = async (
  ramadanDay: string,
  ingredients: string[],
  url: string
) => {
  try {
    const response = await fetch(
      `http://api.aladhan.com/v1/calendarByCity/${new Date().getFullYear()}/4?city=Mecca&country=KSA&method=1`
    );
    const { data } = await response.json();

    const filteredData = data.filter((item: any) => {
      return item.date.hijri.month.en === "Ramaḍān";
    });
    const filteredDay = filteredData.filter((item: any) => {
      return item.date.hijri.day === ramadanDay;
    });

    // Extract Asr and Maghrib timings
    const asr =
      Number(filteredDay[0].timings.Asr.split(" ")[0].split(":")[0] * 60) +
      Number(filteredDay[0].timings.Asr.split(" ")[0].split(":")[1]);
    const magrib =
      Number(filteredDay[0].timings.Maghrib.split(" ")[0].split(":")[0] * 60) +
      Number(filteredDay[0].timings.Maghrib.split(" ")[0].split(":")[1]);

    // Filter dishes based on ingredients
    const checkIngredients = (ingredients: any) => {
      const filteredDishes = dishes.filter((dish) =>
        ingredients.some((ingredient: any) =>
          dish.ingredients.includes(ingredient)
        )
      );
      return filteredDishes;
    };
    const desiredDishes = checkIngredients(ingredients);

    // Calculate cooking times for filtered dishes
    const finalDishes: any = [];
    desiredDishes.forEach((dish) => {
      const dishName = dish.name;
      const dishIngredients = dish.ingredients;
      const readyDishTime = magrib - 15;
      const startCookingTime = readyDishTime - dish.duration;
      let cooktime;
      startCookingTime - asr > 0
        ? (cooktime = `${startCookingTime - asr} minutes after Asr`)
        : (cooktime = `${-(startCookingTime - asr)} minutes before Asr`);

      finalDishes.push({
        name: dishName,
        ingredients: dishIngredients,
        cooktime: cooktime,
      });
    });

    if (url.includes("suggest")) {
      return finalDishes[0];
    } else {
      return finalDishes;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};
export default fetchData