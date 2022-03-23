import React from 'react'

function CharacterItems({card}) {
    console.log(card)
  return(
<div className='card'>
    <div className='card-inner'>
            <div className='card-front'>
                <img src={card.img} alt='avtarImg' />
            </div>
        <div className='card-back'>
            <h1>{card.name}</h1>
            <ul>
                <li>
                    <strong>Actor Name:</strong> {card.portrayed}
                </li>
                <li>
                    <strong>Nickname:</strong> {card.nickname}
                </li>
                <li>
                    <strong>Brithday:</strong> {card.birthday}
                </li>
                <li>
                    <strong>Status:</strong> {card.status}
                </li>
            </ul>
        </div>
    </div>
</div>
  );
}

export default CharacterItems;
