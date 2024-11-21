import React, { useState } from "react";
import data from "./data";

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
                  <button
                    key={index}
                    onClick={() => pickAnswer(answerItem.isCorrect)}
                  >
                    {answerItem.label}
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <p className="result">you got {corse} from 4</p>
        )}
      </div>
    </div>
  );
}

export default App;
