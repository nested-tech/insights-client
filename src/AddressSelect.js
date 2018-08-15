// @flow

import React, { Component } from "react";
import Select from "react-select";
import type { Element } from "react";
import { Query } from "react-apollo";

import gql from "graphql-tag";

import type { Address } from "./Address";

const ADDRESSES = gql`
  query addresses {
    getAddresses {
      id
      postcode
      houseNumber
    }
  }
`;

type Option = {
  value: string,
  label: string,
};

type Props = {
  setAddress: (Address) => void,
};

type State = {
  selectedOption: ?Option,
};

class AddressSelect extends Component<Props, State> {
  state = {
    selectedOption: null,
  };

  asOptions = (addresses: Address[]): Option[] =>
    addresses.map(({ id, houseNumber, postcode }) => ({
      label: `${houseNumber} ${postcode}`,
      value: id,
    }));

  handleChange = (addresses: Address[]) => (selectedOption: Option) => {
    const address = addresses.find(({ id }) => id === selectedOption.value);

    if (address) {
      this.props.setAddress(address);
    }

    this.setState({ selectedOption });
  };

  render(): Element<Query> {
    const {
      asOptions,
      handleChange,
      state: { selectedOption },
    } = this;

    return (
      <Query query={ADDRESSES}>
        {({
          loading,
          error,
          data,
        }: {
          loading: boolean,
          error: Error,
          data: ?{ getAddresses: Address[] },
        }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Could not get addresses :(</p>;
          if (data) {
            const { getAddresses: addresses } = data;
            return (
              <Select
                placeholder="Address"
                value={selectedOption}
                onChange={handleChange(addresses)}
                options={asOptions(addresses)}
              />
            );
          }
        }}
      </Query>
    );
  }
}

export { AddressSelect };
