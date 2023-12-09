import React, { useState, useEffect } from "react";
import EmployeeFilter from "../../components/EmployeeFilter";
import EmployeeTable from "../employee/EmployeeTable";

const UpComingRetirement = () => {
  const [retiringEmployees, setRetiringEmployees] = useState([]);
  const [ogRetiringEmployees, setOgRetiringEmployees] = useState([]);

  const fetchEmployees = () => {
    fetch("/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `
                query {
                    employees {
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
      .then((res) => res.json())
      .then((body) => {
        body.data.employees.forEach((employee) => {
          employee.DateOfJoining = new Date(employee.DateOfJoining);
        });
        getRetiringEmployees(body.data.employees);
      });
  };

  const getRetiringEmployees = (employeeList) => {
    const today = new Date();
    const upComingRetirements = employeeList.filter((employee) => {
      const retirementDate = new Date(
        employee.DateOfJoining.getFullYear() + employee.Age,
        employee.DateOfJoining.getMonth(),
        employee.DateOfJoining.getDate()
      );
      const diffTime = Math.abs(retirementDate - today);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 180;
    });
    setRetiringEmployees(upComingRetirements);
    setOgRetiringEmployees(upComingRetirements);
  };

  // copied from EmployeeList.jsx for passing to EmployeeFilter.jsx
  const filterEmployees = (employeeType) => {
    if (employeeType === "All" || employeeType === "") {
      setRetiringEmployees(ogRetiringEmployees);
      return;
    }
    const filteredEmployees = ogRetiringEmployees.filter(
      (employee) => employee.EmployeeType === employeeType
    );
    setRetiringEmployees(filteredEmployees);
  };

  // copied from EmployeeList.jsx for passing to EmployeeTable.jsx
  const deleteEmployee = (employeeId) => {
    const query = `
    mutation Mutation($deleteEmployeeId: Int) {
      deleteEmployee(id: $deleteEmployeeId)
    }
    `;
    fetch("/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { deleteEmployeeId: employeeId },
      }),
    })
      .then((res) => res.json())
      .then((body) => {
        console.log("GraphQL Response:", body.data);
        // if the delete was successful, update the state
        if (body.data.deleteEmployee > 0) {
          this.componentDidMount();
          alert("Employee Data deleted successfully!");
        } else {
          console.error("Failed to delete employee");
        }
        if (body.errors) {
          console.error("GraphQL Errors:", body.errors);
          throw new Error("GraphQL error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">UpComing Retirement</h2>
      <div>
        <div className="row">
          <div className="col-12">
            <EmployeeFilter filterEmployees={filterEmployees} />
          </div>
        </div>
        <EmployeeTable
          employees={retiringEmployees}
          onDeleteClick={deleteEmployee}
        />
      </div>
    </div>
  );
};

export default UpComingRetirement;
