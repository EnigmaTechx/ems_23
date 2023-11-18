import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // Fetch data for the selected employee using the MongoDB ID (id)
    fetch(`/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            employee(id: "${id}") {
              id
              FirstName
              LastName
              Age
              DateOfJoining
              Title
              Department
              EmployeeType
              CurrentStatus
            }
          }
        `,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data.employee) {
          data.data.employee.DateOfJoining = new Date(
            data.data.employee.DateOfJoining
          );
          setEmployee(data.data.employee);
        } else {
          // Handle the case where the employee with the given ID is not found
          console.error("Employee not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
      });
  }, [id]);

  return (
    <div>
      {employee ? (
        <div>
          <h2>{`${employee.FirstName} ${employee.LastName}`}</h2>
          <p>Age: {employee.Age}</p>
          <p>Date of Joining: {employee.DateOfJoining.toDateString()}</p>
          <p>Title: {employee.Title}</p>
          <p>Department: {employee.Department}</p>
          <p>Employee Type: {employee.EmployeeType}</p>
          <p>Current Status: {employee.CurrentStatus}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EmployeeDetails;
