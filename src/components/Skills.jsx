import { useState, useEffect, useRef } from "react";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const skills = [
    { name: "HTML", level: 95, category: "Frontend" },
    { name: "CSS", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 85, category: "Frontend" },
    { name: "React", level: 80, category: "Frontend" },
    { name: "PHP", level: 75, category: "Backend" },
    { name: "MySQL", level: 80, category: "Backend" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "GitHub", level: 85, category: "Tools" },
    { name: "Responsive Design", level: 90, category: "Design" },
  ];

  const categories = ["Frontend", "Backend", "Tools", "Design"];

  return (
    <section id="skills" className="py-20 px-6 bg-[#0D3B66]" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          My <span className="text-[#5BC0EB]">Skills</span>
        </h2>
        <p
          className={`text-center text-gray-300 mb-12 text-lg transition-all duration-1000 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          Technologies and tools I work with
        </p>

        <div className="grid md:grid-cols-2 gap-18">
          {categories.map((category, index) => (
            <div
              key={category}
              className={`space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <h3 className="text-2xl font-semibold text-[#5BC0EB] mb-6">
                {category}
              </h3>
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-[#5BC0EB] font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-[#0a2744] rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#5BC0EB] to-[#4AA8D8] h-full rounded-full transition-all duration-1000 ease-out hover:scale-105"
                        style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Additional Skills Icons */}
        <div className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-[#0a2744] p-4 rounded-lg text-center hover:bg-[#1a5280] transition-all duration-500 hover:scale-110 border border-transparent hover:border-[#5BC0EB] hover:shadow-lg hover:shadow-[#5BC0EB]/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${(index + 6) * 100}ms` }}
            >
              <div className="text-sm text-white">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
