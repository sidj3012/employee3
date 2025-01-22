import React from "react";

const EmployeeDetailsCard = ({ employee, onClose }) => {
  return (
    <div className="overlay">
      <div className="card">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{employee.name}</h2>
        <p><strong>Email: </strong> {employee.email}</p>
        <p><strong>Position: </strong> {employee.position}</p>
        <p><strong>Address: </strong> {employee.address}</p>
        <p><strong>Salary: </strong> Rs. {employee.salary}</p>
        <p><strong>Mobile Number :</strong> {employee.mobile}</p>
        <p><strong>Date of Joining :</strong> {employee.doj}</p>
        <p><strong>Date of Birth :</strong> {employee.dob}</p>
      </div>
    </div>
  );
};

export default EmployeeDetailsCard;
