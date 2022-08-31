import { useState } from "react";
import Page from "./Pages/Page";

function App() {
  const [qustionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);

  const data = [
    {
      id: 1,
      question: "Which of the following animal barks?",
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
    <>
      <Page data={data} />
    </>
  );
}

export default App;
