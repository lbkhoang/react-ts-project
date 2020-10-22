import React, { useState, useEffect } from 'react';
import { User } from './model/user';
import UserList from './UserList';
import { Link } from "react-router-dom";
import { getUser } from './api/userApi';

function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        // On load event, set user data
        getUser().then(json => { setUsers(json.user) });
    }, []);

    function delUser(event: React.MouseEvent) {
        let url = 'http://127.0.0.1:5000/delete/' + event.currentTarget.id
        fetch(url, { method: "DELETE" }).then(() => {
            // TODO: refactor this with flux
            // Reason: client side store management 
            // is better than making another api call
            getUser().then(json => { setUsers(json.user) });
        })
    }

    return (
        <>
            <h2>Users List</h2>
            <Link className="btn btn-primary" to="/user">
                New User
        </Link>
            <UserList
                users={users}
                handleClick={delUser}
            />
        </>
    );
}

export default UsersPage;