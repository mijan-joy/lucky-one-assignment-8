import React from 'react';

const DisplayOrder = (props) => {
    const {name} = props.order;
    return (
        <div>
           <p>{name}</p> 
        </div>
    );
};

export default DisplayOrder;