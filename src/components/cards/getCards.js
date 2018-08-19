import React, {Component} from 'react';
import axios from 'axios';
import List from '../list/list';
export default class GetCards extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            supertype: "Pokémon",
            type: ''
        }
    }
    
  superType= (event) => {
    this.setState({supertype: event.target.value});
  }

  types= (event) => {
    this.setState({type: event.target.value});
  }
 render(){
     console.log(this.state.supertype)
     return (
        <div>Card Type:
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
        {/* {console.log(this.state.type)} */}
        {/* <List search = {this.state.supertype}/> */}
        </div>)
 }
}