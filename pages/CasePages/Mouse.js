import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../CaseStudies/Components/Header";
import MouseVisual from "../CaseStudies/Components/MouseVisual"
import Head from "next/head";
import Button from "../components/Button";

const Mouse = () => {
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
        <Navbar name="light-wrap" logo={[<a href="/">
          <img src="../images/logoalpha.svg" className="w-8" />
        </a>]} />
        <Header
          title="Finalmouse"
          desc="Developing a repair management system with the speed of Flash and the power of Thor"
        />
        <MouseVisual />
        <Button />
        <Footer />
      </>
    );
  };
  
  export default Mouse;
  