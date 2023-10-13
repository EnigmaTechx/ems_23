function EmployeeCreate() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 30
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: "center",
      textTransform: "uppercase"
    }
  }, "Add Employee Form"), /*#__PURE__*/React.createElement("form", {
    name: "newEmployeeForm",
    style: {
      padding: 20
    }
    //   onSubmit={handleSubmit}
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("label", {
    htmlfor: "fName",
    class: "form-label"
  }, "First Name:  ")), /*#__PURE__*/React.createElement("td", null, " ", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "fname",
    style: {
      height: 30
    }
  })), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("label", {
    htmlfor: "lName"
  }, "Last Name:  ")), /*#__PURE__*/React.createElement("td", null, " ", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "lname",
    style: {
      height: 30
    }
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("label", {
    htmlfor: "age"
  }, "Age:  ")), /*#__PURE__*/React.createElement("td", null, " ", /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "age",
    style: {
      height: 30
    }
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("label", {
    htmlfor: "date"
  }, "Date of Joining:  ")), /*#__PURE__*/React.createElement("td", null, " ", /*#__PURE__*/React.createElement("input", {
    type: "date",
    name: "date",
    style: {
      height: 30
    }
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("label", {
    htmlfor: "title"
  }, "Title:  ")), /*#__PURE__*/React.createElement("td", null, " ", /*#__PURE__*/React.createElement("select", {
    name: "title",
    style: {
      height: 30
    }
  }, /*#__PURE__*/React.createElement("option", null, "Employee"), /*#__PURE__*/React.createElement("option", null, "Manager"), /*#__PURE__*/React.createElement("option", null, "Director"), /*#__PURE__*/React.createElement("option", null, "VP")))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("label", {
    htmlfor: "dept"
  }, "Department:  ")), /*#__PURE__*/React.createElement("td", null, " ", /*#__PURE__*/React.createElement("select", {
    name: "dept",
    style: {
      height: 30
    }
  }, /*#__PURE__*/React.createElement("option", null, "IT"), /*#__PURE__*/React.createElement("option", null, "Marketing"), /*#__PURE__*/React.createElement("option", null, "HR"), /*#__PURE__*/React.createElement("option", null, "Engineering")))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("label", {
    htmlfor: "type"
  }, "Employee Type:  ")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("select", {
    name: "type",
    style: {
      height: 30
    }
  }, /*#__PURE__*/React.createElement("option", null, "FullTime"), /*#__PURE__*/React.createElement("option", null, "PartTime"), /*#__PURE__*/React.createElement("option", null, "Contract"), /*#__PURE__*/React.createElement("option", null, "Seasonal")), " "))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    class: "btn btn-primary"
  }, "Add")));
}
// ReactDOM.render(<EmployeeCreate />, document.getElementById("EmployeeForm"));
export default EmployeeCreate;