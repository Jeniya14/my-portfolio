import { motion } from "motion/react";
import { useRef, useState } from "react"



const Navbar = () => {
  const [position, setPosition]= useState({
    left:0,
    width:0,
    opacity:0
  });

  return (
    <nav className="sticky top-0 z-50  py-2 hidden lg:block">
    <ul onMouseLeave={()=>{
      setPosition((eve)=>({
        ...eve,
        opacity :0,
      }));
    }}
    className="relative mx-auto  flex w-fit rounded-full border-2 border-white  bg-black/30 p-1 backdrop-blur"
    >
      <CusLi setPosition={setPosition}><a href="#home">Home</a></CusLi>
      {/* <CusLi setPosition={setPosition}>About</CusLi> */}
      <CusLi setPosition={setPosition} ><a href="#experience">Experience</a></CusLi>
      <CusLi setPosition={setPosition}><a href="#project">Project</a></CusLi>
     
      <Curser position={position}/>
    </ul>
    </nav> 
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
     className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white  md:px-5 md:py-3 md:text-base"
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
    className="absolute z-0 h-7 rounded-full bg-navbtn md:h-12"
    />
  )
}
export default Navbar