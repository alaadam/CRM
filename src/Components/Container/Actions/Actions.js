import React from 'react';
import AddClientForm from './AddClientForm'
import UpdateBox from './UpdateBox/UpdateBox';

const Actions = (props) => {

    return (
        <div>
            <UpdateBox />
            <hr></hr>
            <AddClientForm />
        </div>
    );
};

export default Actions