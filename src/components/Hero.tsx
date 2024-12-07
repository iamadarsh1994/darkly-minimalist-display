import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start max-w-3xl mx-auto px-4">
      <h2 className="text-primary mb-4 animate-fade-in">Hello, I'm</h2>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
        <span className="gradient-text">Your Name</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
        A passionate developer crafting beautiful digital experiences
      </p>
      <div className="flex gap-6 animate-fade-in" style={{ animationDelay: "600ms" }}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="mailto:your@email.com" className="text-gray-400 hover:text-primary transition-colors">
          <Mail size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;