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
     <nav className="flex space-x-1">
      <button>
        <span />
      </button>
    </nav>
  )
}

export default Navbar