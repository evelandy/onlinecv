import equipflow from '../assets/equipflow.jpg';
import piperchat from '../assets/piperchat.jpg';
import gulfcoastcorgis from '../assets/gulfcoastcorgis.jpg';

export interface Project {
  title: string;
  kicker: string;
  body: string;
  image: { src: string; alt: string; caption: string; note: string };
  spec: Array<[label: string, value: string]>;
  links: Array<{ label: string; href: string }>;
}

const projects: Project[] = [
  {
    title: 'EquipFlow',
    kicker: 'Tubular equipment management for oil & gas',
    body: 'Real-time visibility into where every joint of pipe is, what state it’s in, and how hard it’s working. Interactive dashboards and analytics on a Node and PostgreSQL backend.',
    image: { src: equipflow, alt: 'EquipFlow dashboard showing equipment counts, a status trend chart and recent activity', caption: 'EquipFlow dashboard', note: 'AWS EC2 + RDS' },
    spec: [['Front', 'React, Material UI, Tailwind'], ['Back', 'Node, Express, Sequelize, PostgreSQL'], ['Infra', 'AWS EC2, RDS']],
    links: [{ label: 'Live site', href: 'https://equip-flow.wrgcv.com' }, { label: 'Source', href: 'https://github.com/evelandy/equip-flow' }],
  },
  {
    title: 'Piper Chat',
    kicker: 'Decentralized peer-to-peer messaging',
    body: 'Real-time chat where messages sync peer to peer through Gun.js, with a REST API and PostgreSQL behind it for accounts.',
    image: { src: piperchat, alt: 'Piper Chat conversation view in dark mode', caption: 'Piper Chat', note: 'Nginx + SSL' },
    spec: [['Front', 'React'], ['Back', 'Node, Express, Gun.js, PostgreSQL'], ['Infra', 'AWS EC2, Nginx, SSL']],
    links: [{ label: 'Live site', href: 'https://piper-chat.com/' }, { label: 'Source', href: 'https://github.com/evelandy/decentralized-p-2-p-chat-app' }],
  },
  {
    title: 'Gulf Coast Corgis',
    kicker: 'Breeder platform, v1 to v2',
    body: 'A breeder management site first built on WordPress with custom PHP modules on a dedicated Linux server. Version two is a ground-up full-stack React rebuild, launching this month.',
    // PLACEHOLDER: Using v1 screenshot and URL until I complete and relaunch v2 final domain is stil TBD (see PLACEHOLDERS.md)
    image: { src: gulfcoastcorgis, alt: 'Gulf Coast Corgis homepage, version one', caption: 'Gulf Coast Corgis, v1', note: 'v2 in progress' },
    spec: [['v1', 'WordPress, PHP, MySQL, Apache'], ['v2', 'React, full-stack']],
    links: [{ label: 'v1 site', href: 'https://gulfcoastcorgis.com/' }],
  },
];

export default projects;
