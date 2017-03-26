import React, { Component } from 'react';
import './CardRow.css';


class CardRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.label}</td>
                <td>{this.props.value}</td>
            </tr>
        );
    }
}

export default CardRow;