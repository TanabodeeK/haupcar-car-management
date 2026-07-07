function CarForm({
  formData,
  isEditing,
  onChange,
  onSubmit,
  onCancelEdit,
}) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title mb-3">
          {isEditing ? "Edit Car Information" : "Add New Car"}
        </h5>

        <form onSubmit={onSubmit}>
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">License Plate</label>
              <input
                type="text"
                name="licensePlate"
                className="form-control"
                value={formData.licensePlate}
                onChange={onChange}
                placeholder="กข-1234"
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Brand</label>
              <input
                type="text"
                name="brand"
                className="form-control"
                value={formData.brand}
                onChange={onChange}
                placeholder="Toyota"
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Model</label>
              <input
                type="text"
                name="model"
                className="form-control"
                value={formData.model}
                onChange={onChange}
                placeholder="Yaris"
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Color</label>
              <input
                type="text"
                name="color"
                className="form-control"
                value={formData.color}
                onChange={onChange}
                placeholder="White"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Year</label>
              <input
                type="number"
                name="year"
                className="form-control"
                value={formData.year}
                onChange={onChange}
                placeholder="2022"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Note</label>
              <input
                type="text"
                name="note"
                className="form-control"
                value={formData.note}
                onChange={onChange}
                placeholder="Company car"
              />
            </div>
          </div>

          <div className="mt-4 d-flex gap-2">
            <button type="submit" className="btn btn-primary">
              {isEditing ? "Update Car" : "Add Car"}
            </button>

            {isEditing && (
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={onCancelEdit}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CarForm;