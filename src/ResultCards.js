import React from "react";
import ResultCard from "./ResultCard";
import "./ResultCards.css";

function ResultCards(props) {
  const { data } = props;
  //   console.log(data);
  const places = data.Places;
  const carriers = data.Carriers;
  return (
    <div id="result-cards-container">
      {data.Quotes !== undefined && data.Quotes.length === 0 && (
        <h3 id="no-result">No Result</h3>
      )}

      {data.Quotes !== undefined &&
        data.Quotes.length > 0 &&
        data.Quotes.map((quote) => (
          <ResultCard
            key={quote.QuoteId}
            minPrice={quote.MinPrice}
            outboundLeg={quote.OutboundLeg}
            inboundLeg={quote.InboundLeg}
            places={places}
            carriers={carriers}
          />
        ))}
    </div>
  );
}

export default ResultCards;
