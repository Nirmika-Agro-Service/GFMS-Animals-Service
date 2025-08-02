import cors from "cors";
import express from "express";
import animalRouter from "./animal/animal-router";
import breedRouter from "./breed/breed-router";
import vaccineRouter from "./vaccine/vaccine-router";
import dashboardRouter from "./dashboard/dashboard-router";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173","https://admin.nirmikaagro.com","https://www.admin.nirmikaagro.com","http://localhost:3039","http://localhost:5174"],
    credentials: true,
  }),
);

app.use(express.static("public"));
app.use(express.json());

app.use("/animals", animalRouter);
app.use("/breeds", breedRouter);
app.use("/vaccines", vaccineRouter);
app.use("/dashboard", dashboardRouter);

app.get("/", (req:any, res:any) => {
  res.json({ data: "Auto Deploy" });
});

export default app;
