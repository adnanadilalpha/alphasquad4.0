import React from 'react'

const TextBox = (props) => {
  return (
<div class="container-3">
        <div class="box">
            <div class="title3-scte">
            <p>
               {props.title}
            </p>
        </div>
      <div class="para-3">
        <div>
          {props.subTitle}
          {props.ul}
        </div>
      </div>
    </div>
</div>
  )
}

export default TextBox