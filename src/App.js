import React, { useState } from 'react';
import './App.css';
import Header from "./components/layout/Header.js";
import Search from "./components/layout/Search.js";

function App() {
  const initJobs = [];
  const [jobs, setJobs] = useState(initJobs);

  fetch("http://gis.vantaa.fi/rest/tyopaikat/v1/Opetusala")
  .then(response => response.json())
  .then(json => setJobs([...json]));

  const rows = () => jobs.map(job => {
    return (
      <div>
        <input type="checkbox"></input>
        {job.tyotehtava}, {job.osoite}&nbsp;
        <input 
          type="button"
          value="lisätietoa"
          onclick="location.href={job.linkki};"
        ></input>
      </div>
    )
  });

  return (
    <div className="App">
      <Header />
      <Search />
      {rows()}
    </div>
  );
}

export default App;
