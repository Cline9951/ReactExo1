import React from 'react';
import './Card.css';


function Card(props) {
    // console.log(props);
        return (
        <div className='container'>
            <div className='border'>
                <div>{props.titre}</div>
                <img src={props.img} alt="img"></img>
                <p>{props.texte}</p>
            </div>
        </div>
    );
}

export default Card;