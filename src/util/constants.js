export const EXPERIENCE = [
  {
    title: 'Software Engineer',
    company: 'Evertune AI',
    location: 'New York, NY',
    period: 'August 2025 - Present',
    skills: [
      { name: 'JavaScript', category: 'Languages' },
      { name: 'Vue.js', category: 'Frontend' },
      { name: 'Python', category: 'Backend' },
      { name: 'Google Cloud Platform', category: 'DevOps' }
    ],
    achievements: [
    ]
  },
  {
    title: 'Software Engineer',
    company: 'BNY',
    location: 'Pittsburgh, PA',
    period: 'August 2024 - August 2025',
    skills: [
      { name: 'Java', category: 'Languages' },
      { name: 'Angular', category: 'Frontend' },
      { name: 'Spring Boot', category: 'Backend' },
      { name: 'JUnit', category: 'DevOps' },
      { name: 'Mockito', category: 'DevOps' }
    ],
    achievements: [
      'Full stack developer for Private Wealth Management Online Platform in Java Spring Boot and Angular',
      'Developed functionality for opening Insured Cash Sweep (ICS) accounts and enabled users to manage custom transaction categories',
      'Achieved 80%+ coverage on all new code developed by writing unit tests using JUnit and Mockito'
    ]
  },
  {
    title: 'Chief Technology Officer',
    company: 'Resolute Senior Advocates (Startup)',
    location: 'Remote',
    period: 'January 2025 - Present',
    skills: [
      { name: 'JavaScript', category: 'Languages' },
      { name: 'React', category: 'Frontend' },
      { name: 'CSS', category: 'Frontend' },
      { name: 'HTML', category: 'Frontend' },
      { name: 'Domain Management', category: 'DevOps' }
    ],
    achievements: [
      'Developed a responsive website for a startup using React, implementing extensive CSS styling to enhance UI/UX',
      'Successfully launched a custom domain (rsaus.com), established company emails, and created a company LinkedIn page to drive client acquisition enhancing the startup\'s online presence'
    ]
  },
  {
    title: 'Software Engineering Intern',
    company: 'Congruex',
    location: 'Boulder, CO',
    period: 'May 2023 - July 2023',
    skills: [
      { name: 'C#', category: 'Languages' },
      { name: 'React', category: 'Frontend' },
      { name: 'Redux', category: 'Frontend' },
      { name: 'ASP.NET', category: 'Backend' },
      { name: 'SQL', category: 'Backend' },
      { name: 'Azure', category: 'DevOps' }
    ],
    achievements: [
      'Built a full stack responsive Company-Wide Intranet web application using React and Redux incorporating advanced react-router navigation and state management strategies',
      'Implemented a tailored database schema on a SQL server, aligning with the precise demands of the application',
      'Executed RESTful API calls through C# and ASP .NET Entity Framework, seamlessly integrating essential HTTP methods',
      'Established user authorization using Azure services, ensuring secure access and user management in the application'
    ]
  },
  {
    title: 'Software Engineering & Information Specialist Intern',
    company: 'IVC Data and Insights',
    location: 'Tel Aviv, Israel',
    period: 'June 2022 - August 2022',
    skills: [
      { name: 'Python', category: 'Languages' },
      { name: 'Natural Language Processing', category: 'Backend' },
      { name: 'Data Analysis', category: 'Backend' },
      { name: 'Database Management', category: 'Backend' }
    ],
    achievements: [
      'Implemented a natural language processing algorithm to accurately categorize 800+ Agritech companies into the correct sub-sector to optimize database management'
    ]
  }
];

export const COLLEGE = {
  degree: 'B.S.E. Computer Science',
  institution: 'University of Michigan – Ann Arbor',
  location: 'Ann Arbor, MI',
  minors: [
    'Mathematics',
    'International Minor for Engineers'
  ],
  academicAchievement: [
    'GPA: 3.7',
    'Dean\'s List 2020-2023',
    'Graduated Magna Cum Laude'
  ],
  coursework: [
    { name: 'Web Systems', code: 'EECS 485' },
    { name: 'Machine Learning', code: 'EECS 445' },
    { name: 'Data Structures & Algorithms', code: 'EECS 281' },
    { name: 'Computer Security', code: 'EECS 388' },
    { name: 'Software Engineering', code: 'EECS 481' },
    { name: 'Database Management', code: 'EECS 484' },
    { name: 'Computer Organization', code: 'EECS 370' },
    { name: 'Linear Algebra', code: 'MATH 214' },
    { name: 'Finance Mathematics', code: 'MATH 423' },
    { name: 'Calculus III', code: 'MATH 215' }
  ],
  activities: [
    'Wolverine Blockchain',
    'Mensa Society',
    'Maimonides Scholar',
    'Alpha Epsilon Pi Fraternity'
  ]
};

// Can add github links and demo links to projects
export const PROJECTS = [
  {
    title: 'Server-Side & Client-Side Dynamic Pages Site Generator',
    technologies: ['Python', 'HTML', 'CSS', 'SQL'],
    date: 'September 2022',
    description: [
      'Created an Instagram clone by rendering HTML templates and SQL databases on-demand using server-side dynamic pages and client-side dynamic pages, JavaScript programming, asynchronous programming (AJAX), and REST APIs',
      'Deployed web app to AWS IaaS by creating EC2 instance and used Gunicorn and Nginx to configure the pages server'
    ]
  },
  {
    title: 'MapReduce & Search Server',
    technologies: ['Python'],
    date: 'November 2022',
    description: [
      'Implemented Google\'s MapReduce framework with distributed processing on cluster of computers and wrote Python package that includes manager & worker modules, using fault tolerance, OS-provided concurrency facilities, and TCP/UDP sockets',
      'Built a scalable search engine through a segmented inverted index of web pages and REST API app using text/link analysis and parallel data processing with MapReduce and Service-Oriented Architecture to scale dynamic pages'
    ]
  },
  {
    title: 'Machine Learning',
    technologies: ['C++'],
    date: 'April 2021',
    description: [
      'Developed a program that uses natural language processing and machine learning techniques to automatically identify the subject of posts from the class\'s forum-type discussion platform platform utilizing recursion and Bag of Words Model'
    ]
  },
];

export const TECH_STACK = {
  languages: {
    title: 'Languages',
    items: ['JavaScript', 'Python', 'C++', 'C', 'C#', 'Java', 'HTML/CSS'],
    description: 'Proficient in multiple programming languages with a focus on modern web development and data analysis.'
  },
  frontend: {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Vue.js'],
    description: 'Built responsive, type-safe React applications with modern state management and smooth animations.'
  },
  backend: {
    title: 'Backend & Data',
    items: ['FastAPI', 'Node.js', 'PostgreSQL', 'Jupyter Notebook', '.NET Framework'],
    description: 'Developed robust backend systems, APIs, and data solutions with modern frameworks and databases.'
  },
  devops: {
    title: 'DevOps & Tools',
    items: ['Git', 'Linux', 'AWS', 'Docker', 'VS Code', 'IntelliJ'],
    description: 'Managed infrastructure, deployments, and development workflows with modern DevOps practices.'
  }
};