import { useNavigate } from "react-router-dom";

const EmployeeRow = ({ employee, onDeleteClick }) => {
  const navigate = useNavigate();

  const deleteEmployee = () => {
    onDeleteClick(employee.id);
  };

  return (
    <tr>
      <td>{employee.id}</td>
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
      <td>
        {/* navigate to EmployeeDetails page with selected id */}
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate(`/employee/${employee.id}`, {
              replace: false,
              state: { eId: employee.id },
            });
          }}
        >
          View
        </button>
      </td>
      <td>
        <button onClick={deleteEmployee} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};
export default EmployeeRow;
