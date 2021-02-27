import React, { useState } from "react";
import "./SearchBar.css";

function CountryInput(props) {
  const [countryOptions, setCountryOptions] = useState(["US - United States"]);
  const countryStrings = props.countries.map(
    (country) => `${country.Code} - ${country.Name}`
  );

  function handleChange(e) {
    const countryList = [...props.countries];

    countryList.filter(
      (country) =>
        country.Code.includes(e.target.value) ||
        country.Name.includes(e.target.value)
    );
    setCountryOptions(countryList);
  }

  function handleBlur(e) {
    if (
      countryStrings.find((string) => e.target.value === string) === undefined
    ) {
      props.countryValidation(false);
    } else {
      props.countryValidation(true);
      props.countrySelection(e.target.value.substring(0, 2));
    }

    // console.log(e.target.value.substring(0, 2) && validInput);
    // validInput && props.countrySelection();
  }

  return (
    <>
      <input
        id="country-input"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        list="country-name"
        placeholder="dest country"
      ></input>
      <datalist id="country-name">
        {countryOptions.map((country) => (
          <option
            key={countryOptions.indexOf(country)}
            value={`${country.Code} - ${country.Name}`}
          />
        ))}
      </datalist>
    </>
  );
}

export default CountryInput;
