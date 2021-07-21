import React from 'react';
import EmailType from './EmailType';
import OwnerUpdate from './OwnerUpdate';
import SoldUpdate from './SoldUpdate';
import { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react';

const UpdateBox = (props) => {

    const [clientName, setClientName] = useState({
        first: '',
        last: '',
    })

    const [soldStatus, setSoldStatus] = useState('false')

    useEffect(setSold, [clientName,props.clients]);
    
    function setSold(){
        setSoldStatus(props.clients.saleStatus(clientName.first, clientName.last))
    }



    const handleChange = (event) => {
        const myArr = event.target.value.split(" ");
        setClientName({
            ...clientName,
            first: myArr[0],
            last: myArr[1],
        });
    }

    const changeOwner = (OwnerName) => props.clients.updateOwnership(clientName.first, clientName.last, OwnerName)

    const updateEmailType = (emailType) => props.clients.updateEmailType(clientName.first, clientName.last, emailType)

    const changeSale = () => props.clients.updateSale(clientName.first, clientName.last)

    return (
        <div>
            <h1>Update</h1>
            <input type="text" list="data" onChange={handleChange} />
            <datalist id="data">
                {props.clients.list.map((item, key) =>
                    <option key={key} value={`${item.first} ${item.last}`} />
                )}
            </datalist>
            <OwnerUpdate changeOwner={changeOwner} />
            <EmailType updateEmailType={updateEmailType} />
            {soldStatus === 0 ? <SoldUpdate changeSale={changeSale} /> : null}
        </div>
    );
};


export default inject("clients")(observer(UpdateBox))