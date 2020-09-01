import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/layout/Header.js";
import Search from "./components/layout/Search.js";
import Jobs from "./components/Jobs.js";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Weather from "./components/Weather.js";

function App() {
  const initJobs = [];
  const [jobs, setJobs] = useState(initJobs);

  const [filterText, setFilterText] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleFilter = (filteringText) => {
    setFilterText(filteringText);
    if (filteringText === "") {
      // console.log("true");
    } else {
      setShowAll(false);
      // console.log("=> filteringText in App.js: " + filteringText);
    }
  }

  const handleCompletion = (job) => {
    // console.log("checkbox clicked");
    jobs.map((checkJob) => {
      if (checkJob.id === job.id) {
        checkJob.completed = !checkJob.completed
      }
      // console.log(checkJob.id +  " - " + job.id)
    });
    setJobs([...jobs]);
  }

  const jobsToShow = showAll
    ? jobs
    : jobs.filter(job => job.tyotehtava.toUpperCase().includes(filterText.toUpperCase()))

  useEffect(() => {
    fetch("http://gis.vantaa.fi/rest/tyopaikat/v1/kaikki")
      .then(response => response.json())
      .then(json => setJobs([...json]));
  }, []);

  return(
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/weather">
            <Weather />
          </Route>
          <Route path="/">
            <Search onFilter={handleFilter} />
            <Jobs onCompletion={handleCompletion} jobs={jobsToShow} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
