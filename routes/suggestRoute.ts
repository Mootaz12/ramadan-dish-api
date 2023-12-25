import express, { Request, Response } from "npm:express";
import selectRandomIngredients from "../methods/selectRandomIngredients.ts";
import fetchData from "../methods/fetchData.ts";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const ramadanDay: string = req.query.day;
    const data = await fetchData(
      ramadanDay,
      selectRandomIngredients(),
      req.originalUrl
    );

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
