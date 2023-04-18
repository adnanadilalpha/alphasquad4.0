import React from "react";

const TextBox = (props) => {
  return (
    <div class="flex flex-col justify-center items-center">
      <div class=" my-12 2xl:my-32 px-595">
        <div class="text-white text-lg xl:text-xl 2xl:text-5xl tracking-wide uppercase Basement mb-6">
          <p>{props.title}</p>
        </div>
        <div class="text-zinc-400 text-base 2xl:text-2xl font-normal font">
          <div>
            {props.subTitle}
            {props.ul}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBox;
