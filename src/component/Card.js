import React,{useState} from 'react';


// function Card(props) {
//     // console.log(props);
//         return (
//         <div className='container'>
//             <div className='border'>
//                 <p>{props.titre}</p>
//                 <img src={props.img} alt="img"></img>
//                 <p>{props.texte}</p>
//             </div>
//         </div>
//     );
// }
// export default Card;




const Card = ({ card }) => {

    const [cardId, setCard] = useState();

    const updateCard = (id) => {
        console.log(card.id);
        setCard({ ...cardId, id})
    }

    return (
        <div>
            <p>Component Card</p>
            <p>{card.titre}</p>
            <p>{card.texte}</p>
            <button onClick={(e) => updateCard(e)}>Modifier</button>
        </div>
    );
};

export default Card;