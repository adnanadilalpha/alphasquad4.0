import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar'
import Header from '../CaseStudies/Components/Header'
import WoveVisual from '../CaseStudies/Components/WoveVisual'
import Head from 'next/head'
import Button from '../components/Button';

const Scte = () => {
  return (
   <>  
<Head>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link href="https://fonts.googleapis.com/css2?family=Antonio&family=Archivo&display=swap" rel="stylesheet" />
</Head>
   <Navbar name="light"/>
   <Header  title="Wove" desc="Wove - Product Marketing Website"/>
   <WoveVisual />
   <Button />
   <Footer />
   </>
  )
}

export default Scte