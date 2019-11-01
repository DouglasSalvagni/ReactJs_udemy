import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre'
import Header from './Header'


const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sobre" component={Sobre} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes