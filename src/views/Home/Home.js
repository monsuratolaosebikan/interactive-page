import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SideMenu from '../../components/SideMenu/SideMenu';
import MainPane from '../../components/MainPane/MainPane';
import './Home.css';
const data = require('../../schema.json');

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.schema = this.parseJson();
        this.state = {activeGroup : this.schema[0]};
        this.setActiveGroup = this.setActiveGroup.bind(this);
    }
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col className="sidemenu" md={3}>
                        <SideMenu setGroup={this.setActiveGroup} groups={this.parseJson()}/>
                    </Col>
                    <Col className="main" md={9}><MainPane activeGroup={this.state.activeGroup}/></Col>
                </Row>
            </Grid>
        );
    }

    setActiveGroup(name) {
        this.setState({activeGroup: this.getGroupData(name)});
        console.log(name);
    }

    getGroupData(name) {
        for(let i = 0; i < this.schema.length; i++) {
            if(this.schema[i].name === name) {
                return this.schema[i];
            }
        }
    }

    parseJson() {
        return data.reduce(function(list, group) {
            let obj = {
                        name: group.containing_object ? group.containing_object.name : group.name,
                        properties: group.containing_object ? group.containing_object.properties : group.properties || [{name:group.name, app_keys:group.app_keys, data_type:group.data_type}],
                    };
            list.push(obj);
            return list;
        },[])
    }
}

