import React, {Component} from 'react';
import "./Menu.css";
import DeckHandler from '../DeckHandler';
import DeckList from '../../components/cards/decklist';

export default class Menu extends Component {
    render() {
        var visibility = "hide";
        if (this.props.menuVisibility){
            visibility = "show";
        }
    
    return(
        <div id="flyoutMenu" className={visibility}>
        <img src="https://www.iconsdb.com/icons/preview/white/close-window-xxl.png" className="exitButton" onClick={this.props.handleClickHere}/>
        <DeckHandler/>
        </div>
    )}
}