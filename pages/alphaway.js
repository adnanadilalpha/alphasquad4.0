import Head from 'next/head'
import React from 'react'
import Grid from './components/alphaway/component/Grid'
import Animatealpha from './components/alphaway/component/Animatealpha'
import Header from './components/alphaway/component/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import GridTwo from './components/alphaway/component/GridTwo'

const Alphaway = () => {
  return (
    <div>
<Head>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link href="https://fonts.googleapis.com/css2?family=Antonio&family=Archivo&display=swap" rel="stylesheet" />
</Head>
<div className='head--section'>
<Navbar />
<Header />
</div>
  <Grid />
  <Animatealpha />
  <GridTwo />
  <Footer />
    </div>
  )
}

export default Alphaway