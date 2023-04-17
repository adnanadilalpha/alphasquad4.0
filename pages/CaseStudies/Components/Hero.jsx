import React from 'react'

const Hero = (prop) => {
  return (
<div className="flex justify-center">
    <div className="flex justify-center mb-32">
    <img src={prop.img} alt="" />
    </div>
</div>
  )
}

export default Hero