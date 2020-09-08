import React, { useState, useEffect } from "react";
import { VictoryChart, VictoryTooltip, VictoryGroup, VictoryLine, VictoryScatter, VictoryAxis, VictoryVoronoiContainer } from "victory";

function Weather() {
  const initWeather = [];
  const [weather, setWeather] = useState(initWeather);

  const tempData = [
    // x = date, y = temperature
    {x: "1.1.", y: -5},
    {x: "2.1.", y: -6},
    {x: "3.1.", y: -9},
    {x: "4.1.", y: -2},
    {x: "5.1.", y: 0},
    {x: "6.1.", y: 1}
  ]

  const humData = [
    // x = date, y = percentage
    {x: "1.1.", y: 50},
    {x: "2.1.", y: 60},
    {x: "3.1.", y: 55},
    {x: "4.1.", y: 45},
    {x: "5.1.", y: 40},
    {x: "6.1.", y: 65}
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
      <p><b>Lämpötila (°C)</b></p>
      <VictoryChart
        domainPadding={{x: 30, y:10}}
        width={1000}
        height={250}
        containerComponent={
          <VictoryVoronoiContainer/>
        }
      >
        <VictoryGroup data={tempData}>
          <VictoryLine
            style={{
              data:
                {stroke: "red", strokeWidth: 1}
            }}
          />
          <VictoryScatter
            style={{ data: {fill: "red"}}}
            size={2}
            labels={({ datum }) => `${datum.y} °C`}
            labelComponent={<VictoryTooltip/>}
          />
        </VictoryGroup>
      </VictoryChart>
      <p><b>Ilmankosteus (%)</b></p>
      <VictoryChart
        domainPadding={{x: 30, y: 10}}
        width={1000}
        height={250}
        containerComponent={
          <VictoryVoronoiContainer/>
        }
      >
        <VictoryGroup data={humData}>
          <VictoryLine
            style={{
              data:
                {stroke: "blue", strokeWidth: 1}
            }}
          />
          <VictoryScatter
            style={{ data: {fill: "blue"}}}
            size={2}
            labels={({ datum }) => `${datum.y} %`}
            labelComponent={<VictoryTooltip/>}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  )
};

export default Weather;
