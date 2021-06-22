
import React from "react";
import { Route } from "react-router";
import { HashRouter } from "react-router-dom";
import DonateNow from "./Components/DonateNow/DonateNow";
import Header from "./Components/Header/Header";
import "./Styles/main.css";
import Home from "./Views/Home/Home";
import Teams from "./Views/Teams/Teams";

function App() {
  return (
    <div className="App">
      <DonateNow />
      <Header />
      <HashRouter basename="/">
        
        <Route
          path="/"
          exact component={Home} 
        />

        <Route
          path="/home"
          exact component={Home} 
        />

        <Route
          path="/teams"
          exact component={Teams} 
        />

      </HashRouter>
    </div>
  );
}

export default App;
