import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../CaseStudies/Components/Header";
import ScteVisual from "../CaseStudies/Components/scteVisual";
import Head from "next/head";
import Button from "../components/Button";

const Scte = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio&family=Archivo&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar name="light-wrap" />
      <Header
        title="SCTE - ISBE "
        desc="Digital transformation of SCTE’s 15 year old legacy system on a serverless infrastructure"
      />
      <ScteVisual />
      <Button />
      <Footer />
    </>
  );
};

export default Scte;
