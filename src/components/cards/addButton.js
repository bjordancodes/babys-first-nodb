import React, {Component} from 'react';
import axios from 'axios';

const AddButton = (props) =>{
    // console.log(props)
    return(
        props.list.map((val, i) => {
            return (
            <div key={val.id} className="cardSize" >
              <img src={val.imageUrl} alt={val.name}/>
              <img src="https://www.iconsdb.com/icons/preview/white/delete-xxl.png" className="addButton" alt="delete button" onClick={()=> props.deletePokemon(val.id)}/>
              {/* {console.log(props)} */}
            </div>)
}))

}
export default AddButton;