import React from "react";
import Balance from "./Balance";
import Counter from "./Counter";
import ProgressBarNew from "./ProgressBarNew";
import CounterButton from "./CounterButton";
import { useState } from "react";
import Goal from "./Goal";
import counter from "./CounterButton";

export const Bar = () => {
  var [counter, setCounter] = useState(0);
  var [time, setTime] = useState(10000);

  const addTime = () => {
    var random = Math.floor(Math.random() * 10000);

    setTime(time + random);
  };
  return (
    <div>
      <div class="flex-container">
        <div class="flex-items">
          <Balance counter={counter} />
        </div>
        <div class="flex-items">
          <Counter timer={time} />
        </div>
      </div>
      <ProgressBarNew counter={counter} />

      <br></br>

      <div class="flex-container">
        <div class="flex-items">
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
        <div class="flex-items">
          <Goal />
        </div>
      </div>
    </div>
  );
};

export default Bar;
