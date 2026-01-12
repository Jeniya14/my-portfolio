import Skills from "./Skill"

const Experience = () => {
  return (
    <section id="about" className="relative pt-5 mt-2  max-w-full lg:pt-0 lg:px-0 ">
      
      <div className="sticky top-0 z-20 w-screen bg-[rgba(78,4,71,0.7)] backdrop-blur lg:sr-only">
        <div className="px-6 py-4">
          <h1 className="text-xl font-bold uppercase tracking-widest text-white">
            Experience
          </h1>
        </div>
      </div>

        <div className="px-4 lg:py-16 md:px-20 lg:px-32 " id="experience">
        <h2 className="text-2xl md:text-4xl hidden lg:block font-bold">EXPERIENCE</h2>
        {/* <p className="text-gray-300 sm:mt-2">Recent roles</p> */}

      <div className="mt-6 lg:mt-12 space-y-12 relative">

        {/* Vertical Line */}
        <div className="absolute left-4 md:left-6 top-0 h-full w-[2px] bg-gray-600" />

        {/* Experience Item 1 */}
        <div className="relative pl-10 md:pl-14">
          {/* Dot */}
          <span className="absolute left-3 md:left-5 top-1 w-3 h-3 bg-cyan-400 rounded-full"></span>

          <h3 className="text-lg font-semibold sm:text-xl">
            Junior Tool Admin - Thrive Tech, Cuddalore
          </h3>
          <p className="text-gray-300 text-sm mt-1">
            Jan 2024 - Jun 2024
          </p>
        </div>

        {/* Experience Item 2 */}
        <div className="relative pl-10 md:pl-14">
          {/* Dot */}
          <span className="absolute left-3 md:left-5 top-1 w-3 h-3 bg-pink-400 rounded-full"></span>

          <h3 className="text-lg sm:text-xl font-semibold">
            Web Developer - Freelancing, Remote
          </h3>
          <p className="text-gray-300 text-sm mt-1">
            June 2023 - Dec 2023
          </p>
        </div>

          {/* Experience Item 3 */}
        <div className="relative pl-10 md:pl-14">
          {/* Dot */}
          <span className="absolute left-3 md:left-5 top-1 w-3 h-3 bg-green-400 rounded-full"></span>

          <h3 className="text-lg sm:text-xl font-semibold">
            Full Stack Web Developement Intern - Brainvalley, Chennai
          </h3>
          <p className="text-gray-300 text-sm mt-1">
            Sep 2022 - Jan 2023
          </p>
        </div>

       </div>
      </div>
      <Skills/>
    </section>
    

  )
}

export default Experience