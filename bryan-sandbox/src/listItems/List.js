import React from 'react'
import Card from './Card'

const List = () => {
    
    // const titles = ['Card 1', 'Card 2']
    // const colors = ['red', 'yellow', 'purple']
    // const numbers = [2, 4, 6]

    // let cards = [...colors, ...titles]
    // console.log(cards)

    // const sumNumbers = (accumulator, currentValue) => accumulator + currentValue
    // const sumResult = numbers.reduce(sumNumbers, 100)
    // console.log(sumResult)

    const items = [
        { title: 'Brush Teeth', color: 'blue', isComplete: true },
        { title: 'Make Bed', color: 'cornflowerBlue', isComplete: false },
        { title: 'Wash Dishes', color: 'maroon', isComplete: false },
        { title: 'Walk Dog', color: 'green', isComplete: true },
    ]

    const mappedCards = items.map( (item) => {
        return(
            <Card
                title={item.title} 
                color={item.color} 
                isComplete={item.isComplete} 
            /> 
        )
    })
    
    return(
        <h1>
            This is my To-Do List:
            {/* <Card title='Card 1' color='red' />
            <Card title='Card 2' color='yellow' />
            <Card title='Card 3' color='blue' />
            <Card title='Card 4' color='green' /> */}
            {mappedCards}
        </h1>
    )
}

export default List