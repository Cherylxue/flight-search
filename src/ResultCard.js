import React from "react";

function ResultCard(props) {
  const { outboundLeg, inboundLeg, places, minPrice } = props;

  return (
    <div id="result-card-container">
      <div id="outbound-info">
        <label id="origin-name">
          From:{" "}
          {places.map(
            (place) => place.PlaceId === outboundLeg.OriginId && place.Name
          )}
        </label>

        <label>
          To:{" "}
          {places.map(
            (place) => place.PlaceId === outboundLeg.DestinationId && place.Name
          )}
        </label>

        <label>Departure Date: {outboundLeg.DepartureDate}</label>
      </div>
      {inboundLeg !== undefined && (
        <div id="inbound-info">
          <p>
            From:
            {places.map(
              (place) => place.PlaceId === inboundLeg.OriginId && place.Name
            )}
          </p>

          <p>
            To:
            {places.map(
              (place) =>
                place.PlaceId === inboundLeg.DestinationId && place.Name
            )}
          </p>

          <p>
            Departure Date:
            {inboundLeg.DepartureDate}
          </p>
        </div>
      )}
      <label id="price-info">
        Minimum price in the past: <span id="price">${minPrice}</span>
      </label>
    </div>
  );
}

export default ResultCard;
