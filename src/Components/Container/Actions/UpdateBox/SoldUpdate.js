import React from 'react';

const SoldUpdate = (props) => {
    
    const changeSale = () => props.changeSale()
    return (
        <div>
            <label>Declare sale!</label>
            <button onClick={changeSale}>DECLARE</button>
        </div>
    );
};


export default SoldUpdate;