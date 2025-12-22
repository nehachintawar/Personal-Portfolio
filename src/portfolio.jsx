const header = {
  homepage: 'https://github.com/nehachintawar/Personal-Portfolio',
  title: 'Neha Chintawar',
};

const home = {
  name: 'Neha Chintawar',
  role: 'Frontend Engineer',
  resume: '/neha_chintawar_resume .pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/neha-chintawar-46a713228/',
    github: 'https://github.com/nehachintawar',
  },
};
const about = {
  picture: 'nehaImg.jpg',
  description:
    'I’m a MERN Stack Developer passionate about building clean, responsive, and user-friendly web applications. I enjoy turning ideas into full-stack projects and constantly improving my skills in React, Node.js, Express, and MongoDB.',
};

const projects = [
  {
    name: 'News Website',
    tagline: 'Admin dashboard for managing large-scale news content',
    description:
      'Built a responsive news management platform with role-based access, rich text editing, and optimized data tables for handling large volumes of articles efficiently.',
    highlights: [
      'Role-based access for Admin & Editors',
      'Rich text editor with media support',
      'Server-side search & pagination',
      'Optimized tables using TanStack',
    ],
    stack: [
      'JavaScript',
      'React',
      'Tailwind CSS',
      'shadcn/ui',
      'TanStack Table',
    ],
    sourceCode:
      'https://github.com/Mahi-Rathod/Hindtuva-Digital-Admin-FrontEnd',
  },
  {
    name: 'Trade Hub',
    tagline: 'Real-time trading & portfolio tracking platform',
    description:
      'Developed a full-stack trading dashboard that allows users to manage portfolios, track holdings, and view real-time market data in a clean, responsive interface.',
    highlights: [
      'Portfolio profit/loss tracking',
      'Real-time market data updates',
      'Holdings & transaction management',
      'Performance-optimized UI',
    ],
    stack: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/nehachintawar/TRADE-HUB',
  },
  {
    name: 'Task Management System',
    tagline: 'Lightweight productivity app for task tracking',
    description:
      'Created a simple and efficient task management system focused on clarity, speed, and usability for daily task tracking.',
    highlights: [
      'Task creation & status tracking',
      'Clean and minimal UI',
      'API-driven updates',
      'Fast and responsive experience',
    ],
    stack: ['JavaScript', 'React', 'Node.js'],
    sourceCode: 'https://github.com/nehachintawar/Task-Management-System',
  },
];

// const skills = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Node',
//   'Express',
//   'MongoDB',
//   'Material UI',
//   'Git',
// ];

const skills = [
  {
    category: 'Frontend',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Tailwind CSS',
      'Material UI',
    ],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    category: 'Tools & Workflow',
    items: ['Git', 'REST APIs', 'JWT Auth'],
  },
];

const contact = {
  email: 'nehachintawar59@gmail.com',
};

export { about, contact, header, home, projects, skills };
