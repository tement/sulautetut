import React, { useState, useEffect } from "react";
import { VictoryChart, VictoryLine, VictoryScatter, VictoryAxis, VictoryVoronoiContainer } from "victory";

function Weather() {
  const initWeather = [];
  const [weather, setWeather] = useState(initWeather);

  const tempData = [
    {x: "1.1.", y: -5},
    {x: "2.1.", y: -6},
    {x: "3.1.", y: -9},
    {x: "4.1.", y: -2},
    {x: "5.1.", y: 0},
    {x: "6.1.", y: 1}
  ]

  /*
  useEffect(() => {
    fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact.json?lat=60.3049&lon=25.0207")
    .then(response => response.json())
    .then(json => setWeather([...json]));
  }, []);
  */

  return(
    <div>
      <VictoryChart
        domainPadding={{x: 30, y:10}}
        width={1000}
        height={250}
      >
        <VictoryLine
          data={tempData}
          style={{
            data:
              {stroke: "red", strokeWidth: 1}
          }}
        />
        <VictoryScatter
          data={tempData}
          style={{ data: {fill: "red"}}}
          size={2}
        />
      </VictoryChart>
      <VictoryChart
        domainPadding={{x: 30, y: 10}}
        width={1000}
        height={250}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) => `${datum.perc} %`}
          />
        }
      >
        <VictoryAxis />
        <VictoryAxis
          dependentAxis
          tickFormat={(perc) => `${perc} %`}
        />
        <VictoryLine
          data={[
            {date: "1.1.", perc: 50},
            {date: "2.1.", perc: 60},
            {date: "3.1.", perc: 55},
            {date: "4.1.", perc: 45},
            {date: "5.1.", perc: 40},
            {date: "6.1.", perc: 65}
          ]}
          style={{
            data:
              {stroke: "blue", strokeWidth: 1}
          }}
          x="date"
          y="perc"
        />
      </VictoryChart>
    </div>
  )
};

export default Weather;
