import React from 'react'
import Head from 'next/head'
import Button from './components/Button'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Header from './components/people/component/Header'
import Begin from './components/people/component/begin'
import Detail from './components/people/component/Detail'

const people = () => {
  return (
    <>
<Head>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Antonio&family=Archivo&display=swap" rel="stylesheet" />
</Head>
    <div className='people--head'>
<Navbar />
<Header />
    </div>
    <Begin />
    <Detail />
    <Button />
    <Footer />
    </>
  )
}

export default people