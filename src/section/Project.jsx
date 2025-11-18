const Project = () => {
  return (
    <div id="projects" className="min-h-screen text-white">
  <h1 className="text-3xl sm:text-4xl font-bold px-4 sm:px-10 md:px-20 text-center">
    My Projects
  </h1>

  <div className="p-4 sm:p-10 md:p-20">
    <ul className="grid grid-cols-1 md:grid-cols-12 gap-4 xl:grid-rows-2">
      
      {/* 1 */}
      <li className="min-h-[16rem] list-none md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]">
        <div className="project-card">
           <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition">
              →
            </button>
            <div>
              <h3 className="text-xl font-semibold">Gameverse</h3>
              <p className="text-gray-400 mt-2">
                Where user can manage their games and see the reviews.
              </p>
            </div>
        </div>
      </li>

      {/* 2 */}
      <li className="min-h-[16rem] list-none md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]">
        <div className="project-card">
           <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition">
              →
            </button>
            <div>
              <h3 className="text-xl font-semibold">Gameverse</h3>
              <p className="text-gray-400 mt-2">
                Where user can manage their games and see the reviews.
              </p>
            </div>
        </div>
      </li>

      {/* 3 (middle, larger one) */}
      <li className="min-h-[18rem] list-none md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]">
        <div className="project-card">
           <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition">
              →
            </button>
            <div>
              <h3 className="text-xl font-semibold">Gameverse</h3>
              <p className="text-gray-400 mt-2">
                Where user can manage their games and see the reviews.
              </p>
            </div>
        </div>
      </li>

      {/* 4 */}
      <li className="min-h-[16rem] list-none md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]">
        <div className="project-card">
           <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition">
              →
            </button>
            <div>
              <h3 className="text-xl font-semibold">Gameverse</h3>
              <p className="text-gray-400 mt-2">
                Where user can manage their games and see the reviews.
              </p>
            </div>
        </div>
      </li>

      {/* 5 */}
      <li className="min-h-[16rem] list-none md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]">
        <div className="project-card">
           <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition">
              →
            </button>
            <div>
              <h3 className="text-xl font-semibold">Gameverse</h3>
              <p className="text-gray-400 mt-2">
                Where user can manage their games and see the reviews.
              </p>
            </div>
        </div>
      </li>
    </ul>
  </div>
</div>

  )
}

export default Project