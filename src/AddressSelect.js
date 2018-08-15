// @flow

import React, { Component } from "react";
import Select from "react-select";

import type { Address } from "./Address";

type Option = {
  value: string,
  label: string,
};

type Props = {
  addresses: Address[],
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

    console.log(`Address:`, address);

    this.setState({ selectedOption });
  };

  render() {
    const {
      asOptions,
      handleChange,
      props: { addresses },
      state: { selectedOption },
    } = this;

    return (
      <Select
        placeholder="Address"
        value={selectedOption}
        onChange={handleChange(addresses)}
        options={asOptions(addresses)}
      />
    );
  }
}

export { AddressSelect };
