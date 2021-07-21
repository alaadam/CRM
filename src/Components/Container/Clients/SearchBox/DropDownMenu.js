import React from 'react';
import { observer, inject } from 'mobx-react'

const DropDownMenu = (props) => {
    
    const setDropDownWord = (event) => props.setDropDownWord(event.target.value)

    return (
        <select value={props.DropDownWord} onChange={setDropDownWord} placeholder="Search">
            <option value={`first`}> first </option>
            <option value={`last`}> last </option>
            <option value={`country`}> country </option>
            <option value={`date`}> date </option>
            <option value={`emailType`}> emailType </option>
            <option value={`sold`}> sold </option>
            <option value={`owner`}> owner</option>
        </select>
    );
};

export default inject("owners")(observer(DropDownMenu))

