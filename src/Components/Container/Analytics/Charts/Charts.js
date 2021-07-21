import React from 'react';
import SalesBy from './SalesBy'
import TopEmployees from './TopEmployees'

const Charts = (props) => {

    return (
        <div>
            <TopEmployees topEmployees={props.TopEmployees}/>
            <SalesBy salesBy={props.salesBy}/>
        </div>
    );
};

export default Charts;