import React, {Component} from "react";
import axios from "axios";
import './DeckHandler.css';
import DeckList from '../components/cards/decklist';
import CreateDecks from "./CreateDecks";

export default class DeckHandler extends Component {
    constructor(){
        super();
        this.state = {
            decks: [],
            text: '',
            favorites: [],
            deckList: [],
            err: false
        };
    }

    componentDidMount(){
        axios.get('api/cards')
            .then(res =>{
                console.log(res)
                 this.setState({decks: res.data.data,
                    favorites: res.data.favorites,
                    deckList: this.data.deckList
                })})
            .catch(err=> this.setState({err: true}))
    }


    handleChange = (e) =>{
        this.setState({text: e.target.value})
    }

    createDeck = (e) =>{
        const {text} = this.state;
        if (e.key === "Enter" && text.length !== 0){
            axios.post('api/cards', {text})
            .then(res => {this.setState({decks: res.data})})
        }
    }

    updateDeck = (id, text, e) =>{
        console.log('editDeck:', id, text);
        axios.put(`/api/cards/${id}`, {text})
        .then( res=> { console.log(res)
            this.setState({decks: res.data})}
        )
    }

    deleteDeck = (id) => {
        axios.delete(`/api/cards/${id}`)
        .then(res => this.setState({decks: res.data}))
    }

    render(){
        console.log(this.state)
        const displayDecks = this.state.decks &&
                    this.state.decks.map(decks => {
                       return <div className="deckChildContainer">
                       <CreateDecks 
        
                        id={decks.id} 
                        key={decks.id} 
                        text={decks.text} 
                        updateDeck={this.updateDeck}
                        deleteDeck={this.deleteDeck}/>
                        </div>
                    }
                    )
                    
        return(
            <div class="newInputContainer">
            <h1>Save your Deck List Here!</h1>
            <input placeholder="Paste your deck here!"
                    onKeyPress={this.createDeck}
                    onChange={this.handleChange}
                    value={this.state.text}
                    className="inputBox"/>
                    <div className="deckContainer">
                <div className="deckParentContainer">
                    {displayDecks}

                </div>
            </div>
            <div className="newInputContainer">
            
            </div>
            </div>
        )
    }
}
