import { Component } from "react";

class EmployeeSearch extends Component {
  render() {
    return (
      <div className="row">
        <form className="mb-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Employee"
            />
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EmployeeSearch;
