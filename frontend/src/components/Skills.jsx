import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const allSkills = [
    // Frontend
    { name: 'HTML5', icon: '🌐', category: 'Frontend' },
    { name: 'CSS3', icon: '🎨', category: 'Frontend' },
    { name: 'JavaScript', icon: '⚡', category: 'Frontend' },
    
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Next.js', icon: '▲', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: '💨', category: 'Frontend' },
    // Backend
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'Express.js', icon: '🚀', category: 'Backend' },
    { name: 'MongoDB', icon: '🍃', category: 'Backend' },
    { name: 'MySQL', icon: '🐬', category: 'Backend' },
    { name: 'JWT', icon: '🔐', category: 'Backend' },
    { name: 'REST API', icon: '🔗', category: 'Backend' },
   
    // Languages
    { name: 'Java', icon: '☕', category: 'Languages' },
    { name: 'Python', icon: '🐍', category: 'Languages' },
    { name: 'C++', icon: '⚙️', category: 'Languages' },
        // Tools
    { name: 'Git', icon: '🔀', category: 'Tools' },
    { name: 'GitHub', icon: '🐙', category: 'Tools' },
        { name: 'VS Code', icon: '💻', category: 'Tools' },
     ];

  return (
    <section id="skills" className="relative z-10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-8">My Skills</h2>

        {/* Skills Grid - Each card wrapped with ScrollAnimation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {allSkills.map((skill, index) => (
            <ScrollAnimation
              key={skill.name}
              direction="up"
              duration={600}
              delay={index * 80}
              threshold={0.2}
            >
              <div
                className="glass-card rounded-2xl p-4 text-center hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer group"
                style={{
                  animation: `floatCard ${3 + index * 0.2}s ease-in-out infinite`,
                  animationDelay: `${index * 0.05}s`
                }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                  {skill.icon}
                </div>
                <span className={`text-xs font-medium transition-all duration-300 ${
                  hoveredSkill === skill.name ? 'text-purple-400' : 'text-gray-400'
                }`}>
                  {skill.name}
                </span>
                <div className="text-[8px] text-gray-600 mt-1">{skill.category}</div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 glass-card rounded-2xl p-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">2</div>
            <div className="text-[10px] text-gray-500">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">-</div>
            <div className="text-[10px] text-gray-500">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">-</div>
            <div className="text-[10px] text-gray-500">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">200</div>
            <div className="text-[10px] text-gray-500">Cups of Coffee</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">5</div>
            <div className="text-[10px] text-gray-500">Technologies Mastered</div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs mt-4 opacity-60">
          Hover on any skill to see more ✨
        </div>
      </div>

      <style>{`
        @keyframes floatCard {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-8px); 
          }
        }

        .glass-card {
          background: rgba(17, 17, 17, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .glass-card:hover {
          border-color: rgba(139, 92, 246, 0.2);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Skills;