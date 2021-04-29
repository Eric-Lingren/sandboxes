import React from 'react';
import NameBadge from './NameBadge'


class NameBadgeList extends React.Component {

  componentDidUpdate(){
    console.log(this.props)
  }


  render(){

    const mappedUserCards = this.props.userCards.map( (card, i) => {
      return(
        <NameBadge 
          key={i}
          index={i}
          firstName={card.firstName}
          age={card.age}
          handleRemoveCard={this.props.handleRemoveCard}
        />
      )
    })

    const testData = 'hi'
    const handleClick = (data) => {
      alert(data)
    }
    return (
      <div >
          <h1> Name Badge List: </h1>
          {mappedUserCards}
          <button onClick={() => {handleClick(testData)}}> click me </button>
      </div>
    );
  }
}

export default NameBadgeList;
