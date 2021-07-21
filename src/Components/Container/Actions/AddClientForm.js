import React from 'react';
import { useState } from 'react';
import { observer, inject } from 'mobx-react'

const AddClientForm = (props) => {

    const [input, setInput] = useState({
        first: "",
        last: "",
        country: "",
        owner: "",
    })

    //const [clientFormInput, setClientFormInput] = useState({})

    // useEffect(() => {
    //     console.log("hihihihihi")
    //     props.clients.addClient(clientFormInput)
    // }, [clientFormInput]);


    function handleChange(event) {
        const value = event.target.value;
        setInput({
            ...input,
            [event.target.name]: value
        });
    }

    const AddClinet = () => {
        props.clients.addClient(input)}

    return (
        <div>
            <h1>Add Client</h1>
            <input value={props.firstInput} name="first" onChange={handleChange} />
            <input value={props.lastInput} name="last" onChange={handleChange} />
            <input value={props.countryInput} list="dataCountries" name="country" onChange={handleChange} />
            <datalist id="dataCountries">
                {props.countries.list.map((item ,key) =>
                    <option key={key} value={item.country} />
                )}
            </datalist>
            <input value={props.ownerInput} list="dataOwner" name="owner" onChange={handleChange} />
            <datalist id="dataOwner">
                {props.owners.list.map((item,key) =>
                    <option key={key} value={item.owner} />
                )}
            </datalist>
            <button onClick={AddClinet}>Add New Client</button>
        </div>
    );
};


export default inject('clients', 'countries', 'owners')(observer(AddClientForm));
