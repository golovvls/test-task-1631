import React, { useState } from "react";
import UserList from "./UserList";
import UserDetails from "./UserDetails.jsx";
import "./App.css";

const App = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <div className="page">
            <div className="app">
                {selectedUser ? (
                    <UserDetails user={selectedUser} onBack={() => setSelectedUser(null)} />
                ) : (
                    <UserList onUserClick={setSelectedUser} />
                )}
            </div>
        </div>
    );
};

export default App;