import React, { useEffect } from "react";
import { useState } from "react";

const Timer = (setStop) => {
  const [timer, setTimer] = useState(30);

  // useEffect(() => {
  //   if (timer === 0) return setStop(true);
  //   const interval = setInterval(() => {
  //     setTimer((pre) => pre - 1);
  //   });
  // }, 1000);
  // return timer;
};

export default Timer;
