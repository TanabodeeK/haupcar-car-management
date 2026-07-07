function CarForm({
  formData,
  formErrors,
  isEditing,
  onChange,
  onSubmit,
  onCancelEdit,
}) {
  return (
    <div
      className={`card shadow-sm mb-4 ${
        isEditing ? "border border-warning" : ""
      }`}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h5 className="card-title mb-1">
              {isEditing ? "Edit Car Information" : "Add New Car"}
            </h5>

            <p className="text-muted mb-0">
              {isEditing
                ? "Update the selected car information below."
                : "Fill in the car information to add it to the system."}
            </p>
          </div>

          <span
            className={`badge ${
              isEditing ? "bg-warning text-dark" : "bg-primary"
            }`}
          >
            {isEditing ? "Editing Mode" : "Create Mode"}
          </span>
        </div>

        <form onSubmit={onSubmit}>
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">License Plate</label>
              <input
                type="text"
                name="licensePlate"
                className={`form-control ${
                  formErrors.licensePlate ? "is-invalid" : ""
                }`}
                value={formData.licensePlate}
                onChange={onChange}
                placeholder="Enter car registration number"
              />

              {formErrors.licensePlate && (
                <div className="invalid-feedback">
                  {formErrors.licensePlate}
                </div>
              )}
            </div>

            <div className="col-md-4">
              <label className="form-label">Brand</label>
              <input
                type="text"
                name="brand"
                className={`form-control ${
                  formErrors.brand ? "is-invalid" : ""
                }`}
                value={formData.brand}
                onChange={onChange}
                placeholder="Enter car brand"
              />

              {formErrors.brand && (
                <div className="invalid-feedback">{formErrors.brand}</div>
              )}
            </div>

            <div className="col-md-4">
              <label className="form-label">Model</label>
              <input
                type="text"
                name="model"
                className={`form-control ${
                  formErrors.model ? "is-invalid" : ""
                }`}
                value={formData.model}
                onChange={onChange}
                placeholder="Enter car model"
              />

              {formErrors.model && (
                <div className="invalid-feedback">{formErrors.model}</div>
              )}
            </div>

            <div className="col-md-4">
              <label className="form-label">Color</label>
              <input
                type="text"
                name="color"
                className="form-control"
                value={formData.color}
                onChange={onChange}
                placeholder="Enter car color"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Year</label>
              <input
                type="number"
                name="year"
                className={`form-control ${
                  formErrors.year ? "is-invalid" : ""
                }`}
                value={formData.year}
                onChange={onChange}
                placeholder="Enter manufacture year"
              />

              {formErrors.year && (
                <div className="invalid-feedback">{formErrors.year}</div>
              )}
            </div>

            <div className="col-md-4">
              <label className="form-label">Note</label>
              <input
                type="text"
                name="note"
                className="form-control"
                value={formData.note}
                onChange={onChange}
                placeholder="Enter additional note"
              />
            </div>
          </div>

          <div className="mt-4 d-flex gap-2">
            <button
              type="submit"
              className={`btn ${isEditing ? "btn-warning" : "btn-primary"}`}
            >
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