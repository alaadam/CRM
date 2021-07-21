import React from 'react';
import Popup from 'reactjs-popup';
import { observer, inject } from 'mobx-react';
import { useState } from 'react';

import 'reactjs-popup/dist/index.css';

const Client = (props) => {

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const [updatedClient, setUpdatedClient] = useState({
        first: props.clientInfo.first,
        last: props.clientInfo.last,
        country: props.clientInfo.country
    })

    function handleChange(event) {
        const value = event.target.value;
        setUpdatedClient({
            ...updatedClient,
            [event.target.name]: value
        });
    }

    const updateClient = () => {
        setOpen(o => !o)
        console.log(updatedClient)
        props.updateClient(props.clientInfo.id, updatedClient)
    }

    return (
        <div>
            <div className="button" onClick={() => setOpen(o => !o)}>
                <span>
                    <span>{props.clientInfo.first} </span>
                    <span>{props.clientInfo.last} </span>
                    <span>{props.clientInfo.country} </span>
                    <span>{props.clientInfo.date} </span>
                    <span>{props.clientInfo.email_type} </span>
                    <span>{props.clientInfo.sold} </span>
                    <span>{props.clientInfo.owner} </span>
                    <span>{props.clientInfo.owner_id} </span>

                </span>
            </div>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <label>First Name</label><input name="first" onChange={handleChange} value={updatedClient.first} />
                <br></br>
                <label>Surname</label><input name="last" onChange={handleChange} value={updatedClient.last} />
                <br></br>
                <label>Country</label>
                <input name="country" list="data" onChange={handleChange} value={updatedClient.country} />
                <datalist id="data">
                    {props.countries.list.map((item,key) =>
                        <option key={key} value={item.country} />
                    )}
                </datalist>
                <button onClick={updateClient}>update</button>
            </Popup>
        </div>
    )
};

export default inject("countries")(observer(Client));