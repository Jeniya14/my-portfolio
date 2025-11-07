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
  "Next.js",
];

export default function Skills() {
  return (
    <section className="w-full py-14 text-white">
      <div className=" mx-auto ">

        {/* ✅ Center headings */}
        <h2 className="text-4xl font-bold text-center mb-3">Skills</h2>
        <p className="text-gray-400 text-center mb-10">
          Technologies and tools I work with.
        </p>

        {/* ✅ Marquee */}
        <div className="stock-ticker  rounded-md  ">
          <ul>
            {skills.map((item, i) => (
              <li key={i} className="px-4 py-1 bg-black rounded-full">
                {item}
              </li>
            ))}
          </ul>

          {/* duplicate required for seamless looping */}
          <ul>
            {skills.map((item, i) => (
              <li key={"copy-" + i} className="px-4 py-1 bg-black rounded-full">
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
