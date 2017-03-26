import React, { Component } from 'react';
import './CardTitle.css';


class CardTitle extends Component {
    render() {
        return (
            <h3 className="card-title">{this.props.title}</h3>
        )
    }
}

export default CardTitle;