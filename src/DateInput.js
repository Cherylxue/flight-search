import React, { useEffect, useState } from "react";

function DateInput(props) {
  const [dateInput, setDateInput] = useState(props.today);
  const [isValidDate, setIsValidDate] = useState(true);

  function handleChange(e) {
    const { value } = e.target;
    setDateInput(value);
    props.handleSetDate(value);
  }

  //Make sure the return date input is the departure date or after
  useEffect(() => {
    props.header === "Return" && setDateInput(props.departureDate);
  }, [props.departureDate, props.header]);

  return (
    <div className="input-container">
      <p>{props.header} Date</p>
      <input
        type="date"
        onChange={handleChange}
        value={dateInput}
        min={props.header === "Departure" ? props.today : props.departureDate}
        onKeyDown={() => false}
      />
    </div>
  );
}

export default DateInput;
