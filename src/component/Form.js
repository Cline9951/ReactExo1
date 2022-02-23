import React, { useState } from "react";

// 
    // const [form, setForm] = React.useState();

    // return (
        // <form>
        //     <label>
        //         Titre:
        //         <input type="text" name="titre" />
        //     </label>
        //     <label>
        //         Texte:
        //         <input type="text" name="texte" />
        //     </label>
        //     <button className=""
        //         // je n'ai plus qu'à l'utiliser ici
        //         onClick={() => setForm()}>
        //         Clique {form}
        //     </button>
        // </form>
    // )
//}

// function Form({cards, setCards}){}
const Form = ({ cards, setCards}) => {

    // on cree un objet avec deux attributs et on lui donne un etat
    const [card, setCard] = useState();

    const handleTitre = (titre) => {
        // card.text = texte;
        // setCard(card);

        // creer une copie de mon objet card auquel je vais ajouter un titre
        let newCard = { ...card, titre};
        setCard(newCard);
    };


    const handleTexte = (texte) => {
        //spread Operator mdn mozilla
        setCard({ ...card, texte})
    };

    const handleSubmit = (e) => {
        // a l'ecoute du formulaire
        e.preventDefault();
        let newCards = [...cards];
        newCards.push(card);
        setCards(newCards);
    };

    return(
        <form onSubmit={(e) => handleSubmit(e)} >
            <label>
                Titre:
                <input type="text" name="titre" onChange={(e) => handleTitre(e.target.value)} />
            </label>
            <label>
                Texte:
                <input type="text" name="texte" onChange={(e) => handleTexte(e.target.value)}/>
            </label>
            <button>
                Clique
            </button>
           
        </form>
    );
};
export default Form;