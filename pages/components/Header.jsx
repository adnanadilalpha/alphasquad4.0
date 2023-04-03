import Carousal from "./carousal";
import React from 'react'



const Header = (props) => {
  return (
    <div>
      <div className="header">
        <p className="headline">
          <span className="small">{props.title}</span>
          {props.subTitle}
        </p>
        <Carousal />
      </div>
    </div>
  )
}

export default Header