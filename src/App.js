import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import List from './components/list/list';
// import GetCards from './components/cards/getCards';

class App extends Component {
  constructor() {
    super();
    this.state= {
      newName: '',
      data: [],
      didErr: false,
      supertype: '',
      type: '',

    };
    this.addPerson = this.addPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

   
  componentDidMount(){
    axios
    .get('/api/people')
    .then(res=> this.setState({data: res.data}));
  }

  addPerson(){
    axios
      .post('api/people', {name: this.state.newName})
      .then(res => this.setState({data: res.data, newName: ''})).catch(err=> this.setState({ didErr: true, newName: ''}));
  }

  deletePerson(id){
    axios
      .delete(`/api/people/${id}`)
      .then(res => this.setState({data: res.data }))
      .catch(err => console.log(err));
  }

  changeType(superType, type, standard){
    axios
      .get(`/api/people`)
      .then(res=> this.setState({data: res.data}))
      .catch(err=> console.log(err));
  }

  superType= (event) => {
    this.setState({supertype: event.target.value});
  }

  types= (event) => {
    this.setState({type: event.target.value});
  }

  // getCards = (res, req, next) => {
  //   axios
  //        .get(`https://api.pokemontcg.io/v1/cards?standardLegal=${this.state.standardLegal}&supertype=${this.state.supertype}&types=${this.state.type}&pageSize=500`)
  //       .then(res => this.setState({data: res.data.cards})
  //       .catch(err => console.log(err)));
    
  //       res.status(200).json(this.state.data);
  //   }

  render() {
   
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://www.iconsdb.com/icons/preview/white/menu-4-xxl.png" className="menuIcon"/>
          <img src="https://gifer.com/i/3bMU.gif" className="App-logo" alt="logo" />
          <h1 className="App-title">CardéMon</h1>
        </header>


        <input type="text" value="Who are you looking for?"/><p/>
        {/* getCards = (res, req, next) => {
    axios
         .get(`https://api.pokemontcg.io/v1/cards?standardLegal=${this.state.standardLegal}&supertype=${this.state.supertype}&types=${this.state.type}&pageSize=500`)
        .then(res => this.state.data = (res.data.cards))
        .catch(err => console.log(err));
    
        res.status(200).json(this.state.data);
    } */ }
           Card Type:
         <select className="selectBox" onChange={this.superType} value={this.state.supertype}>
         <option value=''>Select</option>
         <option value="Pokemon">Pokemon</option>
         <option value="Trainer">Trainer</option>
         <option value="Energy">Energy</option>
        </select>
        {console.log(this.state.supertype)}
        Pokemon Type:
        <select className="selectBox" onChange={this.types} value={this.state.type}>
          <option value=''>Select</option>
         <option value="Grass" >Grass</option>
         <option value="Water" >Water</option>
         <option value="Lightning" >Lightning</option>
         <option value="Psychic" >Psychic</option>
         <option value="Fighting" >Fighting</option>
         <option value="Metal" >Metal</option>
         <option value="Darkness" >Fairy</option>
         <option value="Dragon" >Dragon</option>
        </select>
      {console.log(this.state.type)}

{console.log(`https://api.pokemontcg.io/v1/cards?supertype=${this.state.supertype}&types=${this.state.type}`)}

        {!this.state.data[0] ? 
        (<h1> {`No cards :(`}

    </h1> ): (
    
    <div className="cardBox"> <List list ={this.state.data}/></div>)}
    <div>
      <input type="text" onChange={e => this.setState({newName: e.target.value})} value={this.state.newName} />
      <button onClick={this.addPerson}>Add Pokemon</button>
    </div>
    {this.state.didErr && <h1> ERROR :(</h1>}
      </div>
    );
  }
}

export default App;
