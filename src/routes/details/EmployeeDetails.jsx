import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const EmployeeDetails = () => {
  const location = useLocation();
  const eId = location.state.eId;
  const [employee, setEmployee] = React.useState({});

  const getEmployeeDetails = async () => {
    fetch("/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `
      query Employee($employeeId: Int) {
        employee(id: $employeeId) {
          CurrentStatus
          DateOfJoining
          Department
          EmployeeType
          FirstName
          id
          Title
          LastName
          Age
        }
      }`,
        variables: { employeeId: eId },
      }),
    })
      .then((res) => res.json())
      .then((body) => {
        console.log("body", body.data);
        if (body.data.employee.DateOfJoining) {
          body.data.employee.DateOfJoining = new Date(
            body.data.employee.DateOfJoining
          );
        }
        setEmployee(body.data.employee);
      })
      .catch((error) => {
        console.error("Error fetching employee details:", error);
      });
  };

  useEffect(() => {
    getEmployeeDetails();
  }, []);

  return (
    <div className="container">
      <h1>Employee Details</h1>
      <p>Employee ID: {employee.id}</p>
      <p>First Name: {employee.FirstName}</p>
      <p>Last Name: {employee.LastName}</p>
      <p>Age: {employee.Age}</p>
      <p>
        Date of Joining:{" "}
        {employee.DateOfJoining != null
          ? employee.DateOfJoining.toDateString()
          : ""}
      </p>
      <p>Title: {employee.Title}</p>
      <p>Department: {employee.Department}</p>
      <p>Employee Type: {employee.EmployeeType}</p>
      <p>Current Status: {employee.CurrentStatus}</p>
    </div>
  );
};

export default EmployeeDetails;
