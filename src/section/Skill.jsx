import { motion } from "framer-motion";

const Skill = () => {
    const skills = [
        "Figma",
        "GitHub",
        "Framer Motion",
        "MongoDB",
        "Express",
        "Node.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Next.js"
     ];
  return (
     <section className="w-full py-10  text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold mb-3">Skills</h2>
        <p className="text-gray-400 mb-10">
          Technologies and tools I work with.
        </p>

         <div className="w-full overflow-hidden">
         
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            }}
          >
            {[...skills, ...skills].map((skill, i) => (
              <span
                key={i}
                className="px-3 sm:px-6 py-2 rounded-full bg-black    border-white text-gray-200 border transition-all cursor-default flex-shrink-0"
              >
                {skill}
              </span>
            ))}
          </motion.div>

            
        </div>
      
        

      </div>
    </section>
  )
}

export default Skill