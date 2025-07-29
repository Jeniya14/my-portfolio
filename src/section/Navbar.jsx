import { motion } from "framer-motion"
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
          className={` ${activeTab ===  ele.id ? "bg-blue-500" : "hover:opacity-50"} rounded-full px-3 py-1.5 font-medium text-white  outline-2 outline-sky-400 focus-visible:outline`}
          >
        {ele.label}
         </button>
      ))}
      </div>
    </div>
     
  )
}

export default Navbar