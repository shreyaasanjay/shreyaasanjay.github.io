export const experiences = [
  {
    company: 'Cornell Electric Vehicles',
    role: 'Telemetry Subteam Engineer',
    date: 'November 2025-Present' ,
   description: `\u2022 Built dashboards to visualize 10+ live sensor streams for vehicle diagnostics.
\u2022 Architected a ROS2 telemetry system over Starlink + Tailscale VPN, configuring FastDDS data transport to achieve 30 ms latency reading from a shared memory buffer and writing to a live subscriber database.
\u2022 Designed and built the team's first self-sustainable telemetry system, earning the Shell Eco-marathon Award.`,
  },



  {
    company: 'Center for Smart StreetScapes, WINLAB',
    role: 'Machine Learning Intern',
    date: 'May 2026-August 2026',
    description: `\u2022 Designed multi-agentic system answering live questions from a 4-camera smart space
    \u2022 Incorporated agent guardrails, a runtime monitor tracking agent communication channels and a thorough grounding eval system to get a 95% accuracy rate 
    \u2022 Implemented a PlusCal/TLA+ and TLC protocol to recursively fine tune topology`
  },
  {
    company: 'CerviCheck',
    role: 'Software Engineer',
    date: 'April 2026 - Present',
    description: `\u2022 Core software member of startup diagnosing pre-term birth from cervix deformation
    \u2022 Implemented live pressure plotting from an STM32 and pressure sensor 
    \u2022 Redesigned GUI for clinician use`,
  },
]

export const projects = [
  {
    id: 'new project',
    title: 'new project',
    category: 'Software + AI',
    description: 'Currently Building....',
    details: 'Currently Working On...',
    accent: 'ochre',
  },
  {
    id: 'cervicheck',
    title: 'new project',
    category: 'Application',
    description: 'Currently building...',
    details: 'xxxxxxxxx',
    accent: 'sage',
  },
  {
    id: 'bonassar-lab-gui',
    title: 'Bonassar Lab GUI',
    category: 'Research Tools',
    description: 'A graphical interface designed to support laboratory workflows.',
    details: 'Explain who used the interface, what workflow it improved, and which features you implemented.',
    accent: 'blue',
  },
  {
    id: 'nasa-sees',
    title: 'new project',
    category: 'new project',
    description: 'Research and software work completed through NASA SEES.',
    details: 'Describe the research question, the tools you used, and the most interesting result.',
    accent: 'red',
  },
]

export const skillGroups = [
  { label: 'Languages', items: ['Python, Java, JavaScript, HTML/CSS'] },
  { label: 'Frameworks', items: ['React', 'Vite', 'Add frameworks'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Docker'] },
]
