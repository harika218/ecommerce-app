import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useEffect, useState } from "react";
function User(props) {
    const { userData, deleteUser } = useContext(UserContext);
    const [user, setUser] = useState({});

    useEffect(() => {

        setUser(userData.find(user => user.id === props.id));
    }, [])



    return (
        <div className="row my-2">
            <div className="col-sm">
                <p>Name: <span className="text-primary">{user.name}</span></p>
                <p>Email: <span className="text-primary">{user.email}</span></p>
                <p>MobileNo: <span className="text-primary">{user.phone}</span></p>
                <p>Company: <span className="text-primary">{user.company}</span></p>
                <button className="btn btn-danger my-2" onClick={() => deleteUser(user.id)}> Delete </button>
            </div>
            <hr />


        </div>
    )
}

export default User;