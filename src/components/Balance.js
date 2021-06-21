import React from "react";
import Counter from "./Counter";
import { useState } from "react";

const Balance = ({ counter }) => {
  return (
    <div>
      <p>{`$ ${counter}`}</p>
    </div>
  );
};

export default Balance;
