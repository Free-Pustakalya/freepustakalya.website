import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import './Styles/main.css';
import Home from './Views/Home/Home';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HashRouter basename="/">
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
        </HashRouter>
      </div>
    )
  }
}