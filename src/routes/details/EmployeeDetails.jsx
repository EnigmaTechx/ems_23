import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const EmployeeDetails = () => {
  const location = useLocation();
  const eId = location.state.eId;
  const [employee, setEmployee] = React.useState({});
  const [title, setTitle] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [currentStatus, setCurrentStatus] = React.useState("");

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
        if (body.data.employee.DateOfJoining) {
          body.data.employee.DateOfJoining = new Date(
            body.data.employee.DateOfJoining
          );
        }
        // set the employee state to the employee object returned from the query
        setEmployee(body.data.employee);
        setTitle(body.data.employee.Title);
        setDepartment(body.data.employee.Department);
        setCurrentStatus(body.data.employee.CurrentStatus);
      })
      .catch((error) => {
        console.error("Error fetching employee details:", error);
      });
  };

  useEffect(() => {
    getEmployeeDetails();
  }, []);

  const updateEmployee = async (e) => {
    e.preventDefault();

    const updatedFields = {
      Title: title,
      Department: department,
      CurrentStatus: parseInt(currentStatus),
    };

    try {
      const response = await fetch("/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            mutation UpdateEmployee($id: Int!, $input: EmployeeInput) {
              updateEmployee(id: $id, input: $input) {
                id
                Title
                Department
                CurrentStatus
              }
            }
          `,
          variables: {
            id: eId,
            input: updatedFields,
          },
        }),
      });

      const result = await response.json();
      console.log("Updated Employee:", result.data.updateEmployee);
      if (result.data.updateEmployee) {
        window.alert("Employee successfully updated!");
      } else {
        window.alert("Failed to update employee.");
      }
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={updateEmployee}>
        <h1>Employee Details</h1>
        <label className="col-sm-2 col-form-label" htmlFor="id">
          Employee ID:{" "}
        </label>
        <input name="id" type="text" value={employee.id} disabled={true} />
        <br />
        <label className="col-sm-2 col-form-label" htmlFor="fname">
          First Name:{" "}
        </label>
        <input
          name="fname"
          type="text"
          value={employee.FirstName}
          disabled={true}
        />
        <br />
        <label className="col-sm-2 col-form-label" htmlFor="lname">
          Last Name:{" "}
        </label>
        <input
          name="lname"
          type="text"
          value={employee.LastName}
          disabled={true}
        />
        <br />
        <label className="col-sm-2 col-form-label" htmlFor="age">
          Age:{" "}
        </label>
        <input name="age" type="text" value={employee.age} disabled={true} />
        <br />
        <label className="col-sm-2 col-form-label" htmlFor="date">
          Date of Joining:{" "}
        </label>
        <input
          name="id"
          type="text"
          value={
            employee.DateOfJoining != null
              ? employee.DateOfJoining.toDateString()
              : ""
          }
          disabled={true}
        />
        <br />
        <label className="col-sm-2 col-form-label" htmlFor="title">
          Title:{" "}
        </label>
        <select
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        >
          <option>Employee</option>
          <option>Manager</option>
          <option>Director</option>
          <option>VP</option>
        </select>
        <br />
        <label className="col-sm-2 col-form-label" htmlFor="dept">
          Department:{" "}
        </label>
        <select
          name="dept"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option>IT</option>
          <option>Marketing</option>
          <option>HR</option>
          <option>Engineering</option>
        </select>
        <br />
        <label className="col-sm-2 col-form-label" htmlFor="empType">
          Employee Type:{" "}
        </label>
        <input
          name="empType"
          type="text"
          value={employee.EmployeeType}
          disabled={true}
        />
        <br />
        <label className="col-sm-2 col-form-label" htmlFor="status">
          Current Status:{" "}
        </label>
        <input
          name="status"
          type="number"
          value={currentStatus}
          onChange={(e) => setCurrentStatus(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
      {/* <div className="row">
        <div className="col-4">
          <button onClick={increaseNumber} className="btn btn-primary">
            Increase
          </button>
        </div>
        <div className="col-4">
          <h2>{number}</h2>
        </div>
        <div className="col-4">
          <button onClick={decreaseNumber} className="btn btn-primary">
            Decrease
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default EmployeeDetails;
