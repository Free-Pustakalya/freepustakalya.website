
import React from "react";
import { Route } from "react-router";
import { HashRouter } from "react-router-dom";
import DonateNow from "./Components/DonateNow/DonateNow";
import Header from "./Components/Header/Header";
import "./Styles/main.css";
import AboutUs from "./Views/AboutUs/AboutUs";
import Blogs from "./Views/Blogs/Blogs";
import ContactUs from "./Views/ContactUs/ContactUs";
import Engage from "./Views/Engage/Engage";
import Events from "./Views/Events/Events";
import Home from "./Views/Home/Home";
// import NotFound from "./Views/NotFound/NotFound";              WILL BE IMPORTED AFTER MAJOR DEPLOYMENT - Not supported as of now (only while BrowserRouting)
import Programs from "./Views/Programs/Programs";
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

        <Route
          path="/about-us"
          exact component={AboutUs}
        />

        <Route
          path="/blogs"
          exact component={Blogs}
        />

        <Route
          path="/contact-us"
          exact component={ContactUs}
        />

        <Route
          path="/engage"
          exact component={Engage}
        />

        <Route
          path="/programs"
          exact component={Programs}
        />

        <Route
          path="/events"
          exact component={Events}
        />

        {/* 
          <Route
            path="*"
            exact component={NotFound}
          />
        */}

        {/* The NotFound is a temporary component
            which will be rendered at every un-wanted/non-implemented Page components*/}

      </HashRouter>
    </div>
  );
}

export default App;
