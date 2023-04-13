import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Header from '../CaseStudies/Components/Header'
import SimpleVisual from '../CaseStudies/Components/SimpleVisual'
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
   <Header  title="Simplero" desc="Simplero - Online Education Business Website"/>
   <SimpleVisual />
   <Button />
   <Footer />
   </>
  )
}

export default Scte