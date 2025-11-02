const Hero = () => {
  return (
     <section className="min-h-screen text-gray-300 flex items-center justify-center px-8 md:px-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16">
        {/* Left Side */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            Jeniya
          </h1>
          <h2 className="text-2xl font-medium text-gray-400">
            Frontend Developer
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-md text-lg">
            I build accessible, pixel-perfect digital experiences for the web using
            ReactJS and Tailwind CSS. I love creating interfaces that are both
            visually appealing and user-friendly.
          </p>
        </div>

        {/* Right Side */}
        <div className="space-y-4 text-gray-400 text-lg">
          <p>
            I’m passionate about crafting user interfaces that blend thoughtful
            design with robust engineering. My focus lies at the intersection of
            design and development, building experiences that are beautiful and
            performant.
          </p>
          <p>
            Previously, I’ve developed software for start-ups and digital studios,
            ensuring every component meets web accessibility standards and best
            practices.
          </p>
          <p>
            When I’m not coding, I enjoy exploring creative hobbies and learning new
            tools to improve my workflow.
          </p>
          <p>
            I’m passionate about crafting user interfaces that blend thoughtful
            design with robust engineering. My focus lies at the intersection of
            design and development, building experiences that are beautiful and
            performant.
          </p>
          <p>
            When I’m not coding, I enjoy exploring creative hobbies and learning new
            tools to improve my workflow.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero