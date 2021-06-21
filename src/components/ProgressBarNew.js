import React from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ProgressBarNew = () => {
  var currentTime = 60;

  const AddTime = () => {
    currentTime += 10;
    console.log(currentTime);

    return currentTime;
  };

  return (
    <div>
      <div className="container">
        <ProgressBar animated now={currentTime} label={`${currentTime}%`} />
        <button onClick={AddTime}>Add</button>
      </div>
    </div>
  );
};

export default ProgressBarNew;
