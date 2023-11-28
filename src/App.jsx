import { useState, useEffect } from "react";
import "./App.css";
import heartImg from "./assets/heartImg.svg";

function App() {
  const [hearts, setHearts] = useState([1, 2, 3]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [bgColor, setBgColor] = useState("white");
  const [gameOver, setGameOver] = useState(false);

  const db = [
    {
      question: "What is the capital of France?",
      a: "Berlin",
      b: "Madrid",
      c: "Paris",
      d: "Rome",
      correct: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      a: "Venus",
      b: "Mars",
      c: "Jupiter",
      d: "Saturn",
      correct: "Mars",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      a: "Charles Dickens",
      b: "William Shakespeare",
      c: "Jane Austen",
      d: "Mark Twain",
      correct: "William Shakespeare",
    },
    {
      question: "Where is the strongest human muscle located?",
      a: "Shoulders",
      b: "Giraffe",
      c: "Jaw",
      d: "Legs",
      correct: "Jaw",
    },
    {
      question: "Which element has the chemical symbol 'H'?",
      a: "Helium",
      b: "Hydrogen",
      c: "Hafnium",
      d: "Mercury",
      correct: "Hydrogen",
    },
    {
      question: "In what year did the Titanic sink?",
      a: "2020",
      b: "1912",
      c: "1920",
      d: "1931",
      correct: "1912",
    },
    {
      question: "What is the capital of Japan?",
      a: "Beijing",
      b: "Tokyo",
      c: "China",
      d: "Bangkok",
      correct: "Tokyo",
    },
    {
      question: "Who painted the Mona Lisa?",
      a: "Vincent van Gogh",
      b: "Leonardo da Vinci",
      c: "Pablo Picasso",
      d: "Mona Lisa",
      correct: "Leonardo da Vinci",
    },
    {
      question: "Which ocean is the largest?",
      a: "Indian Ocean",
      b: "Atlantic Ocean",
      c: "Large Ocean",
      d: "Pacific Ocean",
      correct: "Pacific Ocean",
    },
    {
      question: "What country has won the most World Cups?",
      a: "Italy",
      b: "Brazil",
      c: "Japan",
      d: "Microsoft",
      correct: "Brazil",
    },
    {
      question: "Who is the author of the Harry Potter book series?",
      a: "J.R.R. Tolkien",
      b: "J.K. Rowling",
      c: "George R.R. Martin",
      d: "Stephen King",
      correct: "J.K. Rowling",
    },
    {
      question: "Which gas do plants absorb during photosynthesis?",
      a: "Oxygen",
      b: "Nitrogen",
      c: "Carbon Dioxide",
      d: "Hydrogen",
      correct: "Carbon Dioxide",
    },
    {
      question: "What is the currency of Japan?",
      a: "Yuan",
      b: "Yen",
      c: "Won",
      d: "Ringgit",
      correct: "Yen",
    },
    {
      question: "What is the capital of Italy?",
      a: "Madrid",
      b: "Paris",
      c: "Rome",
      d: "Berlin",
      correct: "Rome",
    },
    {
      question: "Which planet is closest to the Sun?",
      a: "Venus",
      b: "Mercury",
      c: "Earth",
      d: "Mars",
      correct: "Mercury",
    },

    {
      question: "What is the currency of the United Kingdom?",
      a: "Euro",
      b: "Pound Sterling",
      c: "Dollar",
      d: "Yen",
      correct: "Pound Sterling",
    },
    {
      question: "Which ocean is the smallest?",
      a: "Indian Ocean",
      b: "Arctic Ocean",
      c: "Southern Ocean",
      d: "Atlantic Ocean",
      correct: "Arctic Ocean",
    },

    {
      question: "Which element has the chemical symbol 'O'?",
      a: "Osmium",
      b: "Oxygen",
      c: "Gold",
      d: "Lead",
      correct: "Oxygen",
    },

    {
      question: "What is the capital of Brazil?",
      a: "Buenos Aires",
      b: "Brasília",
      c: "Rio de Janeiro",
      d: "São Paulo",
      correct: "Brasília",
    },
  ];

  const random = Math.floor(Math.random() * db.length);
  const randomQuestion = db[random];
  const startGame = () => {
    setCurrentQuestion(randomQuestion.question);
  };

  useEffect(() => {
    startGame();
    console.log(hearts.length);
    hearts.length === 0 ? setGameOver(true) : setGameOver(false);
  }, [hearts]);

  const handleClick = (clicked) => {
    if (clicked === randomQuestion.correct) {
      setBgColor("green");
      setTimeout(() => {
        setBgColor("white");
      }, 400);
    } else {
      setBgColor("red");
      setTimeout(() => {
        setBgColor("white");
      }, 400);
      setHearts(hearts.slice(0, -1));
    }
  };
  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      {gameOver === false ? (
        <>
          <div className="heart__container">
            {hearts.map((x, index) => (
              <img
                src={heartImg}
                className="heart"
                key={index}
                alt={`heart-${index}`}
              />
            ))}
          </div>
          <p className="question">{randomQuestion.question}</p>
          <div className="btn__container">
            <div>
              <button
                className="opt__btn A"
                onClick={() => handleClick(randomQuestion.a)}
              >
                {randomQuestion.a}
              </button>
              <button
                className="opt__btn B"
                onClick={() => handleClick(randomQuestion.b)}
              >
                {randomQuestion.b}
              </button>
            </div>
            <div>
              <button
                className="opt__btn C"
                onClick={() => handleClick(randomQuestion.c)}
              >
                {randomQuestion.c}
              </button>
              <button
                className="opt__btn D"
                onClick={() => handleClick(randomQuestion.d)}
              >
                {randomQuestion.d}
              </button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <h1 style={{ color: "black" }}>GAME OVER</h1>
          <button
            className="restart__btn"
            onClick={() => {
              setGameOver(false);
              setHearts([1, 2, 3]);
            }}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
