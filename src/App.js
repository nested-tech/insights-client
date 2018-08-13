// @flow

import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";

import logo from "./nested.png";
import "./App.css";

import { client } from "./Apollo";

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nested Insights 🚀</h1>
        </header>
        <ApolloProvider client={client}>
          <div>
            <p className="App-intro">It begins...</p>
          </div>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
