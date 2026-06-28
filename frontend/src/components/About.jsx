import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative z-10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-2">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              B.Tech CSE Student | Full Stack Developer
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a passionate B.Tech CSE student with a strong interest in 
              full stack web development. I love building projects that solve 
              real problems and continuously expanding my technical skills.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Currently learning and building with MERN stack. I believe in 
              learning by doing and have completed multiple projects to sharpen 
              my skills. Looking for opportunities to contribute and grow 
              as a developer.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <h4 className="text-white font-semibold mb-4">Quick Overview</h4>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">🎓 Education</span>
                <span className="text-white text-sm text-right">
                  Diploma (2021-2024)<br />
                  B.Tech CSE (Pursuing)
                </span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">💻 Projects</span>
                <span className="text-white">2 Completed</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">📚 Learning</span>
                <span className="text-white">Full Stack (MERN)</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">📍 Location</span>
                <span className="text-white">India</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">🎯 Goal</span>
                <span className="text-green-400">Software Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;