import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteEmployee, getListOfEmployees } from "./../services/localstorage";

export const EmployeeItem = ({ employee, setEmployees }) => {
  const { id, name, email, address, Message } = employee;
  const navigate = useNavigate();

  const removeEmployee = () => {
    deleteEmployee(id);
    setEmployees(getListOfEmployees());
  };
  return (
    <>
      <tr className="">
        <th>{name}</th>
        <th>{email}</th>
        <th>{address}</th>
        <th>{Message}</th>

        <th>
          <div className="d-flex gap-3">
            <span
              role="button"
              className="badge bg-black"
              onClick={() => navigate(`/edit-employee/${id}`)}
            >
              Edit
            </span>

            <span
              role="button"
              className="badge bg-danger"
              onClick={() => removeEmployee()}
            >
              Delete
            </span>
          </div>
        </th>
      </tr>
    </>
  );
};
