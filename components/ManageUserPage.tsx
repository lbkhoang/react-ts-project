import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import UserForm from "./UserForm";
import { User } from "./model/user";
import { getUserById } from "./api/userApi";

// Form err interface
export interface FormErr {
    name?: string;
    age?: number | string;
    phone?: string;
    email?: string;
}

// URL Type
type TParams = { id: string };

//const ManageUserPage = ( {match} : RouteComponentProps<TParams>) => {
const ManageUserPage = (props: RouteComponentProps<TParams>) => {
    const [user, setUser] = useState<User>({
        id: "",
        name: "",
        age: "",
        phone: "",
        email: "",
    })

    const [error, setError] = useState<FormErr>({})

    useEffect(() => {
        // Get URL param
        const uId = props.match.params.id

        // On load, if the URL has param then get the user
        // and fill in the form with that user data
        if (uId) {
            // getUserById return a promise. Chaining a .then 
            // make code cleaner
            getUserById(uId).then(respond => setUser(respond.user))
        }
    }, [props.match.params.id])

    function formIsValid() {
        const _error: FormErr = {};
        // Validations go here
        if (!user.name) _error.name = "Name is required"
        if (!user.age) _error.age = "Age is required"
        if (!user.phone) _error.phone = "Phone is required"
        if (!user.email) _error.email = "Email is required"
        // setError re-render with error
        setError(_error);
        //Form is valid if the _error object has no property
        return Object.keys(_error).length === 0;
    }

    // This form has an Input and Select field so the type is
    // HTMLInputElement or HTMLSelectElement. Can add more if
    // needed: text area (HTMLTextAreaElement), select box 
    // (HTMLOptGroupElement), radio (HTMLOptionElement),...
    function handleChange(event: React.FormEvent<HTMLInputElement
        | HTMLSelectElement>): void {
        setUser({
            // spread operator
            // this command can handle all the change event
            ...user,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        // if form has error, do nothing
        if (!formIsValid()) {
            return
        };

        // update user if url has extra param, if not add new
        if (props.match.params.id) {
            updateUser().then(() => {
                // Redirect to user page
                props.history.push("/users")
            });
        } else {
            addUser().then(() => {
                props.history.push("/users")
            });
        }
    }

    function addUser(): Promise<Response> {
        //remove id value
        let { id, ...data } = user
        let url = 'http://127.0.0.1:5000/add'

        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }

    function updateUser(): Promise<Response> {
        //remove id value
        let { id, ...data } = user;
        let url = 'http://127.0.0.1:5000/update/' + id;

        return fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }

    return (
        <>
            <h2>Manage User</h2>
            <UserForm
                user={user}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                error={error}
            />
        </>
    )
}

export default ManageUserPage;