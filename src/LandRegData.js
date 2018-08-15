// @flow

import React from "react";
import type { Element } from "react";
import { Query } from "react-apollo";

import gql from "graphql-tag";

import type { Address } from "./Address";

type LandRegDatum = {
  averageTimeToSold: number,
};

const AVERAGE_TIME_TO_SOLD = gql`
  query landRegData($addressId: ID!) {
    landRegData(addressId: $addressId) {
      averageTimeToSold
    }
  }
`;

export const LandRegData = ({
  address: { id },
}: {
  address: Address,
}): Element<Query> => (
  <Query query={AVERAGE_TIME_TO_SOLD} variables={{ addressId: id }}>
    {({
      loading,
      error,
      data,
    }: {
      loading: boolean,
      error: Error,
      data: { landRegData: LandRegDatum[] },
    }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Could not get land reg. data :(</p>;

      const averageTimeToSold: number = data.landRegData
        .map(({ averageTimeToSold }) => averageTimeToSold)
        .reduce((time, acc) => (time + acc) / 2);

      return (
        <p>
          <span>
            <b>Average Time to Sold: </b>
          </span>
          <span>{averageTimeToSold} days</span>
        </p>
      );
    }}
  </Query>
);
