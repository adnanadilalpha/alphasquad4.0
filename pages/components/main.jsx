import React from 'react'
import localFont from 'next/font/local'
import Clients from './main/Clients'
import Feature from './main/Feature'
import Team from './main/Team'
import Overview from './main/overview'


const myFont = localFont({ src: '../BasementGrotesque.otf' })

const main = () => {
  return (
<div className={myFont.className}>
    <Clients />
    <Feature/>
    <Team name1={"team"} name2={"focuses"} name3={"results"}/>
    <Overview />
</div>
  )
}

export default main