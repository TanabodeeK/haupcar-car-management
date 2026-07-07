import express from "express";
import cors from "cors";
import carRouter from "./routes/car.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/cars",carRouter)

export default app;
