import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'

const Carousol = (props) => {
  return (
<Carousel className='carousol' controls={false} indicators={false} interval={props.interval} slide={false} fade={true}>
  <CarouselItem >
    <img src={props.img1} alt="" />
  </CarouselItem>
  <CarouselItem >
  <img src={props.img2} alt="" />
  </CarouselItem>
 {props.img3 ?  <CarouselItem >
  <img src={props.img3} alt="" />
  </CarouselItem> : ""}
  {props.img4 ?  <CarouselItem >
  <img src={props.img4} alt="" />
  </CarouselItem> : ""}
</Carousel>
  )
}

export default Carousol