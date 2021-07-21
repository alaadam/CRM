import React from 'react';
import { Route } from 'react-router-dom';
import Actions from './Actions/Actions'
import Clients from './Clients/Clients'
import Home from './Home/Home'
import Analytics from './Analytics/Analytics'


const Container = () => {
    
    return (
        <div>
            <Route path='/' exact render={() => <Home />} />
            <Route path='/clients' exact render={() => <Clients />} />
            <Route path='/actions' exact render={() => <Actions />} />
            <Route path='/analytics' exact render={() => <Analytics />} />
        </div>
    );
};

export default Container;
