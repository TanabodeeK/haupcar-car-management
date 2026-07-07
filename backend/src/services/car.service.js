import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";

export const getAllCarsService = async () => {
  const cars = await prisma.car.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return cars;
};

export const getCarByIdService = async (id) => {
  const car = await prisma.car.findUnique({
    where: {
      id: Number(id),
    },
  });
  return car;
};

export const createCarService = async (data) => {
  const car = await prisma.car.create({
    data: {
      licensePlate: data.licensePlate,
      brand: data.brand,
      model: data.model,
      color: data.color,
      year: Number(data.year),
      note: data.note,
    },
  });
  return car;
};

export const updateCarService = async (id, data) => {
  const updateData = {};

  if (data.licensePlate !== undefined) {
    updateData.licensePlate = data.licensePlate;
  }

  if (data.brand !== undefined) {
    updateData.brand = data.brand;
  }

  if (data.model !== undefined) {
    updateData.model = data.model;
  }

  if (data.color !== undefined) {
    updateData.color = data.color;
  }

  if (data.year !== undefined) {
    updateData.year = Number(data.year);
  }

  if (data.note !== undefined) {
    updateData.note = data.note;
  }

  const car = await prisma.car.update({
    where: {
      id: Number(id),
    },
    data: updateData,
  });

  return car;
};

export const deleteCarService = async (id) => {
  const car = await prisma.car.delete({
    where: {
      id: Number(id),
    },
  });
  return car
};
