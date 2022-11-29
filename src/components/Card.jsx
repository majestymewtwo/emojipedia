import React from 'react'

function Card(props){
    return (
        <dl className='p-5 bg-white drop-shadow-xl flex flex-col space-y-4 rounded-lg font-montserrat text-center'>
            <div className="emoji text-6xl">{props.emoji}</div>
            <dt className="emoji-name text-xl font-bold">{props.name}</dt>
            <dd className="emoji-meaning">{props.meaning}</dd>
        </dl>
    );
}

export default Card;