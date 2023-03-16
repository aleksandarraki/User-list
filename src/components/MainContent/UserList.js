import { useState } from "react";
import UserData from "./UserData";



export const UserList = () => {
    const [users] = useState(UserData);

    const randomUsers = users.sort(() => 0.5 - Math.random()).slice(0, 9);

    return (
        <div className="container">
            {randomUsers.map(user => (
                <div key={user.email} className="userProfile">
                    <div>
                        <img src={user.picture.thumbnail} alt="user" className="img" />
                    </div>
                    <div className="userInfo">
                        <p>name: {user.name.first}</p>
                        <p>email: {user.email} </p>
                        <p>date of birth: {new Date(user.dob.date).toLocaleDateString()} </p>
                    </div>
                </div>
            ))

            }
        </div>
    )
}