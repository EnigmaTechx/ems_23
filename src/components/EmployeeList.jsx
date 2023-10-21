import { Component } from "react";
import EmployeeCreate from "./EmployeeCreate";
import EmployeeTable from "./EmployeeTable";

class EmployeeList extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      search: "",
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
        this.setState({ employees: body.data.employees });
      });
  }

  createEmployee = (employee) => {
    //TODO: call graphql API to create employee
    // console.log(`Employee JSON: ${JSON.stringify(employee)}`);
    fetch("/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation Mutation($employee: EmployeeInput) { 
          addEmployee(employee: $employee) {
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
        }`,
        variables: { employee },
      }),
    })
      .then((res) => res.json())
      .then((body) => {
        body.data.addEmployee.DateOfJoining = new Date(
          body.data.addEmployee.DateOfJoining
        );
        const { employees } = this.state;
        // console.log(`body: ${JSON.stringify(body)}}`);
        const newEmployeeArray = [...employees, body.data.addEmployee];
        this.setState({ employees: newEmployeeArray });
      });
  };

  render() {
    return (
      <div>
        <EmployeeTable employees={this.state.employees} />
        <div className="mb-3">
          <hr />
        </div>
        <EmployeeCreate createEmployee={this.createEmployee} />
      </div>
    );
  }
}

export default EmployeeList;
