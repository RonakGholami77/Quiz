import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data";
import { Button } from "react-bootstrap";

function App() {
  const [corse, setCorse] = useState(0);
  const [indexQ, setIndexQ] = useState(0);

  const finalData = data[indexQ];

  function pickAnswer(isCorrect) {
    setIndexQ((prev) => {
      return prev + 1;
    });

    if (isCorrect) {
      setCorse((prev) => {
        const count = prev + 1;
        return count;
      });
    }
  }

  return (
    <div className="container">
      <div className="quiz-box">
        {indexQ <= 3 ? (
          <>
            <p className="question">{finalData.question}</p>
            <div className="answers">
              {finalData.answer.map((answerItem, index) => {
                return (
                  <Button
                    variant="info"
                    key={index}
                    onClick={() => pickAnswer(answerItem.isCorrect)}
                  >
                    {answerItem.label}
                  </Button>
                );
              })}
            </div>
          </>
        ) : (
          <div className="result">
            <p>you got {corse} from 4</p>
            <Button variant="success">Print</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
