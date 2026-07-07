import express from "express";
import cors from "cors";
import carRouter from "./routes/car.route.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  }),
);
app.use(express.json());

app.use("/api/cars", carRouter);

export default app;
