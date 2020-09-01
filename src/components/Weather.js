import React, { useState, useEffect } from "react";
import { VictoryChart, VictoryLine } from "victory";

function Weather() {
  const initWeather = [];
  const [weather, setWeather] = useState(initWeather);

  useEffect(() => {
    fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.3049&lon=25.0207")
    .then(response => response.json())
    .then(json => setWeather([...json]));
  }, []);

  return(
    <VictoryChart
      domainPadding={{x: 30, y:10}}
      width={1000}
      height={250}
    >
      <VictoryLine
        data={[
          {date: "1.1.", temp: -5},
          {date: "2.1.", temp: -6},
          {date: "3.1.", temp: -9},
          {date: "4.1.", temp: -2},
          {date: "5.1.", temp: 0},
          {date: "6.1.", temp: 1}
        ]}
        style={{
          data:
            {stroke: "green", strokeWidth: 2}
        }}
        x="date"
        y="temp"
      />
    </VictoryChart>
  )
};

export default Weather;
