import React, { Component } from 'react';
import {Panel, PanelGroup, ListGroup} from 'react-bootstrap';
import SubMenuItem from '../SubMenuItem/SubMenuItem';
import './SideMenu.css';


export default class SideMenu extends Component {
    render() {
        let groups = this.props.groups.map(function (group, groupkey) {
            let properties = null;
            if (group.properties) {
                properties = group.properties.map(function (property, propkey) {
                    return <SubMenuItem key={propkey} title={property.name}/>
                })
            }

            return (
                <Panel eventKey={groupkey}
                       onClick={() => this.props.setGroup(group.name, groupkey)}
                       key={groupkey} className="menu"
                       header={group.name}
                       collapsible>
                    <ListGroup fill>
                        {properties}
                    </ListGroup>
                </Panel>
            )
        }, this);

        return (
            <div>
                <Panel className="menu-title">
                    FIELD GROUPS
                </Panel>
                <PanelGroup defaultActiveKey={0} accordion>
                    {groups}
                </PanelGroup>
            </div>
        )
    }
}
