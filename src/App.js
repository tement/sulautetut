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

  useEffect(() => {
    fetch("http://gis.vantaa.fi/rest/tyopaikat/v1/Opetusala")
      .then(response => response.json())
      .then(json => setJobs([...json]));
  },[]);

  return(
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/weather">
            <Weather />
          </Route>
          <Route path="/">
            <Search />
            <Jobs jobs={jobs}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
