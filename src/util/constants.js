export const SKILLS = {
  languages: [
    'C++/C',
    'Python',
    'Java',
    'JavaScript (React and NodeJS)',
    'C#',
    'HTML',
    'CSS',
    'R',
    'MatLab'
  ],
  technologies: [
    'Git',
    'Linux',
    'SQL Databases',
    '.NET Framework',
    'API Design',
    'AWS',
    'Jupyter Notebook'
  ]
};

export const EXPERIENCE = [
  {
    title: 'Software Engineer',
    company: 'BNY',
    location: 'Pittsburgh, PA',
    period: 'August 2024 - Present',
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
    achievements: [
      'Researched Agritech and defined six sub-sectors to categorize the industry for the IVC database',
      'Implemented a natural language processing algorithm to accurately categorize 800+ Agritech companies into the correct sub-sector to optimize database management'
    ]
  }
];

export const EDUCATION = [
  {
    degree: 'B.S.E. Computer Science',
    institution: 'University of Michigan – Ann Arbor',
    location: 'Ann Arbor, MI',
    period: 'Graduated – May 2024',
    details: [
      'Minor: Mathematics & International Minor for Engineers',
      'GPA: 3.65 (Dean\'s List 2020-2023)',
      'Relevant Coursework: Web Systems (EECS 485), Machine Learning (EECS 445), Data Structures & Algorithms (EECS 281), Computer Security (EECS 388), Software Engineering (EECS 481), Database Management (EECS 484), Computer Organization (EECS 370), Linear Algebra (MATH 214), Finance Mathematics (MATH 423), Calculus III (MATH 215)',
      'Activities & Societies: Wolverine Blockchain, Mensa Society, Maimonides Scholar, Alpha Epsilon Pi Fraternity'
    ]
  }
];

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
  }
]; 