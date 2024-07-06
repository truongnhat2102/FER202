import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { createContext, useState, useContext } from "react";

const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([
    {
      questionId: 1,
      text: "Which is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars", "Venus"],
      correctAnswer: "Jupiter",
      userAnswer: null,
    },
    {
      questionId: 2,
      text: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Madrid"],
      correctAnswer: "Paris",
      userAnswer: null,
    },
  ]);

  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (questionId, answer) => {
    setQuestions(questions.map(question =>
      question.questionId === questionId
        ? { ...question, userAnswer: answer }
        : question
    ));
  };

  const handleSubmitQuiz = () => {
    const newScore = questions.reduce((acc, question) => {
      return acc + (question.userAnswer === question.correctAnswer ? 1 : 0);
    }, 0);
    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <QuizContext.Provider value={{ questions, submitted, score, handleAnswerChange, handleSubmitQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

function QuizComponent() {
  const { questions, submitted, score, handleAnswerChange, handleSubmitQuiz } = useQuiz();

  if (submitted) {
    return (
      <div className="container">
        <h1 className="my-4">Quiz Completed</h1>
        <div className="alert alert-success">
          Your score is {score} out of {questions.length}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="my-4">Quiz Questions</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        {questions.map((question) => (
          <div className="container" key={question.questionId}>
            <div className="card my-2">
              <div className="card-body">
                <h5 className="card-title">{question.text}</h5>
                {question.options.map((option, index) => (
                  <div key={index} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`question_${question.questionId}`}
                      id={`option_${question.questionId}_${index}`}
                      value={option}
                      onChange={() => handleAnswerChange(question.questionId, option)}
                      checked={question.userAnswer === option}
                    />
                    <label className="form-check-label" htmlFor={`option_${question.questionId}_${index}`}>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <button className="btn btn-primary" onClick={handleSubmitQuiz}>Submit Quiz</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <QuizProvider>
      <QuizComponent />
    </QuizProvider>
  );
}

export default App;