import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addEmployee,
  getEmployeeById,
  editEmployee,
} from "../services/localstorage";
import { useForm } from "./../hooks/useForm";
import "./EmployeeForm.css";

export const EmployeeForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showAlert, setShowAlert] = useState(false);
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    name: "",
    email: "",
    address: "",
    message: "",
  });

  useEffect(() => {
    if (id) {
      const employee = getEmployeeById(id);
      setForm(employee);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    id ? editEmployee(id, inputValues) : addEmployee(inputValues);
    setShowAlert(true);
    resetForm();
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  return (
    <>
      {/* HEADER */}
      <div className="form-sec">
        <div>
          <button
            className="btn-lg p-2 button   rounded-pill"
            onClick={() => navigate("/employee-list")}
          >
            Service List{" "}
          </button>
          <h1 className="text-center">{id ? "Edit" : "Book"} Service</h1>
        </div>
        {showAlert && (
          <div>
            <div className="alert alert-success text-white" role="alert">
              {id
                ? "Hurray! updated successful"
                : "well done! submitted successful"}{" "}
              .
            </div>
          </div>
        )}
        {/* FORM */}
        <div className="card border-primary bg-white p-4 m-1">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label mt-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputValues.name}
                onChange={handleInputChange}
                className="form-control "
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label mt-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={inputValues.email}
                onChange={handleInputChange}
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address" className="form-label mt-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={inputValues.address}
                onChange={handleInputChange}
                className="form-control"
                id="address"
                placeholder="Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label mt-1">
                Message
              </label>
              <input
                type="text"
                name="message"
                value={inputValues.message}
                onChange={handleInputChange}
                className="form-control"
                id="message"
                placeholder="Enter message"
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-outline-primary">
                {id ? "Update" : "Submit"}{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
