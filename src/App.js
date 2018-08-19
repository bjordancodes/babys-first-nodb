import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import List from './components/list/list';
import GetCards from './components/cards/getCards';

class App extends Component {
  constructor() {
    super();
    this.state= {
      data: [],
      didErr: false,
      supertype: "Pokémon",
      type: '',

    };
    this.addPerson = this.addPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

   
  componentDidMount(){
    axios
    .get('/api/people/')
    .then(res=> this.setState({data: res.data}));
  }

  addPerson(){
    axios
      .post('api/people')
      .then(res => this.setState({data: res.data})).catch(err=> this.setState({ didErr: true, newName: ''}));
  }

  deletePerson(id){
    axios
      .delete(`/api/people/${id}`)
      .then(res => this.setState({data: res.data }))
      .catch(err => console.log(err));
  }

  superType= (event) => {
    this.setState({supertype: event.target.value});
  }

  types = (event) => {
    this.setState({type: event.target.value});
  }

  render() {
   
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://www.iconsdb.com/icons/preview/white/menu-4-xxl.png" className="menuIcon" alt="menu icon"/>
          <img src="https://gifer.com/i/3bMU.gif" className="App-logo" alt="logo" />
          <h1 className="App-title">CardéMon</h1>
        </header>


        {/* <input type="text" value="Who are you looking for?"/><p/> */}
        Card Type: <select className="selectBox" onChange={this.superType} value={this.state.supertype}>
         <option value=''>Select</option>
         <option value="Pokémon">Pokémon</option>
         <option value="Trainer">Trainer</option>
         <option value="Energy">Energy</option>
        </select>
        {console.log(this.state.supertype)}
        Pokemon Type:
        <select className="selectBox" onChange={this.types} value={this.state.type}>
          <option value=''>Select</option>
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
      {/* {console.log(this.state.type)} */}
        <button onClick={this.changeType} value={this.state.supertype}>Get Pokemon!</button>

        {!this.state.data[0] ? 
        (<h1> {`No cards :(`}

    </h1> ): (
    
    <div className="cardBox"> <List list ={this.state.data} search={this.state.supertype} types={this.state.type}/></div>)}
    <div>
      <button onClick={this.addPerson} value={this.state.supertype}>Add Pokemon</button>
    </div>
    {console.log(this.state.data)}
    {this.state.didErr && <h1> ERROR :(</h1>}
      </div>
    );
  }
}

export default App;
