// @flow

import React from "react";
import type { Element } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const STATUS = gql`
  query status {
    isThisThingOn
  }
`;

const UnicornSploosh = () => (
  <span role="img" aria-label="unicorn-sploosh">
    🦄💦
  </span>
);

const NoEntry = () => (
  <span role="img" aria-label="no-entry">
    ⛔️
  </span>
);

export const Status = (): Element<any> => (
  <Query query={STATUS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;

      return (
        <div>
          <p>
            <span>Is this thing on? </span>
            {error || !data.isThisThingOn ? <NoEntry /> : <UnicornSploosh />}
          </p>
        </div>
      );
    }}
  </Query>
);
