import { Component } from "react";
import EmployeeRow from "./EmployeeRow";

class EmployeeTable extends Component {
  render() {
    const { employees, onDeleteClick } = this.props;
    const employeeRow = employees.map((employee) => {
      return (
        <EmployeeRow
          key={employee.id}
          employee={employee}
          onDeleteClick={onDeleteClick}
        />
      );
    });
    return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="text-center">
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Date of Joining</th>
            <th>Title</th>
            <th>Department</th>
            <th>Employee Type</th>
            <th>Current Status</th>
            <th>View Details</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{employeeRow}</tbody>
      </table>
    );
  }
}

export default EmployeeTable;
