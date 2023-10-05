

function Employee(props) { //{emp:{}}
    const { emp: { firstName, email, contactNumber, dob, salary, id }, deleteEmployee } = props;

    return (
        <div className="col-sm-3 my-2">
            <div style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', padding: '18px' }}>
                <p>FullName: {firstName}<br></br></p>
                <p>Email: {email}<br></br></p>
                <p>ContactNo: {contactNumber}<br></br></p>
                <p>DOB: {dob}<br></br></p>
                <p>Salary: {salary}<br></br></p>
                <button className="btn btn-danger" onClick={() => deleteEmployee(id)}> Delete</button>
            </div>
        </div>
    )
}

export default Employee;
