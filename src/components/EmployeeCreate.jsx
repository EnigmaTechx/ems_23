function EmployeeCreate() {
    return (
        <div style={{padding:30}}>
            <h2 style={{textAlign:"center", textTransform:"uppercase"}}>Add Employee Form</h2>
            <form
            name="newEmployeeForm" style={{padding:20}}
            //   onSubmit={handleSubmit}
            >
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="fName" className="form-label">First Name:  </label></td>
                            <td> <input type="text" name="fname" style={{height:30}}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="lName">Last Name:  </label></td>
                            <td> <input type="text" name="lname" style={{height:30}}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="age">Age:  </label></td>
                            <td> <input type="number" name="age" style={{height:30}}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="date">Date of Joining:  </label></td>
                            <td> <input type="date" name="date" style={{height:30}}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="title">Title:  </label></td>
                            <td> <select name="title" style={{height:30}}>
                                    <option>Employee</option>
                                    <option>Manager</option>
                                    <option>Director</option>
                                    <option>VP</option>
                                </select></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="dept">Department:  </label></td>
                            <td> <select name="dept" style={{height:30}}>
                                <option>IT</option>
                                <option>Marketing</option>
                                <option>HR</option>
                                <option>Engineering</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="type">Employee Type:  </label></td>
                            <td><select name="type" style={{height:30}}>
                                <option>FullTime</option>
                                <option>PartTime</option>
                                <option>Contract</option>
                                <option>Seasonal</option>
                            </select> </td>
                            
                        </tr>
                    </tbody>
                </table>
            
            <button type="submit" className="btn btn-primary">
                Add
            </button>
            </form>
        </div>
    )

}
// ReactDOM.render(<EmployeeCreate />, document.getElementById("EmployeeForm"));
export default EmployeeCreate;