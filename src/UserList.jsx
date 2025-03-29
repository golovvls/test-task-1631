import React, { useState, useEffect } from "react";
import "./UserList.css";

const UserList = ({ onUserClick }) => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div className="user-list">
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="user-list__item" onClick={() => onUserClick(user)}>
                        <div className="user-list__avatar">{user.name[0]}</div>
                        <div className="user-list__info">
                            <span className="user-list__name">{user.username}</span>
                            <span className="user-list__company">company:{user.company.name}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
};

// const UserDetails = ({ user, onBack }) => (
//     <div className="user-details">
//         <button className="user-details__back" onClick={onBack}>← Назад</button>
//         <h2>{user.name}</h2>
//         <p>Email: {user.email}</p>
//         <p>Телефон: {user.phone}</p>
//         <p>Сайт: {user.website}</p>
//     </div>
// );

export default UserList;