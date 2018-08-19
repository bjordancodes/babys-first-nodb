import React from 'react';

const List = props =>
{ console.log(props)
  return (
    props.list.filter((val, i)=> { 
      return val.supertype===props.search && val.types[0]===props.types
    }).map((val, i) => {
      return (
      <div>
        <img src={val.imageUrl} key={val.id} alt={val.name}/>
      </div>)
    }))
}

export default List;