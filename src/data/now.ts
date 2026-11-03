export interface NowEntry {
  id: string;
  fig: string;
  state: string;
  when: string;
  title: string;
  subtitle?: string;
  body: string;
  link?: { label: string; href: string };
  stack?: string[];
}

// PLACEHOLDER: "Tally" is a working name for the OCTG agent. I will update the name once I come to a conclusion on it. (see PLACEHOLDERS.md)
export const agent = {
  name: 'Tally',
  subtitle: 'working title',
  fig: 'Fig. 1.1',
  state: 'In progress',
  when: 'Target: late Nov 2026',
  progress: 40,
  body: 'An agentic AI assistant for the OCTG industry, built from the ground up. Ask it about tubular inventory in plain English. It reasons with Claude, calls typed and validated tools against a live PostgreSQL inventory, and answers with real numbers.',
  flow: [
    'A question comes in, in plain English',
    'Claude plans and picks a tool, such as searchInventory()',
    'Zod validates the arguments before anything touches the database',
    'Sequelize queries PostgreSQL and the result returns to the model',
    'A cited answer comes back in plain English',
  ],
  stack: ['TypeScript', 'Node', 'Anthropic SDK', 'Tool use', 'Zod', 'PostgreSQL', 'Sequelize', 'Docker', 'Mocha'],
};

// PLACEHOLDER: illustrated transcript in place of a real screenshot and screen recording
export const agentDemo = {
  question: 'How much 5½″ P110 do we have at the Odessa yard?',
  steps: [
    { kind: 'call', text: 'searchInventory({ od: "5.500", grade: "P110", yard: "Odessa" })' },
    { kind: 'result', text: '3 lots · 412 joints · 17,840 ft' },
    { kind: 'call', text: 'getLotStatus({ lots: ["A-118", "A-121", "B-007"] })' },
    { kind: 'result', text: '2 inspected · 1 awaiting inspection' },
  ],
  answer: 'You have 412 joints of 5½″ P110 at Odessa across three lots, about 17,840 ft. Lots A-118 and A-121 are inspected and ready to ship; B-007 is still awaiting inspection.',
};

export const nowEntries: NowEntry[] = [
  {
    id: 'grdev',
    fig: 'Fig. 1.2',
    state: 'Live',
    when: 'Est. 2018 · relaunched 2026',
    title: 'GrDev',
    body: 'My software studio, back in business. Web design and development, AI development, maintenance, and migrations, from one engineer who owns the whole stack.',
    link: { label: 'grdev-us.com', href: 'https://www.grdev-us.com' },
  },
  {
    id: 'corgis',
    fig: 'Fig. 1.3',
    state: 'Rebuilding',
    when: 'Launch: Nov 2026',
    title: 'Gulf Coast Corgis v2',
    body: 'Rebuilding the breeder site I first shipped on WordPress as a full-stack React app.',
    stack: ['React', 'Full-stack', 'v1: WordPress, PHP'],
  },
];
