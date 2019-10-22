import React, { Component } from 'react';

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            color: 'oi',
        };
    }

    botao() {
        const bodyColor = document.querySelector('body')
            .style.backgroundColor;
        var state = this.state;
        console.log(state.color);

        if (bodyColor) {
            document.querySelector('body')
                .style.backgroundColor = '#9999';
        } else {
            document.querySelector('body')
                .style.backgroundColor = 'red';
        }
    }

    render() {
    return(
            <React.Fragment>
                <h1 onClick={this.botao}>asd</h1>
                <h2>sda</h2>
            </React.Fragment>
        );
    }
}

export default App;