import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'HireHube - Team Project',
      role: 'Full Stack Developer (Team Member)',
      period: '2025 - Present',
      description: 'Working on HireHube - a full-stack web application with a team. Building features using React.js, Node.js, Career Copilot (AI), collaborating on GitHub, and implementing real-world development practices.'
    },
    {
      id: 2,
      company: 'Self-Learning & Personal Projects',
      role: 'Full Stack Developer (Self-Taught)',
      period: '2024 - Present',
      description: 'Building real-world projects using MERN stack. Learning through hands-on development, online courses, and building portfolio projects. Completed 10+ projects.'
    },
    {
      id: 3,
      company: 'College Projects & Academics',
      role: 'Student Developer',
      period: '2021 - 2024',
      description: 'Pursued Diploma in Computer Science Engineering. Developed academic projects using modern web technologies. Built full-stack applications and learned software development fundamentals.'
    }
  ];

  return (
    <section id="experience" className="relative z-10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-8">My Journey</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ScrollAnimation
              key={exp.id}
              direction="up"
              duration={600}
              delay={index * 150}
              threshold={0.2}
            >
              <div className="glass-card rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-purple-400 text-sm font-medium">{exp.period}</span>
                </div>
                <p className="text-gray-400 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      <style>{`
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

export default Experience;