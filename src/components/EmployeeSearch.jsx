import { Component } from "react";

class EmployeeSearch extends Component {
  render() {
    return (
      <div className="row">
        <form className="mb-3">
          <div className="row">
            <div className="col-8">
              <input
                className="form-control"
                type="text"
                placeholder="Search Employee"
              />
            </div>
            <div className="col-4">
              <button className="btn btn-primary mt-3" type="button">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EmployeeSearch;
