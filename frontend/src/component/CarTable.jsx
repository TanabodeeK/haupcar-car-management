function CarTable({ cars, onEdit, onDelete }) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-3">Car List</h5>

        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>License Plate</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Color</th>
                <th>Year</th>
                <th>Note</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {cars.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center text-muted py-4">
                    No cars found
                  </td>
                </tr>
              ) : (
                cars.map((car) => (
                  <tr key={car.id}>
                    <td>{car.id}</td>
                    <td className="fw-semibold">{car.licensePlate}</td>
                    <td>{car.brand}</td>
                    <td>{car.model}</td>
                    <td>{car.color}</td>
                    <td>{car.year}</td>
                    <td>{car.note}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm btn-warning"
                          onClick={() => onEdit(car)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => onDelete(car.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CarTable;