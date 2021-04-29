import React from 'react';
import PropTypes from "prop-types"

const NameBadge = ({index, firstName, handleRemoveCard, age}) => {
  return (
    <div >
        <h2> Name Badge Card </h2>
        <h3> First Name : {firstName}</h3>
        <h3> Age : {age}</h3>
        <button onClick={() => handleRemoveCard(index)}> Remove User </button>
    </div>
  );
}

export default NameBadge;

NameBadge.propTypes = {
    age: PropTypes.number.isRequired,
}