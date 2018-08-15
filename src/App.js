// @flow

import React, { Component } from "react";
import type { Element } from "react";
import { ApolloProvider } from "react-apollo";

import logo from "./nested.png";
import "./App.css";

import { client } from "./Apollo";
import { AddressSelect } from "./AddressSelect";
import { LandRegData } from "./LandRegData";
import { Status } from "./Status";

import type { Address } from "./Address";

type State = {
  address: ?Address,
};

class App extends Component<{}, State> {
  state = {
    address: null,
  };

  setAddress = (address: Address): void => {
    this.setState({ address });
  };

  render(): Element<any> {
    const {
      state: { address },
      setAddress,
    }: { state: State, setAddress: (Address) => void } = this;

    return (
      <div className="app">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <div className="title" />
        </header>
        <div className="App-title" />
        <ApolloProvider client={client}>
          <Status />
          <AddressSelect setAddress={setAddress} />
          {address && <LandRegData address={address} />}
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
