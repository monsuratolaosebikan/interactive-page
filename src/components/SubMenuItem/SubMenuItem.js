import React, { Component } from 'react';
import {ListGroupItem } from 'react-bootstrap';
import './SubMenuItem.css';


class SubMenuItem extends Component {
    render() {
        return (<ListGroupItem className="menu-item" href={'#'+this.props.title}>{this.props.title}</ListGroupItem>);
    }
}

export default SubMenuItem;