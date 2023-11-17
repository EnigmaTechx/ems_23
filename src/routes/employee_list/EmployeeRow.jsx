const EmployeeRow = ({ employee }) => {
  return (
    <tr>
      <td>{employee.FirstName}</td>
      <td>{employee.LastName}</td>
      <td>{employee.Age}</td>
      <td>
        {employee.DateOfJoining != null
          ? employee.DateOfJoining.toDateString()
          : ""}
      </td>
      <td>{employee.Title}</td>
      <td>{employee.Department}</td>
      <td>{employee.EmployeeType}</td>
      <td>{employee.CurrentStatus}</td>
    </tr>
  );
};
export default EmployeeRow;
