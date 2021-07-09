import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import './Styles/main.css';
import AboutUs from './Views/AboutUs/AboutUs';
import Home from './Views/Home/Home';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HashRouter basename="/">

          {/* Routes for Home */}
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          
          {/* Routes for About Us */}
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/about" exact component={AboutUs} />

          

        </HashRouter>
        <Footer />
      </div>
    )
  }
}