import React from 'react';

interface TextInputProps{
    id: string,
    name: string,
    label: string,
    value: string,
    error: string,
    onChange (event: 
        React.FormEvent<HTMLInputElement|HTMLSelectElement>): void,
}

function TextInput (props: TextInputProps) {
    let wrapperClass = "form-group"
    if (props.error.length > 0) {
        wrapperClass += " has-error"
    }

    return (
        <div className={wrapperClass}>
        <label htmlFor={props.id}>{props.label}</label>
        <div className="field">
            <input
                id={props.id}
                type="text"
                name={props.name}
                onChange={props.onChange}
                className="form-control"
                value={props.value}
            />
        </div>
        {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
    );
}

export default TextInput;