import React from 'react';
import CharacterItems from './CharacterItems'

function CharactersGrid({items, isLoading}){
    return isLoading ? (<h1>Loading...</h1>) : (
        <section className="cards">{items.map((card) =>(
            <CharacterItems key={card.char_id} card={card} />
           
            
        ))}</section>
    )
}


export default CharactersGrid;