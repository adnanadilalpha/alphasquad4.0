import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

const Box = () => {
    const [Mouse, setMousePostion] = useState({
        x: 0,
        y: 0
    })

console.log(Mouse);

  

    useEffect(() => {
        const mouseMove = e => {
         setMousePostion({
            x: e.clientX,
            y: e.clientY
         })
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])


    const variants = {
    default: {
        x: Mouse.x - 166,
        y: Mouse.y - 166
    }
    }

  return (
    <div>
        <div className="box-4">
                <a href="/dopestuff/dope.html">
                <p className="shiny tagline-4">Dope stuff behind the box</p>
            </a>
            <motion.div
            className='cursor'
            variants={variants}
            animate='default'
            />
        </div>
    </div>
  )
}

export default Box