import axios from "axios";

const API_URL = "http://localhost:8000/api/cars";

export const getAllCars = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

export const createCar = async (carData) => {
  const response = await axios.post(API_URL, carData);
  return response.data.data;
};

export const updateCar = async (id, carData) => {
  const response = await axios.patch(`${API_URL}/${id}`, carData);
  return response.data.data;
};

export const deleteCar = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data.data;
};