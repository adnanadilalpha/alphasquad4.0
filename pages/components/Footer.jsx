import React from 'react'

const Footer = () => {
  return (
<div className="grid-footer">
        <div className="content-1">
        <span className="item1">
            FIND US
        </span>
       <ul className="links">
<a href='https://dribbble.com/alphasquadstudio' target="_blank"><li className="dribb textc">DRIBBBLE</li></a>
        <li className="dot">
            <img src="../images/dot.svg" alt="" />
        </li>
<a href='https://twitter.com/Alphasq86076809' target="_blank"><li className="github textc">TWITTER</li></a>
        <li className="dot">
            <img src="../images/dot.svg" alt="" />
        </li>
<a href='https://pk.linkedin.com/company/alphasquad-tech' target='_blank'><li className="linked textc">LINKEDIN</li></a>
        <li className="dot">
            <img src="../images/dot.svg" alt="" />
        </li>
<a href='https://www.instagram.com/alphasquadtech/?hl=en' target="_blank"><li className="insta textc">INSTAGRAM</li></a>
       </ul>
        </div>
<div className="content-2">
            <p className="item2">
                UP CLOSE AND PERSONAL
            </p>
            <a className="email" href="mailto:HOWDY@ALPHASQUAD.TECH">HOWDY@ALPHASQUAD.TECH</a>
        </div>
        <div className="content-3">
            <p className="copywrite">© ALPHASQUAD LLC 2022
               ALL RIGHTS RESERVED</p>
        </div>
    </div>
  )
}

export default Footer