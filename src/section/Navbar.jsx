import { motion } from "motion/react";
import { useRef, useState } from "react"



const Navbar = () => {
  const [position, setPosition]= useState({
    left:0,
    width:0,
    opacity:0
  });

  return (
    <ul onMouseLeave={()=>{
      setPosition((eve)=>({
        ...eve,
        opacity :0,
      }));
    }}
    className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      <CusLi setPosition={setPosition}>Home</CusLi>
      <CusLi setPosition={setPosition}>About</CusLi>
      <CusLi setPosition={setPosition}>Experience</CusLi>
      <CusLi setPosition={setPosition}>Contact</CusLi>

      <Curser position={position}/>
    </ul>
     
  )
}

const CusLi =({children,setPosition})=>{
  const ref =useRef(null)
  return(
    <li
     ref={ref}
     onMouseEnter={()=>{
      if(!ref?.current) return;
      const {width}= ref.current.getBoundingClientRect();
      setPosition({
        left:ref.current.offsetLeft,
        width,
        opacity: 1,
      })
     }}
     className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  )
}
const Curser =({position})=>{
  return(
    <motion.li
    animate={{
      ...position
    }}
    className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  )
}
export default Navbar