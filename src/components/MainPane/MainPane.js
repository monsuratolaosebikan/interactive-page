import React, { Component } from 'react';
import Card from '../Card/Card';
import './MainPane.css';

export default class MainPane extends Component {
    render() {
        let infoCards = this.props.activeGroup.properties.map(function(card, i) {
            let info = {
              Type: card.data_type,
              Usage: card.app_keys.join(' '),
              EverTrueFieldName: card.name
            };

            return <Card key={i} title={card.name} tableRows={info}/>
        });
        return (
            <div>
                <h1 className="main-title">{this.props.activeGroup.name}</h1>'
                {infoCards}
            </div>
        )
    }
}
