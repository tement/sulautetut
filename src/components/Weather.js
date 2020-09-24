import React, { useState, useEffect } from "react";
import Charts from "./layout/Charts.js";

function Weather() {
  // päivämäärän määrittelyt
  const today = new Date();
  const date = today.getDate() + "." + parseInt(today.getMonth() + 1) + "." + today.getFullYear();

  // alustusmuuttujien määrittelyt
  const initWeather = [];
  const [weather, setWeather] = useState(initWeather);

  // datan hakeminen rajapinnasta
  useEffect(() => {
    fetch("https://funcvariaiot.azurewebsites.net/api/HttpTriggerGetIotData?code=qO5qkShg0osHqY0BB2nfXI/anPgQ/K/3mIF7VTCFfaTdrvo6wl6DKw==&amount=15")
    .then(response => response.json())
    .then(json => setWeather([...json]));
  }, []);

  // esimerkkidataa lämpötilakaaviolle
  const tempData_example = [
    // x = päivämäärä, y = lämpötila
    {x: "1.1.", y: -5},
    {x: "2.1.", y: -6},
    {x: "3.1.", y: -9},
    {x: "4.1.", y: -2},
    {x: "5.1.", y: 0},
    {x: "6.1.", y: 1}
  ]

  // esimerkkidataa ilmankosteuskaaviolle
  const humData_example = [
    // x = päivämäärä, y = lämpötila
    {x: "1.1.", y: 50},
    {x: "2.1.", y: 60},
    {x: "3.1.", y: 55},
    {x: "4.1.", y: 45},
    {x: "5.1.", y: 40},
    {x: "6.1.", y: 65}
  ]

  // datataulukkojen määrittelyt
  let tempData = [];
  let humData = [];

  const rows = () => weather.slice(0,24).reverse().map(temphum => {
    const measurementDate = temphum.PublishedAt.split('T')[0].split('-')[2] + '.' + temphum.PublishedAt.split('T')[0].split('-')[1] + '.' + temphum.PublishedAt.split('T')[0].split('-')[0];
    const measurementTime = temphum.PublishedAt.split('T')[1].split(':')[0] + ':' + temphum.PublishedAt.split('T')[1].split(':')[1];
    tempData.push({x: String(measurementTime), y: parseInt(temphum.Temp)});
    humData.push({x: String(measurementTime), y: parseInt(temphum.Hum)});
    return(
      <div>
        <b>Pvm: </b>{measurementDate}, <b>klo: </b>{measurementTime} ------ <b>Ilmankosteus: </b>{temphum.Hum.split('.')[0]} % ------ <b>Lämpötila: </b>{temphum.Temp.split('.')[0]} °C
      </div>
    )
  })

  // HTML-koodi
  return(
    <div align="center">
      <Charts chart1={tempData} chart2={humData}/>
      <div>
        <h3>Piirrettävien kaavioiden data</h3>
      </div>
      <div>
        <b>Tänään on: {date}</b>
      </div>
      <div>
        {rows()}
      </div>
      <br />
    </div>
  )
};

export default Weather;
