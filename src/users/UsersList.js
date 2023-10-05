import { useContext } from "react";
import { UserContext } from "./UserContext";
import User from "./User";
import { useState } from "react";


function UsersList() {
    const { userData } = useContext(UserContext);


    return (
        <div className="col-sm">
            <h1>UsersList</h1>
            {userData.map(user => (<User key={user.id} id={user.id} />))}
        </div>
    )
}

export default UsersList;