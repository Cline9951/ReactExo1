import img from '../src/assets/img1.jpg'
import Card from './component/Card';
import Form from './component/Form';
import './App.css';
import { useState } from 'react';

function App() {
  const cardsInit = [
    {
      id: 1,
      titre: "card_one",
      img: img,
      texte:"texte_one"
    },
    {
      id: 2,
      titre: "card_two",
      img: img,
      texte:"texte_two"
    },
    {
      id: 3,
      titre: "card_three",
      img: img,
      texte:"texte_three"
    }
  ]

  // reredurn pour declencher l'etat au trigger
  const [cards, setCards] = useState(cardsInit);

  return (
    <div className="App">
      <Form setCards={setCards} cards={cards}></Form>

      {cards.map((card) => {
        return <Card  card={card}/>
    })}
      
    </div>

  );
}
export default App;
