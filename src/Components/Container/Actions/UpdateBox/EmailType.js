import React from 'react';
//import { observer, inject } from 'mobx-react';
import { useState } from 'react';

const EmailType = (props) => {

    const [emailType, setEmailType] = useState(" ")

    const handleChange = (event) => setEmailType(event.target.value)

    const updateEmailType = () => props.updateEmailType(emailType)

    return (
        <div>
            <label>Send Email: </label>
            <select value={emailType} onChange={handleChange} placeholder="Email Type">
                <option value={"A"}> A </option>
                <option value={"B"}> B </option>
                <option value={"C"}> C </option>
                <option value={"D"}> D </option>
            </select>
            <button onClick={updateEmailType}>SEND</button>
        </div>
    );
};

export default EmailType;