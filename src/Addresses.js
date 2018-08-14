// @flow

import React from "react";
import type { Element } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const ADDRESS_LIST = gql`
  query addresses {
    getAddresses {
      id
      postcode
      houseNumber
    }
  }
`;

export const Addresses = (): Element<any> => (
  <Query query={ADDRESS_LIST}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Could not get addresses :(</p>;

      return (
        <div>
          <h3>Addresses</h3>
          <ul>
            {data.getAddresses.map(({ postcode, houseNumber }) => (
              <li key={postcode}>
                {houseNumber} {postcode}
              </li>
            ))}
          </ul>
        </div>
      );
    }}
  </Query>
);
