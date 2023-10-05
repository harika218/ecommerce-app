import AddUser from "./AddUser";
import UsersList from "./UsersList";
import { UserContext } from "./UserContext";
import { useState } from "react";
function Users() {
    const [userData, setUserData] = useState([
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            phone: "1-770-736-8031 x56442",
            company: "Romaguera-Crona"
        },
        {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv",
            phone: "010-692-6593 x09125",
            company: "Deckow-Crist"
        },
        {
            id: 3,
            name: "Clementine Bauch",
            username: "Samantha",
            email: "Nathan@yesenia.net",
            phone: "1-463-123-4447",
            company: "Romaguera-Jacobson"
        }
    ])


    const addUser = (user) => {
        setUserData([...userData, { ...user, id: userData.length + 1 }])
    }

    const deleteUser = (userId) => {
        setUserData(userData.filter(user => user.id != userId))
    }
    return (
        <div className="container">
            <div className="row">
                <UserContext.Provider value={{ userData, deleteUser, addUser }}>
                    <UsersList />
                    <AddUser />
                </UserContext.Provider>

            </div>
        </div>
    )
}

export default Users;