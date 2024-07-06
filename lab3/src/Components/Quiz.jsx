import React, { useState } from "react";
import "../assets/css/Quiz.css";
import { data } from "./data.jsx";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const checkAns = (optionIndex) => {
    if (question.ans === optionIndex) {
      setScore((prev) => prev + 1);
    }
    setLock(true);
    setSelectedOption(optionIndex);
  };

  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
        setQuestion(data[index + 1]);
        setLock(false);
        setSelectedOption(null);
      }
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
    setSelectedOption(null);
  };

  const getOptionClassName = (optionIndex) => {
    if (!lock) return '';
    if (question.ans === optionIndex) return 'correct';
    if (selectedOption === optionIndex) return 'wrong';
    return '';
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {!result ? (
        <>
          <h2>{index + 1}. {question.question}</h2>
          <ul>
            {[question.option1, question.option2, question.option3, question.option4].map((option, i) => (
              <li
                key={i}
                className={getOptionClassName(i + 1)}
                onClick={() => !lock && checkAns(i + 1)}
              >
                {option}
              </li>
            ))}
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">{index + 1} of {data.length} questions</div>
        </>
      ) : (
        <>
          <h2>Your Scored {score} out of {data.length}</h2>
          <button onClick={reset}>Reset</button>
        </>
      )}
    </div>
  );
};

export default Quiz;