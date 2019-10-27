import React, { Component } from 'react';
import './cronometro.css'

class Cronometro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero:0,
            btnName: 'VAI'
        };

        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
        
    }

    vai(){
        if(this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
            this.setState({btnName: 'VAI'});
        } else {
            this.timer = setInterval(() => {
                let state = this.state;
                state.numero += 0.1;
                state.btnName = 'PAUSE'
                this.setState(state);
            }, 100);
        }
    }

    limpar(){
        clearInterval(this.timer);
        let state = this.state;
        state.numero = 0;
        state.btnName = 'VAI'
        this.setState(state);
        this.timer = null;
    }
    
    render() {
        return (
            <div className="container">
                <img src={require('./assets/cronometro.png')} className="img" />
                <a className="timer">{this.state.numero.toFixed(1)}</a>
                <div className="areaBtn">
                    <a className="btnItem" onClick={this.vai}>{this.state.btnName}</a>
                    <a className="btnItem" onClick={this.limpar}>LIMPAR</a>
                </div>
            </div>
        );
    }
}

export default Cronometro;