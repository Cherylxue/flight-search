import React, { useState, useEffect } from "react";
import "./SearchBar.css";

function PlaceInput(props) {
  const [placeData, setPlaceData] = useState([""]);
  const [placeQuery, setPlaceQuery] = useState("US");
  const placeStrings = placeData.map(
    (place) => `${place.PlaceId} - ${place.PlaceName}`
  );

  useEffect(() => {
    placeQuery.length >= 2 &&
      fetch(
        `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=${placeQuery}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "29e502b066msh7ca5e75494da312p1a21e4jsn5c65b49dbe32",
            "x-rapidapi-host":
              "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          },
        }
      )
        .then((response) => {
          response.json().then((data) => {
            setPlaceData(data.Places);
          });
        })
        .catch((err) => {
          console.error(err);
        });
  }, [placeQuery]);

  function handleChange(e) {
    setPlaceQuery(e.target.value);
  }

  function handleBlur(e) {
    if (
      placeStrings.find((string) => e.target.value === string) === undefined
    ) {
      props.placeValidation(false);
    } else {
      props.placeValidation(true);
      props.handleSetPlace(e.target.value.match(/[A-Z]{2,}/)[0]);
      // console.log(e.target.value.match(/[A-Z]{2,3}/)[0]);
    }
  }

  return (
    <>
      <div className="input-container">
        <p>{props.placeHolder}</p>
        <input
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          list={`place-name-${props.keyName}`}
          placeholder="US - United States"
        ></input>
        <datalist id={`place-name-${props.keyName}`}>
          {placeData.map((place) => (
            <option
              key={`${placeData.indexOf(place)}-${props.keyName}`}
              value={`${place.PlaceId} - ${place.PlaceName}`}
            />
          ))}
        </datalist>
      </div>
    </>
  );
}

export default PlaceInput;
