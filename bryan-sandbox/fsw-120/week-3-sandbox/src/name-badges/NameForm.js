import React from 'react';
import NameBadgeList from './NameBadgeList'

class NameForm extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            age: 0,
            count : 0,
            userCards : []
        }
    }
    
    
    handleChange = (e) => {
        const { name, value} = e.target
        console.dir(e.target)
        this.setState({ [name]: value })
    }

     // Doesnt Work here - need to be inside render
    // incrementCount(){
    //     console.log(this.state)
    // }

    // Works
    // incrementCount = () => {
    //     // console.log(this.state)
    //     let counter = this.state.count
    //     counter++
    //     this.setState({ count : counter })
    // }

    handleSubmit = (e) => {
        e.preventDefault()
        const userCard = {}
        userCard.firstName = this.state.firstName
        userCard.age = this.state.age
        this.setState({userCards : [...this.state.userCards, userCard], firstName: '', })
    }

    handleRemoveCard = (index) => {
        let userCardsArray = this.state.userCards
        userCardsArray.splice(index, 1)
        this.setState({userCards : userCardsArray})
    }
    

    render(){
        console.log(this.state)
        return(
            <div>
                <h3> This is name form.  It is a class componet </h3>
                <form onSubmit={this.handleSubmit}>
                    <label> First Name </label>
                    <input 
                        name='firstName'
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='number'
                        name='age'
                        value={this.state.age}
                        required={true}
                        onChange={this.handleChange}
                    />
                    <button> Create Badge </button>
                </form>
                <NameBadgeList 
                    userCards={this.state.userCards} 
                    handleRemoveCard={this.handleRemoveCard}
                />
            </div>
        )
    }
}

export default NameForm;


