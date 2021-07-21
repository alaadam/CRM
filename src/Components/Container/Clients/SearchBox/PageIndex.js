import React from 'react';
import { observer, inject } from 'mobx-react'

const SearchInput = (props) => {
    
    let index =  props.clients.index
    return (
        <span>
            <span onClick={props.clients.decreaseIndex}> {`<`} </span>
            <span > {`${20*index}-${20*(index+1)}`} </span>
            <span onClick={props.clients.increaseIndex}> {`>`} </span>
        </span>
    );
};

export default inject("clients")(observer(SearchInput)) ;


