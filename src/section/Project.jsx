const Project = () => {
  return (
    <div id="projects" className="min-h-screen text-white">
  <h1 className="text-3xl sm:text-4xl font-bold px-4 sm:px-10 md:px-20 text-center">
    My Projects
  </h1>

  <div className="p-4 sm:p-10 md:px-30">
    <ul className="grid grid-cols-1 md:grid-cols-12 gap-4 xl:grid-rows-2">
      
      {/* 1 */}
      <li className="min-h-[20rem] md:min-h-[18rem] list-none md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]">
        <div className="project-card">
          <div className="w-full p-5 text-center">
            <img src="/assets/food.png" alt="Carticon" className="w-20  mx-auto"/>
          </div>
           
            <div>
              <h3 className="text-xl font-semibold">Foodie</h3>
              <p className="text-gray-400 my-2">
                Food Ordering Website project
              </p>
              <ul className="project-skill"><li>HTML</li><li>CSS</li><li>Reactjs</li><li>Redux</li></ul>
            </div>
            <button className=" ">
              <img src="/assets/github.svg" alt="github" className="w-6" />
            </button>
        </div>
      </li>

      {/* 2 */}
      <li className="min-h-[20rem] md:min-h-[18rem] list-none md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]">
        <div className="project-card">
          <div className="w-full p-5 text-center">
            <img src="/assets/crm.png" alt="Carticon" className="w-20  mx-auto"/>
          </div>
           
            <div>
              <h3 className="text-xl font-semibold">Soulmate</h3>
              <p className="text-gray-400 my-2">
                Social Networking mobile application.
              </p>
              <ul className="project-skill"><li>React native</li></ul>
            </div>
            <button >
              <img src="/assets/github.svg" alt="github" className="w-6" />
            </button>
        </div>
      </li>

      {/* 3 (middle, larger one) */}
      <li className="min-h-[20rem] md:min-h-[18rem] list-none md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/9]">
        <div className="project-card">
          <div className="w-full p-5 text-center">
            <img src="/assets/carticon.png" alt="Carticon" className="w-20  mx-auto"/>
          </div>
           
            <div>
              <h3 className="text-xl font-semibold">Shopcart</h3>
              <p className="text-gray-400 my-2">
                A full-stack e-commerce application              </p>
               <ul className="project-skill"><li>Reactjs</li><li>MUI</li><li>Nodejs</li><li>Mongodb</li></ul>                        
            </div>
            <button >
              <img src="/assets/github.svg" alt="github" className="w-6" />
            </button>
        </div>
      </li>

      {/* 4 */}
      <li className="min-h-[20rem] md:min-h-[18rem] list-none md:[grid-area:2/7/3/13] xl:[grid-area:1/9/2/13]">
        <div className="project-card">
          <div className="w-full p-5 text-center">
            <img src="/assets/sellyard1.png" alt="Carticon" className="w-20  mx-auto"/>
          </div>
           
            <div>
              <h3 className="text-xl font-semibold">Sellyard</h3>
              <p className="text-gray-400 my-2">
                A web application for ordering and selling handmade items.
              </p>
              <ul className="project-skill"><li>HTML</li><li>CSS</li><li>Flask</li><li>MySql</li></ul>
               
            </div>
            <button >
              <img src="/assets/github.svg" alt="github" className="w-6" />
            </button>
        </div>
      </li>

      {/* 5 */}
      <li className="min-h-[20rem] md:min-h-[18rem] list-none md:[grid-area:3/1/4/13] xl:[grid-area:2/9/3/13]">
        <div className="project-card">
          <div className="w-full p-5 text-center">
            <img src="/assets/business.png" alt="Carticon" className="w-20  mx-auto"/>
          </div>
           
            <div>
              <h3 className="text-xl font-semibold">Arsha</h3>
              <p className="text-gray-400 my-2">
                 A business website
                </p>
               <ul className="project-skill"><li>HTML</li><li>CSS</li><li>Bootstap</li></ul>
            </div>
            <button >
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