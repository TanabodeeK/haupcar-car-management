import { useState } from "react";
import { mockCars } from "../data/mockCars";
import CarForm from "../component/Carform";
import CarTable from "../component/CarTable";


const initialFormData = {
  licensePlate: "",
  brand: "",
  model: "",
  color: "",
  year: "",
  note: "",
};

function CarPage() {
  const [cars, setCars] = useState(mockCars);
  const [formData, setFormData] = useState(initialFormData);
  const [editingId, setEditingId] = useState(null);

  const isEditing = editingId !== null;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isEditing) {
      const updatedCars = cars.map((car) => {
        if (car.id === editingId) {
          return {
            ...car,
            ...formData,
            year: Number(formData.year),
          };
        }

        return car;
      });

      setCars(updatedCars);
      setEditingId(null);
      setFormData(initialFormData);
      return;
    }

    const newCar = {
      id: Date.now(),
      ...formData,
      year: Number(formData.year),
    };

    setCars([newCar, ...cars]);
    setFormData(initialFormData);
  };

  const handleEdit = (car) => {
    setEditingId(car.id);

    setFormData({
      licensePlate: car.licensePlate,
      brand: car.brand,
      model: car.model,
      color: car.color,
      year: car.year,
      note: car.note,
    });
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this car?");

    if (!confirmed) {
      return;
    }

    const filteredCars = cars.filter((car) => car.id !== id);
    setCars(filteredCars);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData(initialFormData);
  };

  return (
    <div className="container py-4">
      <div className="mb-4">
        <h1 className="page-title">Car Management System</h1>
        <p className="text-muted">
          Manage company car information including license plate, brand, model,
          color, year, and notes.
        </p>
      </div>

      <CarForm
        formData={formData}
        isEditing={isEditing}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancelEdit={handleCancelEdit}
      />

      <CarTable
        cars={cars}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default CarPage;