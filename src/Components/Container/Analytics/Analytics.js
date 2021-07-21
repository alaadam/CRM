import React from 'react';
import Badges from './Badges/Badges'
import Charts from './Charts/Charts'
import {inject , observer} from 'mobx-react'

const Analytics = (props) => {
    
    console.log(props.analytics.SalesBy)
    return (
        <div>
            <Badges listBadges={props.analytics.listBadges} />
            <Charts TopEmployees={props.analytics.TopEmployees} salesBy={props.analytics.SalesBy} />
        </div>
    );
};

export default inject('analytics')(observer(Analytics));