import React from 'react'
import './card-styles.css'

const Card = (props) => {


    console.log(props)

    // let containerClassName = null

    // const description = 'this is a card description'
    // let name = ''

    // function generateNumber(){
    //     return 1
    // }

    // const generateName = () => {
    //     name = 'Eric'
    // }

    // generateName()

    // if(props.isComplete === true ){
    //     containerClassName = 'card-is-complete'
    // } else {
    //     containerClassName = 'card-not-complete'
    // }

    // props.isComplete ? containerClassName = 'card-is-complete' : containerClassName = 'card-not-complete'

    

    return(
        <div className='card-container'>
            {/* <div className={containerClassName} > */}
            <div className={props.isComplete ? 'card-is-complete' : 'card-not-complete'} >
            {/* <h4 style={{color: 'blue', margin: 0}}> This is a card title </h4> */}
            <h4 style={{ color: props.color, margin: 0 }}>{props.title}</h4>
            {/* <p> {description} </p>
            <p> {generateNumber()} </p>
            <p> {name} </p> */}
            </div>
        </div>
    )
}

export default Card