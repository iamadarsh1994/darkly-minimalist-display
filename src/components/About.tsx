import { Code, Globe, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 max-w-3xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8 gradient-text">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-lg bg-opacity-10 bg-primary hover:bg-opacity-20 transition-all">
          <Code className="text-primary mb-4" size={24} />
          <h3 className="font-semibold mb-2">Developer</h3>
          <p className="text-gray-400">Passionate about creating clean, efficient code and beautiful user experiences.</p>
        </div>
        <div className="p-6 rounded-lg bg-opacity-10 bg-primary hover:bg-opacity-20 transition-all">
          <Globe className="text-primary mb-4" size={24} />
          <h3 className="font-semibold mb-2">Creative</h3>
          <p className="text-gray-400">Combining technical skills with creative problem-solving to build innovative solutions.</p>
        </div>
        <div className="p-6 rounded-lg bg-opacity-10 bg-primary hover:bg-opacity-20 transition-all">
          <Briefcase className="text-primary mb-4" size={24} />
          <h3 className="font-semibold mb-2">Professional</h3>
          <p className="text-gray-400">Experienced in delivering high-quality projects and working in collaborative environments.</p>
        </div>
      </div>
    </section>
  );
};

export default About;