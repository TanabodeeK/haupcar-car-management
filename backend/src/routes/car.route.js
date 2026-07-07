import express from "express";
import {
  createCarConyroller,
  deleteCarController,
  getAllCarsController,
  getCarByIdController,
  updateCarController,
} from "../controllers/car.controller.js";

const carRouter = express.Router();

carRouter.get("/", getAllCarsController);
carRouter.get("/:id", getCarByIdController);
carRouter.post("/", createCarConyroller);
carRouter.patch("/:id", updateCarController);
carRouter.delete("/:id", deleteCarController);

export default carRouter;
