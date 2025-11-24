const skills = [
  "Html",
  "CSS",
  "Javascript",
  "Framer Motion",
  "MongoDB",
  "Express",
  "Node.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Three.js",
  "Material UI",
];

export default function Skills() {
  return (
    <section className="w-full py-16 my-8 text-white">
      <div className=" mx-auto ">

        <h2 className="text-4xl font-bold text-center mb-3">Skills</h2>
        <p  className="text-gray-400 text-center mb-10">
          Technologies and tools I work with.
        </p>
        <div className="marquee-skills  rounded-md  ">
          <ul>
            {skills.map((item, i) => (
              <li key={i} className="px-4 py-1 border border-white rounded-full">
                {item}
              </li>
            ))}
          </ul>
          <ul>
            {skills.map((item, i) => (
              <li key={"copy-" + i} className="px-4 py-1 border border-white rounded-full">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
