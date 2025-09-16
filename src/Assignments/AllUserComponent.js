import React from "react";
import { useState } from "react";
import SingleUserComponent from "./SingleUserComponent";

const users = [
    { id: 1, name: "Aditya Thorve", email: "thorveaditya111@gmail.com", phone: "1234567890", address: "JUNNAR" },
    { id: 2, name: "Dipak Mundhe", email: "dipakmundhe111@gmail.com", phone: "8468943682", address: "JUNNAR" },
    { id: 3, name: "Sagar Tayade", email: "Sagartayade111@gmail.com", phone: "8483913495", address: "NAGPUR" }
    // Add more user objects as needed
];

const AllUsersComponent = ()=>{
    const [userList,setUserList] = useState([]);
    const [isUsersVisible,setIsUserVisible] = useState(false);

    const handleAddAllUsers = () => {
        setUserList(users);
        setIsUserVisible(true);

    }

    const handleDeleteUsers =() =>{
        setUserList([]);
        setIsUserVisible(false);
    }

    const handleDeleteAllUsers = (userId)=>{
        setUserList(userList.filter(user => user.id !== userId));
    }

    return(
        <div>
            <button onClick={isUsersVisible ? handleDeleteAllUsers: handleAddAllUsers}>
                {isUsersVisible ? 'Delete All Users':'Add All Users'}
            </button>

            {isUsersVisible && (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Action</th>
                           </tr>
                    </thead>
                    <tbody>
                        {userList.map(user => (
                           <SingleUserComponent key={user.id} user={user} onDelete={handleDeleteUsers}/> 
                        ))}
                        </tbody>
                        </table>
                    )};
        </div>
    );
}
export default AllUsersComponent;