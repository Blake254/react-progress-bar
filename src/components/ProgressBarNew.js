import React from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const ProgressBarNew = ({ counter }) => {
  const value = counter;
  console.log("Bar ", counter);
  return (
    <div>
      <div className="container">
        <ProgressBar animated now={counter} label={`${counter}%`} />
      </div>
    </div>
  );
};

export default ProgressBarNew;
