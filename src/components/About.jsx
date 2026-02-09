import { useState, useEffect, useRef } from "react";

function About() {
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

  return (
    <section id="about" className="py-20 px-6 bg-[#0a2744]" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          About <span className="text-[#5BC0EB]">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Short Professional Intro */}
          <div
            className={`space-y-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Betselot Tigistu, a <span className="font-semibold">4th-year Software Engineering student</span> who loves coding and designing intuitive web experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in <span className="font-semibold">frontend development</span> using <span className="font-semibold">React</span> and <span className="font-semibold">Next.js</span>, and I work as a developer at <span className="font-semibold">Jirtuu Software Labs</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am passionate about creating responsive, clean, and user-friendly websites, constantly learning new technologies, and improving my skills every day.
            </p>
          </div>

          {/* Stats / Realistic Cards */}
          <div
            className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-[#0D3B66] p-6 rounded-lg border border-[#5BC0EB]/20 hover:border-[#5BC0EB] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5BC0EB]/20">
              <div className="text-[#5BC0EB] text-3xl md:text-2xl font-bold mb-2">Working on Projects</div>
              <div className="text-gray-300 text-sm md:text-base">Actively building personal and client projects every week</div>
            </div>
            <div className="bg-[#0D3B66] p-6 rounded-lg border border-[#5BC0EB]/20 hover:border-[#5BC0EB] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5BC0EB]/20">
              <div className="text-[#5BC0EB] text-3xl md:text-2xl font-bold mb-2">Learning Everyday</div>
              <div className="text-gray-300 text-sm md:text-base">Exploring new frameworks, libraries, and best practices daily</div>
            </div>
            <div className="bg-[#0D3B66] p-6 rounded-lg border border-[#5BC0EB]/20 hover:border-[#5BC0EB] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5BC0EB]/20">
              <div className="text-[#5BC0EB] text-3xl md:text-2xl font-bold mb-2">Team Collaboration</div>
              <div className="text-gray-300 text-sm md:text-base">Contributing to software projects and collaborating with peers and mentors</div>
            </div>
            <div className="bg-[#0D3B66] p-6 rounded-lg border border-[#5BC0EB]/20 hover:border-[#5BC0EB] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5BC0EB]/20">
              <div className="text-[#5BC0EB] text-3xl md:text-2xl font-bold mb-2">Passionate Developer</div>
              <div className="text-gray-300 text-sm md:text-base">Focused on delivering high-quality, user-friendly web solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
