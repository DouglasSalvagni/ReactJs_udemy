import React, { Component } from 'react';
//https://sujeitoprogramador.com/rn-api/?api=posts

class Api extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            nutri: []
        };

    }

    componentDidMount() {
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
        fetch(url)
            .then((r) => r.json())
            .then((json) => {
                let state = this.state;
                state.nutri = json;
                this.setState(state);
            })
    }

    render() {
        return (
            <div className='container'>
                {this.state.nutri.map((item) => {
                    return(
                        <article key={item.id}>
                            <strong>{item.titulo}</strong>
                            <img src={item.capa}></img>
                            <p>{item.subtitulo}</p>
                            <a className="botao" href="#">Acessar</a>
                        </article>
                    );
                })}
            </div>
        );
    }
}

export default Api;