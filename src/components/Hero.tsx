import { FileText, Globe, FolderOpen, BookOpen, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start max-w-3xl mx-auto px-4">
      <h2 className="text-primary mb-4 animate-fade-in">Hello, I'm</h2>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
        <span className="text-[#9b87f5]">Your Name</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
        A passionate developer crafting beautiful digital experiences
      </p>
      <div className="flex gap-6 animate-fade-in" style={{ animationDelay: "600ms" }}>
        <a href="/resume" className="text-gray-400 hover:text-primary transition-colors" title="Resume">
          <FileText size={24} />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" title="X.com">
          <ExternalLink size={24} />
        </a>
        <a href="/projects" className="text-gray-400 hover:text-primary transition-colors" title="Projects">
          <FolderOpen size={24} />
        </a>
        <a href="/" className="text-gray-400 hover:text-primary transition-colors" title="My Site">
          <Globe size={24} />
        </a>
        <a href="/blog" className="text-gray-400 hover:text-primary transition-colors" title="Blog">
          <BookOpen size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;