import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navigation/Navbar";
import EmployeeDirectory from "./routes/home/EmployeeDirectory";
import EmployeeList from "./routes/employee/EmployeeList";
import EmployeeDetails from "./routes/details/EmployeeDetails";
import EmployeeCreate from "./routes/create/EmployeeCreate";
import NotFound from "./routes/not_found/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<EmployeeDirectory />}></Route>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
          <Route path="/create" element={<EmployeeCreate />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
