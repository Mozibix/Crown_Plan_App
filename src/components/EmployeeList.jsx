import { useEffect, useState } from "react";
import { EmployeeItem } from "./EmployeeItem";
import { getListOfEmployees } from "./../services/localstorage";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(getListOfEmployees());
  }, []);
  return (
    <div className="service-list">
      <h1 className="my-5 text-center text-dark">Manage Services</h1>
      {employees.length > 0 ? (
        <div className="card bg-white p-3">
          <table className="table table-hover text-dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <EmployeeItem
                  employee={employee}
                  key={employee.id}
                  setEmployees={setEmployees}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h3 className="text-center">No employees</h3>
      )}
    </div>
  );
};
