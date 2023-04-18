import React from "react";
import Button from "./components/Button";
import CaseView from "./components/dope/component/CaseView";
import Flex from "./components/dope/component/Flex";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Head from "next/head";

const dope = () => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio&family=Archivo&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Flex />
      <CaseView />
      <Button />
      <Footer />
    </div>
  );
};

export default dope;
