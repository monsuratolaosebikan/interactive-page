import React, { Component } from 'react';
import { Table} from 'react-bootstrap';
import CardTitle from '../CardTitle/CardTitle';
import CardRow from '../CardRow/CardRow';
import './Card.css';


class Card extends Component {
    render() {
        let rows = [];
        for(let row in this.props.tableRows) {
            rows.push(<CardRow key={row} label={row} value={this.props.tableRows[row]} />)
        }

        return (
            <div id={this.props.title} className="card">
                <CardTitle title={this.props.title}/>
                <Table bordered condensed>
                    <tbody>
                    {rows}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Card;