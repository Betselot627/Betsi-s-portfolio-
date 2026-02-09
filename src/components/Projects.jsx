import { useState, useEffect, useRef } from "react";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (currentRef) observer.observe(currentRef);
    return () => currentRef && observer.unobserve(currentRef);
  }, []);

  const projects = [
    {
      title: "GoodSeeds",
      description:
        "Volunteer and NGO connection platform connecting people with social initiatives and projects.",
      technologies: ["React", "PHP", "MySQL", "Tailwind CSS"],
      githubLink: "https://github.com/Betselot627/GoodSeeds",
    },
    {
      title: "Online Shopping",
      description:
        "Full-featured online store with authentication, product management, and secure payments.",
      technologies: ["React", "PHP", "MySQL", "Tailwind CSS"],
      githubLink: "https://github.com/Betselot627/Online-Shopping",
    },
    {
      title: "Expense Tracker",
      description:
        "Personal finance management app to track expenses and visualize budgets.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      githubLink: "https://github.com/Betselot627/Expense-Tracker-",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[#0a2744]" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          My <span className="text-[#5BC0EB]">Projects</span>
        </h2>
        <p
          className={`text-center text-gray-300 mb-12 text-lg transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Selected work and personal projects
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-[#0D3B66] rounded-lg overflow-hidden border border-[#5BC0EB]/20 hover:border-[#5BC0EB] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#5BC0EB]/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#5BC0EB]/10 text-[#5BC0EB] px-3 py-1 rounded-full text-sm border border-[#5BC0EB]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.githubLink}
                    className="flex-1 border-2 border-[#5BC0EB] text-[#5BC0EB] py-2 px-4 rounded-lg text-center font-semibold hover:bg-[#5BC0EB] hover:text-[#0D3B66] transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
