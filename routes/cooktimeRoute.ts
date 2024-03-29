import express, { Request, Response } from "npm:express";
import fetchData from "../methods/fetchData.ts";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const ramadanDay: string = req.query.day;
    const ingredients: string[] = req.query.ingredients.split(",");
    if (!ramadanDay || isNaN(Number(ramadanDay)) || ingredients.length === 0) {
      return res.status(400).json({ error: "Invalid input" });
    }
    const data = await fetchData(ramadanDay, ingredients, req.originalUrl);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
