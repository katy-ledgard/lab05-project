import React from "react";
import { Helmet } from "react-helmet-async";
import Main from "../../Components/Main/Main";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Norfolk Wildlife Home</title>
        <meta
          name="description"
          content="A website containing information on wildlife you can find in Norfolk"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <Main />
      
    </>
  );
}
