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
                        BirthDate
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
        console.log(`body: ${JSON.stringify(body.data.employees)}`);
        this.setState({ employees: body.data.employees });
      });
  }

  createEmployee = (employee) => {
    //TODO: call graphql API to create employee
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
