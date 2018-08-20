import React, {Component} from 'react';
import axios from 'axios';
import './DeckHandler.css';
export default class CreateDecks extends Component{
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            text: ''
        };
    }

    handleChange = (e) => {
        this.setState({text: e.target.value})
    }

    edit = (e) => {
        if (e.key === "Enter" && this.state.text.length !== 0){
            this.props.updateDeck(this.props.id, this.state.text);
            this.setState({ editing: false});
        }
    }

    render () {
        console.log('my props here', this.props)
        const {id, text, updateDeck, deleteDeck} = this.props;
        
        console.log(id, text);
        return(
            <div className="savedDeckFormat">
            <h1>Deck #{id}</h1>
            {this.state.editing ? <input className="DeckInputFormat" 
            value={this.state.text}
            onChange={this.handleChange}
            onKeyPress={this.edit}/>:
            <span className="inputText">{text}</span>
        }
        <span className="addButton" 
        onClick={()=> this.setState({editing: !this.state.editing, text})}>
        <img  className="addButton"
        src="https://www.iconsdb.com/icons/preview/white/edit-2-xxl.png" alt="edit"/>
        </span>
        <span
        onClick={()=> deleteDeck(id)}> <img src="https://www.iconsdb.com/icons/preview/white/delete-xxl.png" className="deleteButton"/></span>
            </div>
        )
    }



}