export const resume = {
  name: 'Shadwal Sinha',
  title: 'Full Stack Developer',
  location: 'Bengaluru, India',
  email: 'mailtoshadwal@gmail.com',
  phone: '+91-7398174577',
  phoneHref: 'tel:+917398174577',
  linkedin: 'https://linkedin.com/in/imshadwal',
  linkedinLabel: 'linkedin.com/in/imshadwal',
  resumePdf: '/ShadwalSinha.pdf',
  heroSupport:
    'Building scalable web apps and backend systems across frontend, API, and data layers.',
  summaryShort:
    'Full Stack Developer with 4+ years building scalable web applications and backend systems for enterprise products. Hands-on across React, NestJS, TypeScript, Couchbase, BigQuery, and Apache Airflow—from responsive dashboards to REST APIs and ETL pipelines. Product Analyst background helps translate business requirements into reliable full stack solutions.',
  summary:
    'Full Stack Developer with 4+ years of experience building scalable web applications and backend systems for enterprise products. Proficient in React.js, Node.js, NestJS, TypeScript, JavaScript, Couchbase (N1QL), Google BigQuery, Google Cloud Storage (GCS), and Apache Airflow, with hands-on work on RESTful APIs, ETL data pipelines, SQL and NoSQL query optimization, and responsive web dashboards. Background as a Product Analyst supports translating business requirements into reliable full stack solutions across frontend, API, and data layers.',
  pillars: [
    {
      id: 'frontend',
      title: 'Frontend',
      line: 'React and Angular UIs with reusable components, responsive dashboards, and client-side data fetching.',
    },
    {
      id: 'apis',
      title: 'APIs',
      line: 'NestJS REST APIs with filters, pagination, N1QL queries, and production-minded index design.',
    },
    {
      id: 'data',
      title: 'Data & Cloud',
      line: 'Airflow DAGs, BigQuery → GCS → Couchbase ETL, batch upserts, and GCP-backed data workflows.',
    },
  ],
  experience: [
    {
      id: 'napses',
      role: 'Full Stack Developer',
      company: 'Napses Technologies (MVP Rockets)',
      period: '2025 – Present',
      bullets: [
        'Built and maintained Apache Airflow DAGs processing large-scale data workflows from Google BigQuery to Google Cloud Storage and Couchbase, implementing batched upserts and safe delete strategies for improved data integrity.',
        'Developed NestJS REST APIs and N1QL queries for application features, including lookup-driven dynamic queries, filters, and pagination.',
        'Designed Couchbase secondary indexes and resolved production query timeouts by aligning index keys with application filter and access patterns.',
        'Delivered React.js user interfaces with reusable components, client-side data fetching, and responsive dashboards using Tailwind CSS.',
        'Collaborated with cross-functional teams to deliver features from requirements through QA and production release.',
      ],
    },
    {
      id: 'globallogic',
      role: 'Senior Software Engineer',
      company: 'GlobalLogic',
      period: '2022 – 2025',
      bullets: [
        'Developed and maintained a requirements and test management platform as a Jira alternative.',
        'Led front-end development for multiple customer-facing applications using Angular, delivering clean, user-friendly interfaces that improved user engagement metrics by 20%.',
        'Built a drag-and-drop Kanban-style planning board to help users manage tasks across custom workflow stages.',
        'Improved application performance and resolved bugs, resulting in an enhanced user experience for over 10,000 active users.',
      ],
    },
  ],
  skillGroups: [
    {
      id: 'languages',
      label: 'Languages',
      icon: 'code' as const,
      skills: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS'],
    },
    {
      id: 'frontend',
      label: 'Frontend',
      icon: 'layout' as const,
      skills: [
        'React.js',
        'Angular',
        'Redux',
        'NgRx',
        'Tailwind CSS',
        'TanStack React Query',
        'React Hook Form',
        'Zod',
        'Vite',
        'Material UI',
        'Bootstrap',
        'Storybook',
        'Jest',
        'React Testing Library',
      ],
    },
    {
      id: 'backend',
      label: 'Backend',
      icon: 'server' as const,
      skills: [
        'Node.js',
        'NestJS',
        'RESTful APIs',
        'Swagger/OpenAPI',
        'Passport.js (JWT/OAuth)',
        'class-validator',
        'Internationalization (i18n)',
      ],
    },
    {
      id: 'databases',
      label: 'Databases',
      icon: 'database' as const,
      skills: ['PostgreSQL', 'Couchbase', 'Google BigQuery', 'NoSQL'],
    },
    {
      id: 'data',
      label: 'Data Engineering',
      icon: 'workflow' as const,
      skills: [
        'Apache Airflow',
        'ETL Pipelines',
        'Data Integration',
        'BigQuery → GCS → Couchbase ETL',
        'Batch Upserts',
        'Sync Metadata',
      ],
    },
    {
      id: 'cloud',
      label: 'Cloud & DevOps',
      icon: 'cloud' as const,
      skills: [
        'Google Cloud Platform (GCP)',
        'Google Cloud Storage',
        'Docker',
        'Docker Compose',
      ],
    },
    {
      id: 'tools',
      label: 'Tools',
      icon: 'wrench' as const,
      skills: [
        'Git',
        'GitHub',
        'Bitbucket',
        'Jira',
        'GitHub Copilot',
        'Cursor',
        'Visual Studio Code',
      ],
    },
  ],
  education: {
    degree: 'Bachelor of Technology (B.Tech)',
    school: 'ABES Engineering College, Ghaziabad, India',
    period: '2018 – 2022',
  },
  achievements: {
    title: 'The Untold Phrase',
    instagram: 'https://instagram.com/theuntoldphrase',
    summary:
      'Built a writing platform and community for writers worldwide to share write-ups—micro tales, poetry, and stories—through The Untold Phrase.',
    stats: [
      { value: '115K+', label: 'Instagram followers' },
      { value: '150+', label: 'Writers worldwide' },
    ],
    highlights: [
      'Partnered with OYO Hotels and Rooms',
      'Partnered with PVR Pictures',
      'Working with 150+ writers all over the world',
      'Managed Facebook and Instagram pages across niches, including cricket media',
    ],
    publications: [
      {
        title: 'Distant Hearts',
        note: 'A collaborative literary work exploring emotion, distance, and storytelling.',
      },
      {
        title: 'Scribblers With Emotion',
        note: 'Poetry anthology published with Split Poetry India (2020).',
      },
    ],
  },
} as const

export type Resume = typeof resume
export type SkillIconId = (typeof resume.skillGroups)[number]['icon']

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
] as const
