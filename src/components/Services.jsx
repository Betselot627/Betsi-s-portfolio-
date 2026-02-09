import { useState, useEffect, useRef } from "react";

function Services() {
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

  const services = [
    {
      title: "Frontend Development",
      description:
        "Creating beautiful, interactive user interfaces with modern frameworks like React, ensuring pixel-perfect designs and smooth user experiences.",
      icon: "💻",
    },
    {
      title: "Backend Development",
      description:
        "Building robust server-side applications with PHP and MySQL, handling data management, authentication, and business logic efficiently.",
      icon: "⚙️",
    },
    {
      title: "Website Design",
      description:
        "Designing visually appealing and user-friendly websites that align with your brand identity and engage your target audience.",
      icon: "🎨",
    },
    {
      title: "Responsive Website Development",
      description:
        "Developing websites that work flawlessly across all devices - desktops, tablets, and mobile phones with optimal performance.",
      icon: "📱",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-[#0D3B66]" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          My <span className="text-[#5BC0EB]">Services</span>
        </h2>
        <p
          className={`text-center text-gray-300 mb-12 text-lg transition-all duration-1000 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          What I can do for you
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-[#0a2744] p-8 rounded-lg border border-[#5BC0EB]/20 hover:border-[#5BC0EB] transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#5BC0EB]/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-xl text-gray-300 mb-6">
            Ready to start your project?
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#5BC0EB] text-[#0D3B66] px-8 py-3 rounded-lg font-semibold hover:bg-[#4AA8D8] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
