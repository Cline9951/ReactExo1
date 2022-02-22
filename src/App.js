import img from '../src/assets/img1.jpg'
import Card from './component/Card';
import './App.css';

function App() {
  const cards = [
    {
      titre: "card_one",
      img: img,
      texte:"texte_one"
    },
    {
      titre: "card_two",
      img: img,
      texte:"texte_two"
    },
    {
      titre: "card_three",
      img: img,
      texte:"texte_three"
    }
  ]
  return (
    <div className="App">
      {cards.map((card) => (
      <Card img={card.img} titre={card.titre} texte={card.texte}/>
      ))}
    </div>
  );
}

export default App;
