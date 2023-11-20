import { Component } from "react";
import { Outlet } from "react-router-dom";
import EmployeeList from "../employee/EmployeeList";

class EmployeeDirectory extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      og_employees: [],
    };
  }

  render() {
    return (
      <div className="container">
        <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
          Employee management System
        </h1>
        <Outlet />
        <EmployeeList employees={this.state.employees} />
      </div>
    );
  }
}

export default EmployeeDirectory;
