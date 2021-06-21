import React from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const ProgressBarNew = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className="container">
        <ProgressBar animated now={counter} label={`${counter}%`} />
        <button
          onClick={() => {
            setCounter(counter + 10);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ProgressBarNew;
