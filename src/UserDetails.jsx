import React from "react";
import { useState, useEffect } from "react";
import PostList from "./PostList.jsx";
import "./UserDetails.css";

const UserDetails = ({ user, onBack }) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);
    return (
        <div className="user-profile">
            <div className="user-header">
                <button className="user-details__back" onClick={onBack}>← Назад</button>
                <h2>{user.username}</h2>
            </div>
            <div className="user-details">
                <p><strong>name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Телефон:</strong> {user.phone}</p>
                <p><strong>Сайт:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
                <p><strong>Компания:</strong> {user.company.name}</p>
                <p><strong>Адрес:</strong> {user.address.city}, {user.address.street}, {user.address.suite}</p>
            </div>
            <PostList user={user}/>
        </div>
    );
};

export default UserDetails;