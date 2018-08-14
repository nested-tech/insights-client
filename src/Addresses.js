// @flow

import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export const Addresses = () => (
  <Query
    query={gql`
      query addresses {
        getAddresses {
          id
          postcode
          houseNumber
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div>
          <h2>Addresses</h2>
          <ul>
            {data.getAddresses.map(({ postcode, houseNumber }) => (
              <li key={postcode}>
                {houseNumber} - {postcode}
              </li>
            ))}
          </ul>
        </div>
      );
    }}
  </Query>
);
