import React, {Component} from 'react';
import './Menu.css';

export default class MenuButton extends Component {
    render(){
        return(
            <img 
            className="menuIcon" 
            src="https://www.iconsdb.com/icons/preview/white/menu-4-xxl.png"
            onClick={this.props.handleClickHere}/>
        )
    }

}