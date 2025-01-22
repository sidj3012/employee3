import React, { useState } from "react";
import { useEmployees } from "../hooks/useEmployees";
import { Link } from "react-router-dom";
import Map from "../components/Map";
import SearchBar from "../components/SearchBar";
import EmployeeDetailsCard from "../components/EmployeeDetailsCard";

const Home = () => {
  const { data, isLoading, error } = useEmployees();
  const [search, setSearch] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredEmployees = data.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.position.toLowerCase().includes(search.toLowerCase()) ||
      employee.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main-container">
      <div className="topbar">
        <h1 className="heading-1">Employees</h1>
        <Link to="/add" className="add-employee-button">Add Employee</Link>
      </div>
      
      <div>
        <SearchBar search={search} setSearch={setSearch}/>
      </div>

      <div className="employee-container">
  {filteredEmployees.length > 0 ? (
    <ul className="employee-list">
      {filteredEmployees.map((employee) => (
        <li
          key={employee._id}
          className="employee-item"
          onClick={() => setSelectedEmployee(employee)}
        >
          <span className="employee-name">{employee.name}</span>
          <span className="employee-position">{employee.position}</span>
          <span className="employee-address">{employee.address}</span>
        </li>
      ))}
    </ul>
  ) : (
    <p className="no-employees">No employees found</p>
  )}
</div>


      
      <div>
      <Map employees={filteredEmployees} />
        {selectedEmployee && (
          <EmployeeDetailsCard
            employee={selectedEmployee}
            onClose={() => setSelectedEmployee(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Home;