const mongoose = require('mongoose');
const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Experience = require('../models/Experience');

// ============================================
// YOUR DEFAULT PROJECTS
// ============================================
const defaultProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with payment integration.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: '🛒',
    link: '#'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with Kanban boards.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    image: '📋',
    link: '#'
  },
  {
    title: 'Portfolio Builder',
    description: 'Drag-and-drop portfolio builder for creatives.',
    tech: ['Next.js', 'TypeScript', 'Prisma'],
    image: '🎨',
    link: '#'
  }
];

// ============================================
// YOUR DEFAULT SKILLS
// ============================================
const defaultSkills = [
  {
    category: 'Frontend',
    skills: [
      'React.js', 'Next.js', 'TypeScript', 'JavaScript',
      'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap',
      'Redux', 'Framer Motion'
    ]
  },
  {
    category: 'Backend',
    skills: [
      'Node.js', 'Express.js', 'Python', 'Java',
      'REST APIs', 'GraphQL', 'Socket.io', 'JWT Authentication'
    ]
  },
  {
    category: 'Database',
    skills: [
      'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase',
      'Prisma', 'Mongoose'
    ]
  },
  {
    category: 'Tools & DevOps',
    skills: [
      'Git', 'GitHub', 'Docker', 'AWS',
      'Postman', 'VS Code', 'Linux', 'Vercel', 'Netlify'
    ]
  }
];

// ============================================
// YOUR DEFAULT EXPERIENCES
// ============================================
const defaultExperiences = [
  {
    company: 'HireHube - Team Project',
    role: 'Full Stack Developer',
    period: '2026 - Present',
    description: 'Working on HireHube - a full-stack web application with a team. Building features using React.js, Node.js, Career Copilot (AI), collaborating on GitHub, and implementing real-world development practices.'
  },
  {
    company: 'College Projects',
    role: 'Student Developer',
    period: '2025 - Present',
    description: 'Developing academic projects using modern web technologies. Building full-stack applications as part of curriculum and personal growth.'
  },
  {
    company: 'Self-Learning & Personal Projects',
    role: 'Full Stack Developer (Self-Taught)',
    period: '2024 - Present',
    description: 'Building real-world projects using MERN stack. Learning through hands-on development, online courses, and building portfolio projects.'
  }
];

// ============================================
// SEED FUNCTION
// ============================================
const seedDatabase = async () => {
  try {
    // Check if projects exist
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      console.log('📦 Seeding default projects...');
      await Project.insertMany(defaultProjects);
      console.log('✅ Default projects seeded!');
    }

    // Check if skills exist
    const skillCount = await Skill.countDocuments();
    if (skillCount === 0) {
      console.log('📦 Seeding default skills...');
      await Skill.insertMany(defaultSkills);
      console.log('✅ Default skills seeded!');
    }

    // Check if experiences exist
    const experienceCount = await Experience.countDocuments();
    if (experienceCount === 0) {
      console.log('📦 Seeding default experiences...');
      await Experience.insertMany(defaultExperiences);
      console.log('✅ Default experiences seeded!');
    }

  } catch (error) {
    console.error('❌ Seeding error:', error);
  }
};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    
    // Seed default data
    await seedDatabase();
    
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;