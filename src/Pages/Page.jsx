import React, { useState } from "react";
import Questions from "../Components/Questions";
import Timer from "../Components/Timer";
import "./page.css";

const Page = (props) => {
  const [questionnumber, setQuestionNumber] = useState(1);
  const [timeout, setTimeout] = useState(false);
  const [stop, setStop] = useState(false);

  const amount = [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 500" },
    { id: 5, amount: "$ 1000" },
    { id: 6, amount: "$ 2000" },
    { id: 7, amount: "$ 4000" },
    { id: 8, amount: "$ 8000" },
    { id: 9, amount: "$ 16000" },
    { id: 10, amount: "$ 32000" },
    { id: 11, amount: "$ 64000" },
    { id: 12, amount: "$ 125000" },
    { id: 13, amount: "$ 250000" },
    { id: 14, amount: "$ 500000" },
    { id: 15, amount: "$ 100000" },
  ].reverse();
  return (
    <div className="main">
      <div className="right">
        <div className="top">
          <div className="timer">
            <Timer setStop={setStop} />
          </div>
        </div>
        <div className="bottom">
          <Questions data={props} />
        </div>
      </div>
      <div className="left">
        <ul className="moneyList">
          {amount.map((m) => (
            <li
              key={m.id}
              className={
                m.id === questionnumber
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemQuestion">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
