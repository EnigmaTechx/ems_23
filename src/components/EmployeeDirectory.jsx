import EmployeeCreate from "./EmployeeCreate";

const EmployeeDirectory = () => {
  return (
    <div>
      <h1 style={{textAlign:"center", textTransform:"uppercase"}}>Employee management System</h1>
     <EmployeeCreate />
    </div>
  );
}
// const element = ReactDOM.createRoot(document.getElementById("root"));
// element.render(
//       <EmployeeDirectory />
// );

export default EmployeeDirectory;