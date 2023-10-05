import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Profile() {

    const user = {
        email: "training123@gmail.com",
        mobile: 8056585569,
        firstName: "Harika",
        lastName: "Venkata"
    }
    const [userInfo, setUserInfo] = useState(user)

    useEffect(() => {
        //const { token, userId} = localStorage.getItem('user-session');
        // axios.get('http://localhost:3001/v1/users/' + userId, { headers: { Authorization: token } }).then(response => {
        //     console.log(response);
        // }).catch(error => {
        //     console.log(error);
        // })

    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h3 py-2>
                        View Profile
                    </h3>
                    <h4>FirstName: <span className="text-primary">{userInfo.firstName}</span></h4>
                    <h4>LastName : <span className="text-primary">{userInfo.lastName}</span></h4>
                    <h4>Email: <span className="text-primary">{userInfo.email}</span></h4>
                    <h4>MobileNumber: <span className="text-primary"> {userInfo.mobile}</span></h4>
                    <Link className="btn btn-primary my-2" to="/edit-profile"> Edit </Link>
                </div>
            </div>

        </div>
    )
}

