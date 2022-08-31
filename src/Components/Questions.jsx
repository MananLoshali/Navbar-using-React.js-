import React from "react";

const Questions = (props) => {
  const datas = [
    {
      id: 1,
      question: "Which of the following animal barks ?",
      answers: [
        {
          text: "Cat",
          correct: false,
        },
        {
          text: "Dog",
          correct: true,
        },
        {
          text: "Goat",
          correct: false,
        },
        {
          text: "Cow",
          correct: false,
        },
      ],
    },
  ];

  return (
    <div className="questions">
      {datas.map((m) => (
        <div className="ques">{m.question}</div>
      ))}
      <div className="answers">
        {datas.map((ma) => (
          <div className="answer">{ma.answers.text}</div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
