import React from 'react';
import { observer, inject } from 'mobx-react';
import { useState } from 'react';

const OwnerUpdate = (props) => {

    const [ownerName, setOwnerName] = useState("")

    const handleChange = (event) => setOwnerName(event.target.value)

    const changeOwner = () => props.changeOwner(ownerName)

    return (
        <div>
            <label>Transfer ownership to</label>
            <select value={ownerName} onChange={handleChange} placeholder="Owner">
                {props.owners.list.map((owner,key) =>
                    <option key={key} value={owner.owner}>{owner.owner} </option>)}
            </select>
            <button onClick={changeOwner}>Transfer</button>
        </div>
    );
};

export default inject("owners")(observer(OwnerUpdate));