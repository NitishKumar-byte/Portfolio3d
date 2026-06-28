import React, { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with payment integration, user authentication, and admin dashboard.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      link: 'https://github.com/yourusername/ecommerce'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with Kanban boards, team workspaces, and real-time updates.',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'Socket.io'],
      image: '📋',
      link: 'https://github.com/yourusername/taskmanager'
    },
    {
      id: 3,
      title: 'Portfolio Builder',
      description: 'Drag-and-drop portfolio builder for creatives with customizable templates and analytics.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      image: '🎨',
      link: 'https://github.com/yourusername/portfoliobuilder'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with interactive maps, 7-day forecast, and weather alerts.',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      image: '🌤️',
      link: 'https://github.com/yourusername/weatherdashboard'
    }
  ];

  return (
    <section id="projects" className="relative z-10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-8">Projects</h2>

        {/* Projects Grid - 4 Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative glass-card rounded-2xl p-5 hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer group"
              style={{
                animation: `floatCard ${3 + index * 0.3}s ease-in-out infinite`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Card Content */}
              <div className="text-3xl mb-2">{project.image}</div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-[9px] bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded-full border border-purple-500/10">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-[9px] text-gray-500">+{project.tech.length - 3}</span>
                )}
              </div>
              <div className="mt-3 text-[10px] text-purple-400/30 group-hover:text-purple-400 transition-all duration-300 flex items-center gap-1">
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Hover for details</span>
              </div>

              {/* Hover Details - Shows on hover */}
              {hoveredProject === project.id && (
                <div className="absolute inset-0 glass-card rounded-2xl p-5 flex flex-col justify-center items-center z-10 animate-fadeIn">
                  <div className="text-3xl mb-2">{project.image}</div>
                  <h3 className="text-lg font-bold text-white mb-1 text-center">{project.title}</h3>
                  <p className="text-gray-300 text-xs text-center leading-relaxed mb-3 line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center mb-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-[9px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full border border-purple-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && project.link !== '#' && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 text-xs transition-all duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      🔗 View Project →
                    </a>
                  )}
                  <span className="text-[10px] text-gray-500 mt-2">Hover out to close</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Projects;