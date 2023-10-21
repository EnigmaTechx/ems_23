import { Component } from "react";

class EmployeeCreate extends Component {
  handleSubmit = (event) => {
    // TODO: send form values back to EmployeeList.jsx for processing
    event.preventDefault();

    const form = document.forms.newEmployeeForm;

    // Create an object to hold the employee data
    // const employeeData = {

    // };

    // Log the data to the console
    // console.log("Employee Data:", employeeData);

    // Send the data to the parent component for further processing
    this.props.createEmployee({
      FirstName: form.fname.value,
      LastName: form.lname.value,
      Age: parseInt(form.age.value),
      DateOfJoining: form.date.value,
      Title: form.title.value,
      Department: form.dept.value,
      EmployeeType: form.type.value,
    });

    // Reset form fields
    form.fname.value = "";
    form.lname.value = "";
    form.age.value = "";
    form.date.value = "";
    form.title.value = "";
    form.dept.value = "";
    form.type.value = "";
  };
  render() {
    return (
      <div className="container" id="_addForm">
        <h2 style={{ textAlign: "center", textTransform: "uppercase" }}>
          Add Employee Form
        </h2>
        <form
          name="newEmployeeForm"
          style={{ padding: 20 }}
          onSubmit={this.handleSubmit}
        >
          <div className="row mb-3">
            <label htmlFor="fName" className="col-sm-2 col-form-label">
              First Name:
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="text"
                name="fname"
                style={{ height: 30 }}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor="lName">
              Last Name:
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="text"
                name="lname"
                style={{ height: 30 }}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor="age">
              Age:
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="number"
                name="age"
                style={{ height: 30 }}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor="date">
              Date of Joining:
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="date"
                name="date"
                style={{ height: 30 }}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor="title">
              Title:
            </label>
            <div className="col-sm-10">
              <select
                className="form-select"
                name="title"
                style={{ height: 30 }}
              >
                <option>Employee</option>
                <option>Manager</option>
                <option>Director</option>
                <option>VP</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor="dept">
              Department:
            </label>
            <div className="col-sm-10">
              <select
                className="form-select"
                name="dept"
                style={{ height: 30 }}
              >
                <option>IT</option>
                <option>Marketing</option>
                <option>HR</option>
                <option>Engineering</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor="type">
              Employee Type:
            </label>
            <div className="col-sm-10">
              <select
                className="form-select"
                name="type"
                style={{ height: 30 }}
              >
                <option>FullTime</option>
                <option>PartTime</option>
                <option>Contract</option>
                <option>Seasonal</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
// ReactDOM.render(<EmployeeCreate />, document.getElementById("EmployeeForm"));
export default EmployeeCreate;
