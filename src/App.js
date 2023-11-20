/**
 * Group 4
    Derryck Dowuona - GraphQL API for fetching Employee Data
    Christina Tresa Abraham - Employee Components (jsx)
    Dipkumar Gunvantkumar Rakholiya - Validation for EmployeeCreateForm & UserModel
    Harsh Rameshkumar Patel - EmployeeCreateForm & API for Inserting Employee
 */

import EmployeeDirectory from "./routes/home/EmployeeDirectory";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./routes/navigation/Navbar";
import EmployeeList from "./routes/employee_list/EmployeeList";
import EmployeeCreate from "./routes/create/EmployeeCreate";
import NotFound from "./routes/not_found/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<EmployeeDirectory />}></Route>
          <Route path="/" element={<EmployeeList />} />
          {/* <Route path="/employee/:id" element={<EmployeeDetails />} /> */}
          <Route path="/create" element={<EmployeeCreate />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
