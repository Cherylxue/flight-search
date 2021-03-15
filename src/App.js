import "./App.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import ResultCards from "./ResultCards";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  //fetch markets
  // useEffect(() => {
  //   fetch(
  //     "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US",
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-key":
  //           "29e502b066msh7ca5e75494da312p1a21e4jsn5c65b49dbe32",
  //         "x-rapidapi-host":
  //           "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
  //       },
  //     }
  //   )
  //     .then((response) => {
  //       response.json().then((data) => {
  //         setData(data.Countries);
  //         setIsLoading(false);
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  function handleSubmit(inputValues) {
    const { originPlace, destPlace, departureDate, returnDate } = inputValues;

    setIsLoading(true);
    fetch(
      `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${originPlace}/${destPlace}/${departureDate}?inboundpartialdate=${returnDate}`,
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
        if (response.status === 400) {
          alert(
            "No result for the current date. Please try to pick another date."
          );
        }
        response.json().then((response) => {
          setIsLoading(false);
          setData(response);
          setIsSubmitted(true);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="App">
      <Header />
      <SearchBar submit={handleSubmit} />
      {isLoading && <p>Loading... </p>}
      <ResultCards
        data={data}
        isSubmitted={isSubmitted}
        // inputValues={inputValues}
      />
    </div>
  );
}

export default App;
