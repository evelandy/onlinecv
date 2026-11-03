export interface Job {
  company: string;
  title: string;
  years: string;
  highlights: string[];
  stack: string[];
}

const experience: Job[] = [
  {
    company: 'GrDev',
    title: 'Founder & Principal Engineer',
    years: '2018 – now',
    // PLACEHOLDER: swap in specific client work once there's more to show (see PLACEHOLDERS.md)
    highlights: [
      'Relaunched in 2026 as a full-service studio: web design and development, AI development, maintenance, and migrations.',
      'Building Tally, an agentic AI assistant for the OCTG industry, on Claude and PostgreSQL.',
    ],
    stack: ['TypeScript', 'React', 'Node', 'Anthropic SDK', 'PostgreSQL', 'AWS'],
  },
  {
    company: 'AscendSC',
    title: 'Full-Stack Software Developer',
    years: '2023 – 2026',
    highlights: [
      'Built a mill packing-list upload feeding a mill-agnostic data pipeline, which cut manual handling and improved data integrity across the OCTG supply chain.',
      'Shipped an asset upload flow for .xls, .xlsx and .csv files that sped up data ingestion for supply-chain teams.',
      'Added bulk deletion to the mobile app’s task landing page for field operators.',
    ],
    stack: ['React', 'TypeScript', 'Node', 'GraphQL', 'Apollo', 'PostgreSQL', 'Kotlin', 'Azure'],
  },
  {
    company: 'Gretrix',
    title: 'Full-Stack Web Developer',
    years: '2021 – 2023',
    highlights: [
      'Solved analytics, web, and infrastructure problems across a roster of client accounts.',
      'Designed custom A/B tests in Google Optimize that lifted one client’s annual revenue by 1%.',
      'Automated server tasks that kept client data flowing to custom front ends with less downtime.',
    ],
    stack: ['React', 'Angular', 'Python', 'Flask', 'PHP', 'Laravel', 'AWS', 'GCP'],
  },
  {
    company: 'Halliburton',
    title: 'Application Developer',
    years: '2022',
    highlights: [
      'Modernized a legacy codebase with product, QA, and senior engineers: bug fixes, new features, and data migrations.',
      'Wrote scripts that migrated jobs and large tables across infrastructure.',
    ],
    stack: ['TypeScript', 'XML', 'MySQL', 'Azure'],
  },
  {
    company: 'Look Far Labs',
    title: 'React Developer',
    years: '2021 – 2022',
    highlights: [
      'Built interactive data tables for a client’s custom CMS in TypeScript, React, Formik and Tailwind.',
      'Delivered responsive, mobile-first features to strict design specs.',
    ],
    stack: ['React', 'TypeScript', 'Formik', 'Tailwind', 'Laravel'],
  },
  {
    company: 'PRT-Solutions',
    title: 'Full-Stack Developer',
    years: '2020 – 2021',
    highlights: ['Built a cross-platform iOS and Android app in React Native on a Python REST API.'],
    stack: ['React Native', 'Python', 'Flask', 'SQLAlchemy'],
  },
  {
    company: 'Amity Social',
    title: 'Full-Stack Developer',
    years: '2019 – 2020',
    highlights: ['Took the app from design files to an investor-ready MVP, with real-time chat on socket.io.'],
    stack: ['React', 'React Native', 'Python', 'Socket.io'],
  },
];

export default experience;
