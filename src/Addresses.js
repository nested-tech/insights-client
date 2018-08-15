// @flow

import React from "react";
import type { Element } from "react";
import { Query } from "react-apollo";

import gql from "graphql-tag";

import type { Address } from "./Address";
import { AddressSelect } from "./AddressSelect";

const ADDRESS_LIST = gql`
  query addresses {
    getAddresses {
      id
      postcode
      houseNumber
    }
  }
`;

export const Addresses = (): Element<Query> => (
  <Query query={ADDRESS_LIST}>
    {({
      loading,
      error,
      data: { getAddresses: addresses },
    }: {
      loading: boolean,
      error: Error,
      data: { getAddresses: Array<Address> },
    }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Could not get addresses :(</p>;

      return <AddressSelect addresses={addresses} />;
    }}
  </Query>
);
