import React from "react";
import { useLocation } from "react-router-dom";

const EmployeeDetails = () => {
  const location = useLocation();
  const eId = location.state.eId;

  // TODO: call api to get employee details
  return (
    <div className="container">
      <p>Employee ID: {eId}</p>
    </div>
  );
};

export default EmployeeDetails;
