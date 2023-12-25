import express from "npm:express";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
import cooktimeRoute from "./routes/cooktimeRoute.ts";
import suggestRoute from "./routes/suggestRoute.ts";
config();
const app = express();

app.use("/cooktime", cooktimeRoute);
app.use("/suggest", suggestRoute);

const PORT: number | string = Deno.env.get("PORT") || 3000;

app.listen(PORT, () => {
  console.log(`The server is listening on PORT: ${PORT}`);
});

export default app;
