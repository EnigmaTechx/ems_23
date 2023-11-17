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
      this.setState({ employees: this.state.og_employees });
      return;
    }
    const filteredEmployees = this.state.og_employees.filter(
      (employee) => employee.EmployeeType === employeeType
    );
    this.setState({ employees: filteredEmployees });
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
        <EmployeeTable employees={this.state.employees} />
      </div>
    );
  }
}

export default EmployeeList;
