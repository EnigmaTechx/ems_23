import EmployeeCreate from "./EmployeeCreate";
const EmployeeDirectory = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      textAlign: "center",
      textTransform: "uppercase"
    }
  }, "Employee management System"), /*#__PURE__*/React.createElement(EmployeeCreate, null));
};
// const element = ReactDOM.createRoot(document.getElementById("root"));
// element.render(
//       <EmployeeDirectory />
// );

export default EmployeeDirectory;