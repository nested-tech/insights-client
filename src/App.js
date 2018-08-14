// @flow

import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";

import logo from "./nested.png";
import "./App.css";

import { client } from "./Apollo";
import { Addresses } from "./Addresses";
import { LandRegData } from "./LandRegData";

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="App-title">
            <span role="img" aria-label="rocket-emoji">
              🦄💦
            </span>
          </h1>
        </header>
        <ApolloProvider client={client}>
          <Addresses />
          <LandRegData addressId={"5c08ace2-9ee2-11e8-93eb-7a0074603401"} />
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
