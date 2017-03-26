import React, { Component } from 'react';
import {ListGroup, Panel} from 'react-bootstrap';
import SubMenuItem from '../SubMenuItem/SubMenuItem';
import './MenuItem.css';


class MenuItem extends Component {
    render() {
        let properties =  null;
        if(this.props.properties) {
            properties = this.props.properties.map(function(property,propKey) {
                return <SubMenuItem key={propKey} title={property.name}/>
            })
        }

        return (
        <Panel eventKey={this.props.eventKey}
               onClick={()=>this.props.setGroup(this.props.title)}
               key={this.props.key}
               className="menu"
               header={this.props.title}
               collapsible>
            <ListGroup fill>
                {properties}
            </ListGroup>
        </Panel>
    );
    }
}

export default MenuItem;

/*render() {
 return (<ListGroupItem className="menu-item" href={'#'+this.props.title}>{this.props.title}</ListGroupItem>);
 }*/