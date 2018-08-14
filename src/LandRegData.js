// @flow

import React from "react";
import type { Element } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

type id = number | string;

const AVERAGE_TIME_TO_SOLD = gql`
  query landRegData($addressId: ID!) {
    landRegData(addressId: $addressId) {
      averageTimeToSold
    }
  }
`;

export const LandRegData = ({ addressId }: { addressId: id }): Element<any> => (
  <Query query={AVERAGE_TIME_TO_SOLD} variables={{ addressId }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Could not get land reg. data :(</p>;

      return (
        <div>
          <h3>Average Time to Sold</h3>
          <div>{data.landRegData[0].averageTimeToSold} days</div>
        </div>
      );
    }}
  </Query>
);