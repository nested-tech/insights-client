// @flow

import React from "react";
import type { Element } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

type id = number | string;

const STATUS = gql`
  query status {
    isThisThingOn
  }
`;

export const Status = (): Element<any> => (
  <Query query={STATUS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>⛔️</p>;
      return (
        <div>
          <p>
            <span>Is this thing on? </span>
            {data.isThisThingOn ? <span>✅</span> : <span>⛔️</span>}
          </p>
        </div>
      );
    }}
  </Query>
);
