const Experience = () => {
  return (
    <div className="px-6 py-16 md:px-20 lg:px-32 ">
  <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
  <p className="text-gray-300 mt-2">Recent roles</p>

  <div className="mt-12 space-y-12 relative">

    {/* Vertical Line */}
    <div className="absolute left-4 md:left-6 top-0 h-full w-[2px] bg-gray-600" />

    {/* Experience Item 1 */}
    <div className="relative pl-10 md:pl-14">
      {/* Dot */}
      <span className="absolute left-3 md:left-5 top-1 w-3 h-3 bg-cyan-400 rounded-full"></span>

      <h3 className="text-xl font-semibold">
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

      <h3 className="text-xl font-semibold">
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

      <h3 className="text-xl font-semibold">
        Full Stack Web Developement Intern - Brainvalley, Chennai
      </h3>
      <p className="text-gray-300 text-sm mt-1">
        June 2023 - Dec 2023
      </p>
    </div>

  </div>
</div>

  )
}

export default Experience