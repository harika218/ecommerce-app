import Employee from "./Employee";
import { useState, useEffect } from "react";

function EmployeeList(){

    const[employeeData, setEmployeeData] = useState([
        {
          "id": 1001,
          "imageUrl": "https://hub.dummyapis.com/Image?text=DB&height=120&width=120",
          "firstName": "Dean",
          "lastName": "Bogan",
          "email": "Dean.Bogan@dummyapis.com",
          "contactNumber": "4253491156",
          "age": 28,
          "dob": "12/09/1995",
          "salary": 1.0,
          "address": "Address1"
        },
        {
          "id": 1002,
          "imageUrl": "https://hub.dummyapis.com/Image?text=TG&height=120&width=120",
          "firstName": "Timmy",
          "lastName": "Gibson",
          "email": "Timmy.Gibson@dummyapis.com",
          "contactNumber": "4947791938",
          "age": 51,
          "dob": "08/06/1972",
          "salary": 2.0,
          "address": "Address2"
        },
        {
          "id": 1003,
          "imageUrl": "https://hub.dummyapis.com/Image?text=ED&height=120&width=120",
          "firstName": "Emmie",
          "lastName": "Dare",
          "email": "Emmie.Dare@dummyapis.com",
          "contactNumber": "4072699955",
          "age": 30,
          "dob": "22/03/1993",
          "salary": 3.0,
          "address": "Address3"
        },
        {
          "id": 1004,
          "imageUrl": "https://hub.dummyapis.com/Image?text=GJ&height=120&width=120",
          "firstName": "Gertrude",
          "lastName": "Johnston",
          "email": "Gertrude.Johnston@dummyapis.com",
          "contactNumber": "4801595459",
          "age": 71,
          "dob": "24/08/1952",
          "salary": 4.0,
          "address": "Address4"
        },
        {
          "id": 1005,
          "imageUrl": "https://hub.dummyapis.com/Image?text=KD&height=120&width=120",
          "firstName": "Kolby",
          "lastName": "Douglas",
          "email": "Kolby.Douglas@dummyapis.com",
          "contactNumber": "4051698862",
          "age": 75,
          "dob": "09/06/1948",
          "salary": 5.0,
          "address": "Address5"
        },
        {
          "id": 1006,
          "imageUrl": "https://hub.dummyapis.com/Image?text=DR&height=120&width=120",
          "firstName": "Dell",
          "lastName": "Ritchie",
          "email": "Dell.Ritchie@dummyapis.com",
          "contactNumber": "4790596187",
          "age": 63,
          "dob": "26/06/1960",
          "salary": 6.0,
          "address": "Address6"
        },
        {
          "id": 1007,
          "imageUrl": "https://hub.dummyapis.com/Image?text=LQ&height=120&width=120",
          "firstName": "Leila",
          "lastName": "Quitzon",
          "email": "Leila.Quitzon@dummyapis.com",
          "contactNumber": "4388894291",
          "age": 35,
          "dob": "29/06/1988",
          "salary": 7.0,
          "address": "Address7"
        },
        {
          "id": 1008,
          "imageUrl": "https://hub.dummyapis.com/Image?text=JW&height=120&width=120",
          "firstName": "Janiya",
          "lastName": "Ward",
          "email": "Janiya.Ward@dummyapis.com",
          "contactNumber": "4186096418",
          "age": 75,
          "dob": "27/08/1948",
          "salary": 8.0,
          "address": "Address8"
        },
        {
          "id": 1009,
          "imageUrl": "https://hub.dummyapis.com/Image?text=DM&height=120&width=120",
          "firstName": "Delilah",
          "lastName": "Mann",
          "email": "Delilah.Mann@dummyapis.com",
          "contactNumber": "4629297320",
          "age": 29,
          "dob": "12/02/1994",
          "salary": 9.0,
          "address": "Address9"
        },
        {
          "id": 1010,
          "imageUrl": "https://hub.dummyapis.com/Image?text=WR&height=120&width=120",
          "firstName": "Watson",
          "lastName": "Rath",
          "email": "Watson.Rath@dummyapis.com",
          "contactNumber": "4407694182",
          "age": 62,
          "dob": "16/02/1961",
          "salary": 10.0,
          "address": "Address10"
        }
      ])

      const [isDeleteEmployee, setIsDeleteEmp]  = useState(false);
      const [deletedEmpId, setDeletedEmpId] = useState(null);

      const deleteEmployeeCallBack = (empId) =>{
            setIsDeleteEmp(true);
            setDeletedEmpId(empId);
           //const unDeletedEmpList =  employeeData.filter(emp => emp.id != empId)
           //setEmployeeData(unDeletedEmpList);
    
      }

      const confirmDelete  = () =>{
            setIsDeleteEmp(false);
            const unDeletedEmpList = employeeData.filter(emp => emp.id != deletedEmpId);
            console.log(deletedEmpId);
            setEmployeeData(unDeletedEmpList);
      }
 
    return (
        <div className="container">
            <div className="row">
                    <h5 className="text-center">Employees</h5>
                    <div className="row" >
                        {employeeData.map( (emp, index) =>(
                            <Employee key={index} emp={emp} deleteEmployee = {deleteEmployeeCallBack}/>
                    ))}
                    </div>
                    
                    
            
            </div>



            {/* Model */}
            {isDeleteEmployee && (<div className="modal d-block show fade" role="dialog" style= {{backgroundColor:'rgb(0,0,0,0.4)'}}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Confirm to delete the employee</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setIsDeleteEmp(false)}>Cancel</button>
                    <button type="button" className="btn btn-danger" onClick={confirmDelete}>Delete</button>
                </div>
                </div>
            </div>
            </div>)}
        </div>)
}

export default EmployeeList;