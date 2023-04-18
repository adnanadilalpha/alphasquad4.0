import React, { useRef } from "react";
import Link from "next/link";
import Button from "../Button";

const overview = () => {
  function Cutton() {
    const buttonRef = useRef(null);

    function handleMouseMove(e) {
      const { x, y } = buttonRef.current.getBoundingClientRect();
      buttonRef.current.style.setProperty("--x", e.clientX - x);
      buttonRef.current.style.setProperty("--y", e.clientY - y);
    }

    return (
      <Link href="/dope">
        <p
          className="shiny tagline-4 text-center"
          onMouseMove={handleMouseMove}
          ref={buttonRef}
        >
          Dope stuff behind the box
        </p>
      </Link>
    );
  }
  return (
    <div>
      <div className="para-1">
        <p>Why settle for mediocrity?</p>
      </div>

      <Button />

      <div className="wrap-box">
        <div className="cal1-scte">
          <Link href="/CasePages/Scte">
            <div className="box-scte">
              <p className="tagline">SCTE - ISBE</p>
              <p className="description">
                Digital transformation of SCTE's 15 year old legacy system on a
                serverless infrastructure
              </p>
            </div>
          </Link>

          <Link href="/CasePages/Toyota">
            <div className="box-toyota">
              <p className="tagline">TOYOTA</p>
              <p className="description">
                More is more - 87% increase in conversion through UX
                optimization
              </p>
            </div>
          </Link>
        </div>
        <div className="cal2">
          <Link href="/CasePages/Nys">
            <div className="box-nys">
              <p className="tagline">the new york sun</p>
              <p className="description">
                The resurgence of a 200- year old, Pulitzer winning publication,
                in the digital era.
              </p>
            </div>
          </Link>
          <div className="box-stuff">
            <Cutton />
          </div>
        </div>
      </div>

      <div className="wrap-box-2">
        <div className="box-five box">
          <dl className="direction-aware-hover">
            <dt className="direction-aware-hover__left"></dt>
            <dt className="direction-aware-hover__right"></dt>
            <dt className="direction-aware-hover__top"></dt>
            <dt className="direction-aware-hover__bottom"></dt>
            <dd className="direction-aware-hover__content">
              <div className="numb">350+</div>
              <div className="people">Partners</div>
            </dd>
          </dl>
          <div className="in-box">
            <p className="num">350+</p>
            <p className="sub-title">Partners</p>
          </div>
        </div>
        <div className="box-six box">
          <dl className="direction-aware-hover">
            <dt className="direction-aware-hover__left"></dt>
            <dt className="direction-aware-hover__right"></dt>
            <dt className="direction-aware-hover__top"></dt>
            <dt className="direction-aware-hover__bottom"></dt>
            <dd className="direction-aware-hover__content">
              <div className="numb">900,000+</div>
              <div className="people">People impacted</div>
            </dd>
          </dl>
          <div className="in-box6">
            <p className="num1">900,000+</p>
            <p className="sub-title11">People impacted</p>
          </div>
        </div>

        <div className="box-seven box">
          <dl className="direction-aware-hover">
            <dt className="direction-aware-hover__left"></dt>
            <dt className="direction-aware-hover__right"></dt>
            <dt className="direction-aware-hover__top"></dt>
            <dt className="direction-aware-hover__bottom"></dt>
            <dd className="direction-aware-hover__content">
              <div className="numb">90%</div>
              <div className="people">Partner Retention</div>
            </dd>
          </dl>
          <div className="in-box7">
            <p className="num2">90%</p>
            <p className="sub-title2">Partner Retention</p>
          </div>
        </div>
        <div className="box-eight box">
          <dl className="direction-aware-hover">
            <dt className="direction-aware-hover__left"></dt>
            <dt className="direction-aware-hover__right"></dt>
            <dt className="direction-aware-hover__top"></dt>
            <dt className="direction-aware-hover__bottom"></dt>
            <dd className="direction-aware-hover__content">
              <div className="numb">29,000+</div>
              <div className="people">Hours in the business</div>
            </dd>
          </dl>
          <div className="in-box8">
            <p className="num3">29,000+</p>
            <p className="sub-title3">Hours in the business</p>
          </div>
        </div>
      </div>
      <Button />
    </div>
  );
};

export default overview;
