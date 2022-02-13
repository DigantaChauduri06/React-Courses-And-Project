import { useState, useEffect } from "react";
import "./App.css";
import { SingleCard } from "./components/SingleCard";

const cards = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

const App = () => {
  // state
  const [card, setCard] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  // suffle cards
  const suffleCards = (cards) => {
    const suffleCards = [...cards, ...cards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() - 0.5 }));
    setCard(suffleCards);
    setTurns(0);
  };
  //Handle choice
  //* Utiliy Function
  const isSameCard = (card1, card2) => {
    return card1.src === card2.src;
  };
  const resetChanges = (setChoiceOne, setChoiceTwo, setTurns) => {
    setTimeout(() => {
      setChoiceOne(null);
      setChoiceTwo(null);
    }, 500);
    setTurns((prevTurn) => prevTurn + 1);
    setDisabled(false);
  };
  const handelChoice = (card) => {
    choiceOne === null ? setChoiceOne(card) : setChoiceTwo(card);
  };
  // Compearing two
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (isSameCard(choiceOne, choiceTwo)) {
        setCard((prevCard) => {
          return prevCard.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      }
      resetChanges(setChoiceOne, setChoiceTwo, setTurns);
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={() => suffleCards(cards)}>New Game</button>
      <div className="card-grid">
        {card.map((item) => {
          return (
            <SingleCard
              key={item.id}
              item={item}
              handelChoice={handelChoice}
              flipped={item === choiceOne || item === choiceTwo || item.matched}
              disabled={disabled}
            />
          );
        })}
      </div>
      <p>Turns {turns}</p>
    </div>
  );
};

export default App;
