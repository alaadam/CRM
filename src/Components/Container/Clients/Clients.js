import React, { useState } from 'react';
import Client from './Client'
import InfoBar from './InfoBar';
import { observer, inject } from 'mobx-react'
import SearchBox from './SearchBox/SearchBox'


const Clients = (props) => {

    const [filter, setFilter] = useState(['', 'first'])

    const filteredResults = () => {
        return props.clients.list.filter(client => client[filter[1]].includes(filter[0]))
    }

    const updateClient = (clientId,updatedClient) =>{
        props.clients.updatePersonalInfo(clientId,updatedClient)
    }

    return (
        <div>
            <SearchBox setFilter={setFilter} />
            <InfoBar />
            {filteredResults().map((client,index) => <Client key={index} updateClient={updateClient} clientInfo={client} />)}
        </div>
    );
};

export default inject("clients")(observer(Clients))