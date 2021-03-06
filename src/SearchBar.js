import React, { useState } from "react";
import PlaceInput from "./PlaceInput";
import DateInput from "./DateInput";
import "./SearchBar.css";

function SearchBar(props) {
  const today = new Date();

  const todayString =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + today.getDate()).slice(-2);

  const [isPlaceValid, setIsPlaceValid] = useState(false);
  const [originPlace, setOriginPlace] = useState();
  const [destPlace, setDestPlace] = useState();
  const [departureDate, setDepartureDate] = useState(todayString);
  const [returnDate, setReturnDate] = useState(todayString);
  const [isDateValid, setIsDateValid] = useState(true);

  function handleSubmit() {
    if (isPlaceValid && isDateValid) {
      props.submit({
        originPlace,
        destPlace,
        departureDate,
        returnDate,
      });
    } else {
      alert("Invalid Input");
    }
  }

  return (
    <div id="SearchBar">
      <div id="search-bar-container">
        <PlaceInput
          placeHolder="From"
          placeValidation={setIsPlaceValid}
          keyName="origin"
          handleSetPlace={setOriginPlace}
        />

        <PlaceInput
          placeHolder="Destination"
          placeValidation={setIsPlaceValid}
          keyName="dest"
          handleSetPlace={setDestPlace}
        />

        <DateInput
          header="Departure"
          anytime={false}
          setDate={setDepartureDate}
          dateValidation={setIsDateValid}
          handleSetDate={setDepartureDate}
          today={todayString}
        />

        <DateInput
          header="Return"
          anytime={true}
          setDate={setReturnDate}
          dateValidation={setIsDateValid}
          handleSetDate={setReturnDate}
          departureDate={departureDate}
          today={todayString}
        />
      </div>
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default SearchBar;
