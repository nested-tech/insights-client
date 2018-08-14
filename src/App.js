// @flow

import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";

import logo from "./nested.png";
import "./App.css";

import { client } from "./Apollo";
import { Addresses } from "./Addresses";
import { LandRegData } from "./LandRegData";
import { Status } from "./Status";

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <div className="title" />
        </header>
        <div className="App-title" />
        <ApolloProvider client={client}>
          <Status />
          <Addresses />
          <LandRegData addressId={"5c08ace2-9ee2-11e8-93eb-7a0074603401"} />
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
