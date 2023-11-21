import { Component } from "react";
import EmployeeTable from "./EmployeeTable";
import EmployeeSearch from "../../components/EmployeeSearch";
import EmployeeFilter from "../../components/EmployeeFilter";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: this.props.employees,
      og_employees: this.props.og_employees,
    };
  }

  componentDidMount() {
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
        this.setState({
          employees: body.data.employees,
          og_employees: body.data.employees,
        });
      });
  }

  filterEmployees = (employeeType) => {
    if (employeeType === "All" || employeeType === "") {
      // if selection is "All" or empty, show all employees
      this.setState({ employees: this.state.og_employees });
      return;
    }
    // create a new array of employees that match the selected employee type
    const filteredEmployees = this.state.og_employees.filter(
      (employee) => employee.EmployeeType === employeeType
    );
    // set the state to the new array of employees
    this.setState({ employees: filteredEmployees });
  };

  deleteEmployee = (employeeId) => {
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

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <EmployeeSearch />
          </div>
          <div className="col-6">
            <EmployeeFilter filterEmployees={this.filterEmployees} />
          </div>
        </div>
        <EmployeeTable
          employees={this.state.employees}
          onDeleteClick={this.deleteEmployee}
        />
      </div>
    );
  }
}

export default EmployeeList;
