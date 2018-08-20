import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import List from './components/list/list';
import AddButton from './components/cards/addButton';
import DeckList from './components/cards/decklist';
import MenuContainer from './DeckHandler/Menu/MenuContainer';


class App extends Component {
  constructor() {
    super();
    this.state= {
      data: [],
      didErr: false,
      supertype: "Pokémon",
      type: '',
      favorites: [],
      deckList: [],
      visible: false

    };
    this.deletePokemon = this.deletePokemon.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
  }

   
  componentDidMount(){
    axios
    .get('/api/people/')
    .then(res=> this.setState({data: res.data.data, favorites: res.data.favorites, deckList: res.data.deckList}));
  }

  addFavorite(id){
    console.log(id);
    let reqID = this.state.data.map((e, i, arr)=> e.id).indexOf(id)
    console.log(reqID);
    axios.post(`api/people?id=${reqID}`)
    .then(res=> this.setState({favorites: res.data}
))
    .catch(err=>this.setState({didErr: true}))

}

  deletePokemon(id){
    axios
      .delete(`/api/people/${id}`)
      .then(res=> this.setState({favorites: res.data }))
      .catch(err => console.log(err));
  }

  saveDeckList = (e) => {
    console.log(e.target.value);
    axios.put('/api/people', e.target.value)
        .then(res=> this.setState({deckList: res.data}))
        .catch(err => console.log(err));
  }

  superType= (event) => {
    this.setState({supertype: event.target.value});
  }

  types = (event) => {
    this.setState({type: event.target.value});
  }

  toggleMenu=()=> {
    this.setState({ visible: !this.state.visible})
  }

  handleMenu = (e) =>{
    this.toggleMenu();
    console.log("click");
    e.stopPropagation();
  }

  render() {
   
    return (
      <div className="App">
        <header className="App-header">
          <MenuContainer/>
          
          {/* <img src="https://gifer.com/i/3bMU.gif" className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to <p><img src="https://imgur.com/giwttWm.png"/></p></h1>
        </header>
        <div className="instructions">
        <h3>We're your one-stop-shop for Pokemon TCG deck building.</h3>
        <h2>Here's how it works!</h2>
        <p><ul>
          <li><img className="instructionPic" src="https://www.iconsdb.com/icons/preview/white/search-9-xxl.png"/>Pick your Pokemon Type!</li>
          <li><img className="instructionPic" src="https://www.iconsdb.com/icons/preview/white/add-file-xxl.png"/>Add to your Favorites!</li>
          <li><img className="instructionPic" src="https://www.iconsdb.com/icons/preview/white/save-as-xxl.png"/>Generate your Deck and make your edits!</li>
          <li><img className="instructionPic" src="https://www.iconsdb.com/icons/preview/white/menu-4-xxl.png"/>Go to your Deck List</li>
          <li><img className="instructionPic" src="https://www.iconsdb.com/icons/preview/white/copy-xxl.png"/>Save your Deck List for Later</li>
        </ul>
        </p>
        </div>
        <select className="selectBox" onChange={this.types} value={this.state.type}>
          <option value=''>Select Pokemon Type</option>
        <option value="Fire">Fire</option>
         <option value="Grass" >Grass</option>
         <option value="Water" >Water</option>
         <option value="Lightning" >Lightning</option>
         <option value="Psychic" >Psychic</option>
         <option value="Fighting" >Fighting</option>
         <option value="Metal" >Metal</option>
         <option value="Darkness">Darkness</option>
         <option value="Fairy" >Fairy</option>
         <option value="Dragon" >Dragon</option>
        </select>

        <div><DeckList favorites={this.state.favorites} deckList={this.state.deckList} saveDeckList={this.saveDeckList}/></div>
        
<h2>Favorites List
</h2>

{console.log(this.state)}
<div className="cardBox"><AddButton list = {this.state.favorites} deletePokemon={this.deletePokemon}/></div>
<h2>Pokemon List</h2> 
        {!this.state.data[0] ? 
        (<h1> {`No cards :(`}

    </h1> ): (
    
    <div className="cardBox"> <List list ={this.state.data} 
    search={this.state.supertype} 
    types={this.state.type} 
    add={this.addFavorite} /></div>)}
    {console.log(this.state.data)}
    {this.state.didErr && <h1> ERROR :(</h1>}
      </div>
    );
  }
}

export default App;
