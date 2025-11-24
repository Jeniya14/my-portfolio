import { useEffect, useState } from "react";

const MobileSectionHeader = () => {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.4) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: [0.2, 0.4, 0.6] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  if (currentSection === "home") return null;

  const titles = {
    experience: "Experience",
    skill: "Skill",
    project: "Project",
  };

  return (
    <div className="sm:hidden sticky top-0 z-50 bg-black/40 backdrop-blur text-center py-3 text-lg font-semibold border-b border-white/20">
      {titles[currentSection]}
    </div>
  );
};

export default MobileSectionHeader;
