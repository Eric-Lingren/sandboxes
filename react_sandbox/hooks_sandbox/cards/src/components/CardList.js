import React, { useEffect, useState } from 'react';

function generateShuffledDeck(){
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => {
        console.log(response)
    })
}

function CardList() {
    const[ cardList, setCards ] = useState([])
    const[ deckId, setDeckId ] = useState('')

    

    useEffect(() => {
        generateShuffledDeck()
    })

    return (
        <div>
            <table>
                <thead>
                    <tr> Cards </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        <button onClick={ useState }> Generate Cards </button>
        </div>
        
    )
}

export default CardList