import { motion } from "motion/react";
import { useState } from "react"

let tabs = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div>
      <div className="flex space-x-1">
      {tabs.map((ele)=>(
         <button
          key={ele.id} 
          onClick={()=>setActiveTab(ele.id)}
          className={` ${activeTab ===  ele.id ? "" : "hover:text-amber-700"} relative rounded-full px-3 py-1.5 font-medium text-zinc transition`}
          >

            {activeTab ===  ele.id && (
              <motion.span 
              layoutId="active-pill" 
              className="bg-blue-500 rounded-full absolute inset-0 mix-blend-"
              style={{borderRadius:9999}}
              transition={{type:"spring",duration:"0.6"}}/>
            )}

          <span className="relative z-10">{ele.label}</span>

         </button>
      ))}
      </div>
      
    </div>
     
  )
}

export default Navbar