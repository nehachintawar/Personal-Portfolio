const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/nehachintawar/Personal-Portfolio',
  title: 'NC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Neha Chintawar',
  role: 'MERN Stack Fresher',
  picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
  'I’m a MERN Stack Developer passionate about building clean, responsive, and user-friendly web applications. I enjoy turning ideas into full-stack projects and constantly improving my skills in React, Node.js, Express, and MongoDB.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/neha-chintawar-46a713228/',
    github: 'https://github.com/nehachintawar',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'News Website',
    description:
    'To provide a user-friendly platform for browsing and managing news articles with a clean, responsive design.',
    stack: ['Javascript', 'React', 'Tailwindcss', 'Shandcn', 'Tanstack'],
    sourceCode: 'https://github.com/Mahi-Rathod/Hindtuva-Digital-Admin-FrontEnd',
   // image: 'cleanfolio.png',
  },
  {
    name: 'Trade Hub',
    description:
    'To create a full-featured trading platform that allows users to track portfolios, manage holdings, and view real-time market data in a responsive and intuitive interface.',
    stack: ['Javascript', 'React', 'Node', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/nehachintawar/TRADE-HUB',
   // image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
  {
    name: 'Task Management System',
    description:
    'To provide users with a centralized platform to create, track, and manage tasks efficiently, enhancing productivity through an organized and intuitive interface.',
    stack: ['Javascript', 'React', 'Node'],
    sourceCode: 'https://github.com/nehachintawar/Task-Management-System',

  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node',
  'Express',
  'MongoDB',
  'Material UI',
  'Git',

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nehachintawar59@gmail.com',
}

export { header, about, projects, skills, contact }