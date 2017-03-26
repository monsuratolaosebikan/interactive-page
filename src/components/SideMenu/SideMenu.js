import React, { Component } from 'react';
import {Panel, PanelGroup} from 'react-bootstrap';
import MenuItem from '../MenuItem/MenuItem';
import './SideMenu.css';


class SideMenu extends Component {
    render() {
        let groups = this.props.groups.map(function(group,groupKey) {
            console.log(groupKey);
            return <MenuItem key={groupKey}
                             eventKey={String(groupKey)}
                             title={group.name}
                             properties={group.properties}
                             setGroup={this.props.setGroup}>
                    </MenuItem>
        }.bind(this));

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

export default SideMenu;



/*render() {
 let groups = this.props.groups.map(function(group,groupkey) {
 let properties =  null;
 if(group.properties) {
 properties = group.properties.map(function(property,propkey) {
 return <MenuItem key={propkey} title={property.name}/>
 })
 }

 return (
 <Panel eventKey={groupkey}
 onClick={()=>this.props.setGroup(group.name,groupkey)}
 key={groupkey} className="menu"
 header={group.name}
 collapsible>
 <ListGroup fill>
 {properties}
 </ListGroup>
 </Panel>
 )
 }.bind(this));

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
 }*/