import React from 'react'

const scte = (props) => {
  return (
    <div>
         <div className="header-case">
        <p className="sub-title-case">{props.title} </p>
        <h1 className="headline-case">
          {props.desc}
        </h1>
    </div>
    </div>
  )
}

export default scte