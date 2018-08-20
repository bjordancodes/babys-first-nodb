import React from 'react';

const List = props =>
{ 
  return (
    props.list.filter((val, i)=> { 
      return val.supertype===props.search && val.types[0]===props.types
    }).map((val, i) => {
      return (
      <div key={val.id} className="cardSize" >
        <img src={val.imageUrl} alt={val.name}/>
        <img src="https://www.iconsdb.com/icons/preview/white/add-file-xxl.png" className="addButton" alt="add button" onClick={()=> props.add(val.id)}/>
        {/* {console.log(props)} */}
      </div>)
    }))
}



export default List;