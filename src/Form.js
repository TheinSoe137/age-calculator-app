import React, { useState } from "react";
import icon from "./assets/images/icon-arrow.svg";
import OutputContainer from "./OutputContainer";
import DateContext from "./DateContext";

function Form() {
  //***useState */
  const [fday, setDay] = useState("");
  const [fmonth, setMonth] = useState("");
  const [fyear, setYear] = useState("");
  ////**useContext */
  const [data, setData] = React.useState({
    dayAge: "--",
    monthAge: "--",
    yearAge: "--",
  });
  const handleDChange = (event) => {
    setDay(event.target.value);
  };
  const handleMChange = (event) => {
    setMonth(event.target.value);
  };
  const handleYChange = (event) => {
    setYear(event.target.value);
  };
  const calculateAge = (e) => {
    e.preventDefault();

    let today = new Date();
    const day = today.getDate();
    const month = 1 + today.getMonth();
    const year = today.getFullYear();
    var bday = fday;
    var bmonth = fmonth;
    var byear = fyear;
    console.log(bday, "and ", typeof byear);
    var yearAge = year - byear;

    if (month >= bmonth) var monthAge = month - bmonth;
    else {
      yearAge--;
      monthAge = 12 + month - bmonth;
    }
    //get days
    if (day >= bday) {
      //get days when the current date is greater
      var dateAge = day - bday;
    } else {
      monthAge--;
      dateAge = 31 + day - bday;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }
    setData({ dateAge, monthAge, yearAge });
    console.log(data);
  };
  return (
    <DateContext.Provider value={{ data, setData }}>
      <form>
        <div>
          <label htmlFor="fday">DAY</label>
          <input
            type="number"
            placeholder="DD"
            name="fday"
            id="fday"
            value={fday}
            min="1"
            max="31"
            onChange={handleDChange}
          />
        </div>
        <div>
          <label htmlFor="fmonth">MONTH</label>
          <input
            type="number"
            placeholder="MM"
            name="fmonth"
            id="fmonth"
            value={fmonth}
            min="1"
            max="12"
            onChange={handleMChange}
          />
        </div>
        <div>
          <label htmlFor="fyear">YEAR</label>
          <input
            type="number"
            placeholder="YYYY"
            name="fyear"
            id="fyear"
            value={fyear}
            min="1900"
            max="2023"
            onChange={handleYChange}
          />
        </div>
      </form>
      <div className="btn">
        <hr />
        <button onClick={calculateAge}>
          <img src={icon} alt="icon-arrow" />
        </button>
      </div>

      <OutputContainer />
    </DateContext.Provider>
  );
}
export default Form;
