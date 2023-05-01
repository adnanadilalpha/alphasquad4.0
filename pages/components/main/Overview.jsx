import React, { useRef } from "react";
import Link from "next/link";
import Button from "../Button";
import Arsalan from "./Arsalan";

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
          className="shiny tagline-4 text-center "
          onMouseMove={handleMouseMove}
          ref={buttonRef}
        >
          Book a Free Consultation
        </p>
      </Link>
    );
  }
  return (
    <div>
<Arsalan />

      <Button />

      <div className="wrap-box">
        <div className="cal1-scte">
          <Link href="/CasePages/Scte">
            <div className="box-scte">
              <p className="tagline">SCTE - ISBE</p>
              <p className="description">
              Leader in standards development for the cable industry.
              </p>
            </div>
          </Link>

          <Link href="/CasePages/Sxm">
            <div className="box-sxm">
              <p className="tagline">Sirius Xm radio</p>
              <p className="description">
              SXM - National enrolment system for driver onboarding
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
          <Link href="/CasePages/Learnforce">
            <div className="box-learn">
              <p className="tagline">LEARNFORCE</p>
              <p className="description">
              Developing One of Europe’s biggest Online Learning Platforms (PaaS)
              </p>
            </div>
          </Link>
          <Link href="/CasePages/Tuk">
            <div className="box-tuk">
              <p className="tagline">TUK</p>
              <p className="description">
              Tailwind UI Kit - Tailwind CSS components & templates 
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


<div className="flex items-center justify-center mt-96 absolute w-full">
          <div class="border border-zinc-700  box-center">
            <p class="text-zinc-400 Basement text-3xl uppercase font-extrabold px-28 py-14">
                By the numbers
            </p>
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
