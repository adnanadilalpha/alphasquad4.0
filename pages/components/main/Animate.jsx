import React, { useState } from "react";

const animate = (props) => {
  const [hover, setHover] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const idd = opacity ? "curve-image11" : "curve-image1";

  function overlay() {
    setHover(true);
    setOpacity(true);
  }

  function leave() {
    setHover(false);
    setOpacity(false);
  }
  return (
    <div className="wrap-anima">
      <div
        className="animate-chart"
        id="animate-1"
        onMouseEnter={overlay}
        onMouseLeave={leave}
      >
        <div className="svg-wrap">
          <p className="text-1">{props.title}</p>
          <svg
            id={idd}
            width="638"
            height="80"
            viewBox="0 0 638 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`${hover ? "mico" : ""}`}
              d="M4 75.9996C4 75.9996 86 23.5 160.5 13.3925C196 21.5 83.5 75 145 62.5C165.5 54.5006 301.5 -9.00002 324 13.3925C334 23.3447 277.791 61.457 318.5 45C342 35.5 358.5 30.3926 424 13.3926C502 0.39233 414.74 49.5 437 49.5C467.49 49.5 604.5 11.6075 634 4"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default animate;
