import React from "react";
import { useState } from "react";

const CounterButton = () => {
  var [counter, setCounter] = useState(0);
  var [time, setTime] = useState(10000);

  const addTime = () => {
    var random = Math.floor(Math.random() * 10000);

    setTime(time + random);
  };
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          if (counter === 100) {
            setCounter(0);
            console.log(counter);
            addTime();
          } else {
            setCounter(counter + 10);
            console.log(counter);
            addTime();
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default CounterButton;
