import React, { Component } from 'react';
//import Biscoito from './Biscoito'
//import Cronometro from './Cronometro'
//import Api from './Api'
import TudoList from './components/tudolist/index'

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
               {/* <Api /> */}
               <TudoList />
            </React.Fragment>
        );
    }
}

export default App;