import React from "react";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Norfolk Wildlife Home</title>
        <meta
          name="description"
          content="About us information for Norfolk Wildlife"
        />
        <link rel="canonical" href="/about"/>
      </Helmet>
    </>
  );
}
