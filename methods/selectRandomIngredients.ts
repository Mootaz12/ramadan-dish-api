const selectRandomIngredients = () => {
  const allIngredients = [
    "Pepper",
    "Tomato",
    "Garlic",
    "Onion",
    "Semolina",
    "Potato",
    "Carrot",
    "Tomato paste",
    "Harissa",
    "Rice",
    "Egg",
    "Bulgur",
    "Parsley",
    "Bird Tongue",
    "Malsouqa",
    "Tuna",
    "Spaghetti",
    "Chicken",
    "Black Pepper",
    "Salt",
    "Cinnamon",
    "Cannelloni",
    "Bread",
    "Horseradish",
    "Cumin",
    "Cucumber",
    "Merguaz",
    "Milk",
    "Sugar",
    "Raisin",
    "Oil",
  ];

  const selectedIngredients: string[] = [];
  while (selectedIngredients.length < 3) {
    const randomIndex = Math.floor(Math.random() * allIngredients.length);
    const randomIngredient = allIngredients[randomIndex];
    if (!selectedIngredients.includes(randomIngredient)) {
      selectedIngredients.push(randomIngredient);
    }
  }
  return selectedIngredients;
};
export default selectRandomIngredients;
