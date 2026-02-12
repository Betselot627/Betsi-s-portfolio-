import { useState, useEffect } from "react";
import profilePhoto from "../photo/logo1.png";


function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div
          className={`space-y-6 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Betselot Tigistu
          </h1>
          <h2 className="text-3xl md:text-4xl text-[#5BC0EB] font-semibold">
            Web Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Building responsive and user-friendly websites with modern
            technologies and clean code
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-[#5BC0EB] cursor-pointer text-[#0D3B66] px-8 py-3 rounded-lg font-semibold hover:bg-[#4AA8D8] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 cursor-pointer border-[#5BC0EB] text-[#5BC0EB] px-8 py-3 rounded-lg font-semibold hover:bg-[#5BC0EB] hover:text-[#0D3B66] transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side - Photo */}
        <div
          className={`flex justify-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative group">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#5BC0EB] to-[#0D3B66] p-1 shadow-2xl shadow-[#5BC0EB]/30 group-hover:shadow-[#5BC0EB]/50 transition-all duration-500">
              <div className="w-full h-full rounded-full bg-[#0D3B66] flex items-center justify-center overflow-hidden">
                {/* Replace the src below with your actual photo path */}
                { <img src={profilePhoto} alt="Betselot Tigistu" className="w-full h-full object-cover" /> }

                {/* Placeholder - Remove this div when adding your photo */}
                <div className="w-full h-full bg-gradient-to-br from-[#1a5280] to-[#0D3B66] flex items-center justify-center">
                 
                </div>
              </div>
            </div>
            {/* Decorative elements with animation */}
            <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-[#5BC0EB] rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div
              className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-[#5BC0EB] rounded-full opacity-20 blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
