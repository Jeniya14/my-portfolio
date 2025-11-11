const Project = () => {
  const projectData = [
  {
    title: "Gameverse",
    desc: "Where user can manage their games and see the reviews.",
  },
  {
    title: "Medicare",
    desc: "Seamless appointment booking with the hospital.",
  },
  {
    title: "FOG",
    desc: "Buying styling essentials made easy.",
  },
  {
    title: "ToDo",
    desc: "A todo app showing the power of redux",
  },
  {
    title: "Chat - socket.io",
    desc: "A real time chat app demo using socket io",
  },
];

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12 text-center py-6">My Projects</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {projectData.map((p, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-white/10 bg-black shadow-lg flex flex-col gap-4"
            >
              {/* Arrow button */}
              <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition">
                →
              </button>

              {/* Title */}
              <h3 className="text-xl font-semibold">{p.title}</h3>

              {/* Description */}
              <p className="text-gray-400">{p.desc}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Project