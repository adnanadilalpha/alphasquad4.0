import React, { useState } from 'react'

const Team = (props) => {
const [focus, setFocus] = useState("gif-1")
function change(){
setFocus("gif-focus")
}

function remove(){
  setFocus("gif-1")
}

const [result, setResult] = useState("gif-3")
function onMove(){
setResult("gif-result")
}

function onRemove(){
  setResult("gif-3")
}

const [team, setTeam] = useState("gif-2")
function onMouse(){
setTeam("gif-team")
}

function onmove(){
  setTeam("gif-2")
}


  return (
<>
<div className="line-divide--main"></div>
<div className="wrap-text-anima">
<p className="title-main" >A no-bs 
    <span className="team" id="team" onMouseMove={onMouse} onMouseLeave={onmove}>{props.name1}</span>
     of a-players that
     <br/><span className="focus" id="focus" onMouseMove={change} onMouseLeave={remove}>{props.name2}</span>  
    on the last 20%, which gets 80% of the
     <span className="result" id="result" onMouseMove={onMove} onMouseLeave={onRemove}>{props.name3}</span> 
     .</p>
     <div className={focus} id="gif-1">
     </div>
     <div className={team}>
    </div>
    <div className={result} id="gif-3">
    </div>
</div>
</>
  )
}

export default Team