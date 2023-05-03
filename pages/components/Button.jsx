import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <Link href="https://calendly.com/aqk-dev/intro-call?month=2023-05" target="_blank">
      <div className="cta-1">
        <p id="cta-1" className="active">
          Book a free consultation
        </p>

        <div className="light-2"></div>
      </div>
    </Link>
  );
};

export default Button;
