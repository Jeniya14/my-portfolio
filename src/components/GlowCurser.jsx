import { useEffect, useState } from 'react'

const GlowCurser = () => {
    const [position,setPosition]= useState({x:0,y:0})
    useEffect(()=>{
        let raf;
        const handleMouseMove = (e) => {
         cancelAnimationFrame(raf);
         raf = requestAnimationFrame(() => {
           setPosition({ x: e.clientX, y: e.clientY });
          });
        };
         window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    },[])
  return (
    <div
    className='pointer-events-none fixed inset-0 z-0 hidden sm:block'
    style={{ background: `radial-gradient(circle 150px at ${position.x}px ${position.y}px, rgba(255,0,230,0.2), transparent 250%)`,
        mixBlendMode: "screen",}}
    ></div>
  )
}

export default GlowCurser