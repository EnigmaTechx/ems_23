import EmployeeList from "./EmployeeList";
import EmpployeeSearch from "./EmployeeSearch";

const EmployeeDirectory = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
        Employee management System
      </h1>
      <EmpployeeSearch />
      <EmployeeList />
    </div>
  );
};
// const element = ReactDOM.createRoot(document.getElementById("root"));
// element.render(
//       <EmployeeDirectory />
// );

export default EmployeeDirectory;
