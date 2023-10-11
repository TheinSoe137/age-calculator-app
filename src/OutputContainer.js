import React, { useContext } from "react";
import DateContext from "./DateContext";

function OutputContainer() {
  const { data } = useContext(DateContext);
  return (
    <>
      <div className="container">
        <h1>
          <span id="yearAge">{data.yearAge}</span> years
        </h1>
        <h1>
          <span id="monthAge">{data.monthAge}</span> months
        </h1>
        <h1>
          <span id="dateAge">{data.dateAge}</span> days
        </h1>
      </div>
    </>
  );
}

export default OutputContainer;
