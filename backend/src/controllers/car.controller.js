import { json } from "express";
import {
  createCarService,
  deleteCarService,
  getAllCarsService,
  getCarByIdService,
  updateCarService,
} from "../services/car.service.js";

export const getAllCarsController = async (req, res, next) => {
  try {
    const cars = await getAllCarsService();
    return res.status(200).json({
      message: "Get all cars",
      data: cars,
    });
  } catch (error) {
    next(error);
  }
};

export const getCarByIdController = async (req, res, next) => {
  try {
    const car = await getCarByIdService(req.params.id);
    if (!car) {
      return res.status(404).json({
        message: "Car Not found",
      });
      return res.status(200).json({
        message: "Get car",
        data: car,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const createCarConyroller = async (req, res, next) => {
  try {
    const car = await createCarService(req.body);
    return res.status(201).json({
      message: "Create car success",
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCarController = async (req, res, next) => {
  try {
    const car = await updateCarService(req.params.id, req.body);
    return res.status(200).json({
      message: "Update car success",
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCarController = async (req, res, next) => {
  try {
    const car = await deleteCarService(req.params.id);
    return res.status(200).json({
      message: "Delete car success",
      data: car,
    });
  } catch (error) {
    next(error);
  }
};
