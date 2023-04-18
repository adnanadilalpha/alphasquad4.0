import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <Link href="/book">
      <div className="cta-1">
        <p id="cta-1" className="active">
          Book a call now
        </p>

        <div className="light-2"></div>
      </div>
    </Link>
  );
};

export default Button;
