import React, {Component} from 'react';
import axios from 'axios';

//This page generates your deck list on click, so that you can save your progress as you go, and save your deck in an easy-to-transfer list.

export default class DeckList extends Component {
    constructor(props){
        super(props)
        this.state={
            favorites: this.props.favorites,
            deckList: this.props.deckList,
        }
    }

    updateDeckList= (props) => {
        let updated = this.props.favorites;
        return this.setState({deckList: updated});
    }

    render(){
      console.log(this.props.favorites)  
      return(
          <div>
            <button className="buttonClass" onClick={this.updateDeckList}>Generate Deck List</button>
            <div className="deckList" contentEditable>{this.state.deckList.map((e)=> <p> {JSON.stringify(e.name)}</p>)}
            </div>
        {console.log(this.state.deckList)}
        </div>
      )
    }
}