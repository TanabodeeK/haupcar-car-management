import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { carSchema } from "../validations/carSchema";
import {
  getAllCars,
  createCar,
  updateCar,
  deleteCar,
} from "../api/carApi";
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
  const [cars, setCars] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const isEditing = editingId !== null;

  const fetchCars = async () => {
    try {
      setLoading(true);

      const carsData = await getAllCars();
      setCars(carsData);
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Failed to load cars",
        text: "Please check if backend server is running.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const result = carSchema.safeParse(formData);

    if (!result.success) {
      const errors = {};

      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0];
        errors[fieldName] = issue.message;
      });

      setFormErrors(errors);

      Swal.fire({
        icon: "error",
        title: "Invalid form",
        text: "Please check the form fields again.",
      });

      return false;
    }

    const duplicateLicensePlate = cars.find((car) => {
      return (
        car.licensePlate.toLowerCase() ===
          formData.licensePlate.toLowerCase() &&
        car.id !== editingId
      );
    });

    if (duplicateLicensePlate) {
      setFormErrors({
        licensePlate: "This license plate already exists",
      });

      Swal.fire({
        icon: "error",
        title: "Duplicate license plate",
        text: "This license plate already exists.",
      });

      return false;
    }

    setFormErrors({});
    return true;
  };

  const buildPayload = () => {
    return {
      licensePlate: formData.licensePlate,
      brand: formData.brand,
      model: formData.model,
      color: formData.color,
      year: formData.year ? Number(formData.year) : null,
      note: formData.note,
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    try {
      const payload = buildPayload();

      if (isEditing) {
        await updateCar(editingId, payload);

        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Car information has been updated.",
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        await createCar(payload);

        Swal.fire({
          icon: "success",
          title: "Created!",
          text: "New car has been added.",
          timer: 1500,
          showConfirmButton: false,
        });
      }

      setFormData(initialFormData);
      setFormErrors({});
      setEditingId(null);
      fetchCars();
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Save failed",
        text: error.response?.data?.message || "Something went wrong.",
      });
    }
  };

  const handleEdit = (car) => {
    setEditingId(car.id);

    setFormData({
      licensePlate: car.licensePlate || "",
      brand: car.brand || "",
      model: car.model || "",
      color: car.color || "",
      year: car.year ? String(car.year) : "",
      note: car.note || "",
    });

    setFormErrors({});
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "This car will be deleted from the database.",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) {
      return;
    }

    try {
      await deleteCar(id);

      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Car has been deleted.",
        timer: 1500,
        showConfirmButton: false,
      });

      fetchCars();
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Delete failed",
        text: error.response?.data?.message || "Something went wrong.",
      });
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData(initialFormData);
    setFormErrors({});
  };

  return (
    <div className="container py-4">
      <div className="mb-4">
        <h1 className="fw-bold">Car Management System</h1>
        <p className="text-muted">
          Manage company car information including license plate, brand, model,
          color, year, and notes.
        </p>
      </div>

      <CarForm
        formData={formData}
        formErrors={formErrors}
        isEditing={isEditing}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancelEdit={handleCancelEdit}
      />

      {loading ? (
        <div className="card shadow-sm">
          <div className="card-body text-center text-muted py-5">
            Loading cars...
          </div>
        </div>
      ) : (
        <CarTable cars={cars} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </div>
  );
}

export default CarPage;