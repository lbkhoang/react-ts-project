import React from 'react';
import { User } from './model/user'
import { Link } from "react-router-dom";

type props = {
    users: User[],
    handleClick(event: React.MouseEvent): void
}

function UserList(props: props) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>phone</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user => {
                    return (
                        <tr key={user.id}>
                            <td>
                                {/* extra param can be refer as :id
                                passed in routing */}
                                <Link to={'/user/' + user.id}>{user.name}</Link>
                            </td>
                            <td>{user.age}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>
                                <button
                                    // assign an id for this button
                                    // for the event handler
                                    id={user.id}
                                    className="btn btn-danger"
                                    onClick={props.handleClick}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default UserList;