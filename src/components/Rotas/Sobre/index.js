import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sobre extends Component {
    render() {
        return (
            <div>
                Sobre <br />
                <Link to="/">Ir para Home</Link>
            </div>
        );
    }
}

export default Sobre;