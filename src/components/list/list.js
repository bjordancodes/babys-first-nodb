import React from 'react';

const List = props => {
    return props.list.map((val, i) => (
      <div>
        <img src={val.imageUrl} key={val.id} alt={val.name}/>
        
      </div>
    ));
}

export default List;