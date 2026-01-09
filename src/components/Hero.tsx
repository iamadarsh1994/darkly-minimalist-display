// import { Toast, ToastProvider } from "@radix-ui/react-toast";
import { FileText, Globe, FolderOpen, BookOpen, ExternalLink, Github, Linkedin, Twitter, Coffee, BookHeadphones, LinkIcon, Link2, File, Backpack, } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const toggleHover = () => setIsHovered(!isHovered);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center md:items-start max-w-3xl mx-auto px-4">
      <h2 className="text-[#1ba5ef] font-mono font-bold mb-4 animate-fade-in">Hello, I'm</h2>
      <h1
        className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in"
        style={{ animationDelay: "200ms" }}
      >
        <span className="text-[#1ba5ef]">Adarsh</span>
      </h1>
      <p
        className="text-lg md:text-xl text-gray-400 mb-8 animate-fade-in text-center md:text-left"
        style={{ animationDelay: "400ms" }}
      >
        A passionate developer crafting beautiful digital experiences
      </p>
      <div
        className="grid grid-cols-3 gap-4 md:grid-cols-3 lg:flex lg:gap-6 justify-center items-center animate-fade-in"
        style={{ animationDelay: "600ms" }}
      >
        <a
          href="https://drive.google.com/file/d/1LkaUgyvrY6oO26a4yivp9WUd7XlcOWh2/view?usp=drive_link"
          className="text-gray-400 hover:text-primary transition-colors"
          title="Resume"
        >
          <FileText size={24} />
        </a>
        <a
          href="https://x.com/helloadarshh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-primary transition-colors"
          title="X.com"
        >
          <Twitter size={24} />
        </a>
        <a
          href="https://github.com/iamadarsh1994"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-primary transition-colors"
          title="GitHub"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/adarsh-mishra-451426393/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-primary transition-colors"
          title="LinkedIn"
        >
          <Linkedin size={24} />
        </a>

        <div
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          className="text-gray-400 relative"
          title="Projects"
        >
          <FolderOpen size={24} />
          {isHovered && (
            <ul className="absolute bg-white shadow-md rounded z-10">
              <li className="mb-1">
                <Link
                  to="https://for-test-beta.vercel.app/"
                  className="hover:text-primary transition-colors flex items-center"
                  title="Project-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link2 size={24} className="mr-2" />
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="https://jokes-1.onrender.com/"
                  className="hover:text-primary transition-colors flex items-center"
                  title="Project-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link2 size={24} className="" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://minitales.shop"
                  className="hover:text-primary transition-colors flex items-center"
                  title="Project-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link2 size={24} className="mr-2" />
                </Link>
              </li>
            </ul>
          )}
        </div>

        <a
          href="https://dev.to/adarsh_mishra"
          className="text-gray-400 hover:text-primary transition-colors"
          title="Dev.to Blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BookOpen size={24} />
        </a>

        <a
          href="https://www.fiverr.com/adarshmishra186"
          className="text-gray-400 hover:text-primary transition-colors"
          title="Hire me-Fiverr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={24} />
        </a>

        <a
          href="https://buymeacoffee.com/adarsh.m"
          className="text-gray-400 hover:text-primary transition-colors"
          title="Buy Me Coffee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Coffee size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
