import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar'
import Header from '../CaseStudies/Components/Header'
import NysVisual from '../CaseStudies/Components/NysVisual'
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
   <Header  title="The New York Sun" desc="Digital Transformation for a 200-year old - Pulitzer winning publication. "/>
   <NysVisual />
   <Button />
   <Footer />
   </>
  )
}

export default Scte