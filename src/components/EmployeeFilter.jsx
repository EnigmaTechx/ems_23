import { Component } from "react";

class EmployeeFilter extends Component {
  constructor() {
    super();
    this.state = {
      filter: "",
    };
  }

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  applyFilter = () => {
    this.props.filterEmployees(this.state.filter);
  };

  render() {
    return (
      <div className="input-group mb-3">
        <div className="form-floating">
          <select
            value={this.state.filter}
            className="form-select"
            onChange={this.handleFilterChange}
            id="filterSelect"
          >
            <option value="All">All</option>
            <option value="FullTime">FullTime</option>
            <option value="PartTime">PartTime</option>
            <option value="Contract">Contract</option>
            <option value="Seasonal">Seasonal</option>
          </select>
          <label htmlFor="floatingSelect">Filter By Employee Type</label>
        </div>
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={this.applyFilter}
        >
          Filter
        </button>
      </div>
    );
  }
}

export default EmployeeFilter;
