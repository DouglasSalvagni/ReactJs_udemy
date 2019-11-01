import React, { Component } from 'react';
import TudoItems from './TudoItems';

class index extends Component {

    constructor(props){
        super(props);
        this.state = {
            tarefa: '',
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.log = this.log.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        console.log(e)
        let state = this.state;
        if(this._tarefaInput.value !== '') {
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            };

            this.setState({items: [...state.items, newItem] });
        }

        e.preventDefault();
        this.setState({tarefa: ''})
    }

    log(){
        console.log(this.state.items);
    }

    deleteItem(key) {
        console.log(key);
        let filtro = this.state.items.filter((item) => {
            return(item.key !== key);
        });

    this.setState({items: filtro});
    }

    render() {
        return (
            <div>
                <h1>Lista</h1>
                <form onSubmit={this.addItem}>
                    <input type='text' placeholder='Nova Tarefa?' name='tarefa'
                        value={this.state.tarefa} onChange={(ev) => this.setState({tarefa: ev.target.value})}
                        ref={(event) => this._tarefaInput = event} />
                    <button type='submit'>
                        Adicionar 
                    </button>
                </form>

                <button onClick={this.log}>LOG</button>
                  
                <TudoItems lista={this.state.items} delete={this.deleteItem}/>
            </div>
        );
    }
}

export default index;