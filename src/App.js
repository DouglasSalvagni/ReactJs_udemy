import React, { Component } from 'react';
//import Biscoito from './Biscoito'
//import Cronometro from './Cronometro'
import Api from './Api'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <React.Fragment>
               {/* <Biscoito /> */}
               {/* <Cronometro /> */}
               <Api />
            </React.Fragment>
        );
    }
}

export default App;