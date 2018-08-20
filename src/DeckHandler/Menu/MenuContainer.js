import React, {Component} from 'react';
import './Menu.css'
import Menu from './Menu';
import MenuButton from './MenuButton';

export default class MenuContainer extends Component{
    constructor(props, content){
        super(props, content);

        this.state = {
            visible: false
        };

    }

 handleClickHere = (e) =>{
    this.toggleMenu();
    
    console.log("clicked");
    e.stopPropagation();
}

toggleMenu = () => {
    this.setState(
        {
            visible: !this.state.visible
        }
    );
}
render(){
    return(
        <div>
        <MenuButton handleClickHere={this.handleClickHere}/>
        <Menu handleClickHere={this.handleClickHere}
            menuVisibility={this.state.visible}/>
            </div>
    )
}

    
}