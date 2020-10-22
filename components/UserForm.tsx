import React from "react";
import TextInput from "./common/TextInput";
import { User } from "./model/user";
import { FormErr } from "./ManageUserPage";

export interface FormParam {
    user: User,
    error: FormErr,
    handleSubmit(event: React.FormEvent): void,
    handleChange(
        event: React.FormEvent<HTMLInputElement
                |HTMLSelectElement>): void,
}

function UserForm(props: FormParam) {
    return (
        // on Submit event in form tag is better than in 
        // submit button because user can use Enter key
        // to submit the form
        <form onSubmit={props.handleSubmit}>
            <TextInput
                id="name"
                name="name"
                label="Name"
                onChange={props.handleChange}
                value={props.user.name}
                // null check, replace undefine with 
                // an empty string
                error={props.error.name || ""}
            />

            <div className="form-group">
                <label htmlFor="age">Age</label>
                <div className="field">
                    <select
                        id="age"
                        name="age"
                        onChange={props.handleChange}
                        value={props.user.age || ""}
                        className="form-control"
                    >
                        <option value="" />
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                    </select>
                </div>
            </div>

            <TextInput
                id="phone"
                name="phone"
                label="Phone"
                onChange={props.handleChange}
                value={props.user.phone}
                error={props.error.phone || ""}
            />
            <TextInput
                id="email"
                name="email"
                label="Email"
                onChange={props.handleChange}
                value={props.user.email}
                error={props.error.email || ""}
            />

            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

export default UserForm;
