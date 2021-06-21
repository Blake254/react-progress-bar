import React from "react";
import Balance from "./Balance";
import Counter from "./Counter";
import ProgressBarNew from "./ProgressBarNew";

export const Bar = () => {
  return (
    <div>
      <div class="flex-container">
        <div class="flex-items">
          <Balance />
        </div>
        <div class="flex-items">
          <Counter />
        </div>
      </div>
      <ProgressBarNew />
    </div>
  );
};

export default Bar;
