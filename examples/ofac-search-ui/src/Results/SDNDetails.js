import React from "react";
import * as R from "ramda";
import styled, { css } from "styled-components/macro"; // eslint-disable-line no-unused-vars
import CircularProgress from "@material-ui/core/CircularProgress";
import * as C from "Components";
import { Address } from "./Addresses";
import { AltName } from "./AltNames";

const Addresses = ({ data }) => {
  if (!data) return <CircularProgress size="1em" />;
  if (data.length === 0) return null;
  return (
    <div
      css={`
        margin-bottom: 1em;
      `}
    >
      <C.SectionTitle>Addresses</C.SectionTitle>
      {data.map(a => (
        <Address key={a.addressID} data={a} />
      ))}
    </div>
  );
};

const Alternates = ({ data }) => {
  if (!data) return <CircularProgress size="1em" />;
  if (data.length === 0) return null;
  return (
    <div
      css={`
        margin-bottom: 1em;
      `}
    >
      <C.SectionTitle>Alternate Names</C.SectionTitle>
      {data.map(a => (
        <AltName key={a.alternateID} data={a} />
      ))}
    </div>
  );
};

export const SDNExpandDetails = ({ data }) => (
  <div
    css={`
      width: 100%;
    `}
  >
    <Addresses data={R.path(["ADDS", "data"])(data)} />
    <Alternates data={R.path(["ALTS", "data"])(data)} />
  </div>
);
