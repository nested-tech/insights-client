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

const UnicornSploosh = (): Element<"span"> => (
  <span role="img" aria-label="unicorn-sploosh">
    🦄💦
  </span>
);

const NoEntry = (): Element<"span"> => (
  <span role="img" aria-label="no-entry">
    ⛔️
  </span>
);

export const Status = (): Element<Query> => (
  <Query query={STATUS}>
    {({
      loading,
      error,
      data,
    }: {
      loading: boolean,
      error: Error,
      data: { isThisThingOn: boolean },
    }) => {
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
