import React from 'react'
import Animate from "./Animate"
import AnimateSmall from './SmallAnimate'

const Feature = () => {

  return (
    <div className='feature'>
  <Animate title={"micomanagment"}/>
  <Animate title={"Boring meetings"}/>
  <AnimateSmall title={"Stress"} id={"curve-image-small"} idd={"curve-image-small1"}/>
  <Animate title={"Shitty work"}/>
  <Animate title={"hand holding"}/>
  <Animate title={"smoke & mirrors"}/>
    </div>
  )
}

export default Feature