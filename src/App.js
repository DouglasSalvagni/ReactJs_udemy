import React, { Component } from 'react';

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                {id: 1, nome: 'Douglas', idade: 30},
                {id: 2, nome: 'Priscilla', idade: 25},
                {id: 3, nome: 'Paola', idade: 18},
                {id: 5, nome: 'Souza', idade: 15},
            ]
        };

    }

    render() {
    return(
            <React.Fragment>
                {this.state.feed.map((item) => {
                    return(
                        <div key={item.id}>
                            <h1>{item.nome}</h1>
                            <h2>{item.idade}</h2>
                            <hr/>
                        </div>
                    )
                })}
            </React.Fragment>
        );
    }

}

export default App;