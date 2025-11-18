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
          <div className="w-full bg-gray-900 p-5 text-center">
            <img src="/assets/food.png" alt="Carticon" className="w-20  mx-auto"/>
          </div>
           
            <div>
              <h3 className="text-xl font-semibold">Foodie</h3>
              <p className="text-gray-400 mt-2">
                Where user can manage their games and see the reviews.
              </p>
            </div>
            <button className=" absolute bottom-4 right-4 w-9 h-9 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-gray-700 transition">
              <img src="/assets/github.svg" alt="github" className="w-6" />
            </button>
        </div>
      </li>

      {/* 2 */}
      <li className="min-h-[16rem] list-none md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]">
        <div className="project-card">
          <div className="w-full bg-gray-900 p-5 text-center">
            <img src="/assets/crm.png" alt="Carticon" className="w-20  mx-auto"/>
          </div>
           
            <div>
              <h3 className="text-xl font-semibold">Soulmate</h3>
              <p className="text-gray-400 mt-2">
                Where user can manage their games and see the reviews.
              </p>
              <ul className="project-skill"><li>React native</li><li>React native</li><li>React native</li><li></li></ul>
            </div>
            <button className="absolute bottom-4 right-4 w-9 h-9 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-gray-700 transition">
              <img src="/assets/github.svg" alt="github" className="w-6" />
            </button>
        </div>
      </li>

      {/* 3 (middle, larger one) */}
      <li className="min-h-[18rem] list-none md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]">
        <div className="project-card">
          <div className="w-full bg-gray-900 p-5 text-center">
            <img src="/assets/carticon.png" alt="Carticon" className="w-20  mx-auto"/>
          </div>
           
            <div>
              <h3 className="text-xl font-semibold">Shopcart</h3>
              <p className="text-gray-400 mt-2">
                Where user can manage their games and see the reviews.
              </p>
            </div>
            <button className="absolute bottom-4 right-4 w-9 h-9 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-gray-700 transition">
              <img src="/assets/github.svg" alt="github" className="w-6" />
            </button>
        </div>
      </li>

      {/* 4 */}
      <li className="min-h-[16rem] list-none md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]">
        <div className="project-card">
          <div className="w-full bg-gray-900 p-5 text-center">
            <img src="/assets/game1.png" alt="Carticon" className="w-20  mx-auto"/>
          </div>
           
            <div>
              <h3 className="text-xl font-semibold">Gamng</h3>
              <p className="text-gray-400 mt-2">
                Where user can manage their games and see the reviews.
              </p>
            </div>
            <button className="absolute bottom-4 right-4 w-9 h-9 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-gray-700 transition">
              <img src="/assets/github.svg" alt="github" className="w-6" />
            </button>
        </div>
      </li>

      {/* 5 */}
      <li className="min-h-[16rem] list-none md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]">
        <div className="project-card">
          <div className="w-full bg-gray-900 p-5 text-center">
            <img src="/assets/sellyard1.png" alt="Carticon" className="w-20  mx-auto"/>
          </div>
           
            <div>
              <h3 className="text-xl font-semibold">Sellyard</h3>
              <p className="text-gray-400 mt-2">
                Where user can manage their games and see the reviews.
              </p>
              {/* <ul>
                <li>react</li>
                <li>native</li>
                <li>matrial ui</li>
              </ul> */}
            </div>
            <button className="absolute bottom-4 right-4 w-9 h-9 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-gray-700 transition">
              <img src="/assets/github.svg" alt="github" className="w-6" />
            </button>
        </div>
      </li>
    </ul>
  </div>
</div>

  )
}

export default Project