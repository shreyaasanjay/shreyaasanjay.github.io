export const experiences = [
  {
    company: 'Cornell Electric Vehicles',
    role: 'Telemetry Subteam Engineer',
    date: 'November 2025-Present' ,
   description: `\u2022 Built dashboards to visualize 10+ live sensor streams for vehicle diagnostics.
\u2022 Architected a ROS2 telemetry system over Starlink + Tailscale VPN, configuring FastDDS data transport to achieve 30 ms latency reading from a shared memory buffer and writing to a live subscriber database.
\u2022 Designed and built the team's first self-sustainable telemetry system, earning the Shell Eco-marathon Award.`,
  },


//to get a 95% accuracy
  {
    company: 'Center for Smart StreetScapes, WINLAB',
    role: 'Machine Learning Intern',
    date: 'May 2026-August 2026',
    description: `\u2022 Designed multi-agentic system answering live questions from a 4-camera smart space
    \u2022 Incorporated agent guardrails, a runtime monitor tracking agent communication channels and a thorough grounding eval system  
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
    id: 'cervicheck',
    title: 'CerviCheck Device',
    category: 'Software + AI',
    description: 'Software for GUI and STM32 Pressure Board',
    details: 'A device designed to help predict pre-term birth using cervix deformation.',
    problem: 'Create clinician-friendly software that can interpret pressure-sensor data from the CerviCheck device in real time.',
    process: `• Built the GUI for clinicians.
• Connected the STM32 pressure board.
• Implemented live pressure plotting.
• Packaged the application for clinician use.`,
    tools: 'Python · STM32 · Pressure sensors · GUI development',
    accent: 'ochre',
  },
  {
    id: 'FileSwipe',
    title: 'FileSwipe',
    category: 'Full Stack Application',
    description: 'Privacy preserving AI Storage Assistant',
    details: 'local agent that keeps/deletes your files based on a left/right swipes',
    problem: 'Constantly running out of storage and most storage organizers have usage limits',
    process: 'Building ',
    accent: 'sage',
  },
  {
    id: 'bonassar-lab-gui',
    title: 'Bonassar Lab GUI',
    category: 'Research Tools',
    description: 'A graphical interface designed to measure live stepper motor rate based on cell density of bioink',
    details: 'Built a live tracker of the PID controlled system measuring impedance (cell concentration) and extrusion rate of the bioprinter',
    problem: 'There was no clear way of tracking if the PID controller was changing the motor speed to the degree that it should be and tracking/gaining the data',
    process: 'First, we connected the PI to the stepper motor and impedance sensor and created scripts to start both from the GUI, then designed the GUI for connection of device and live plotting of the data. Also added a CSV download feature for further analysis.',
    tools: 'Rasberry PI, C++, Python, pandas, matplotlib',
    accent: 'blue',
  },
  {
    id: 'TeLLMe and Agentic Stack',
    title: 'TeLLMe Smart Room',
    category: 'Agentic Stack',
    description: 'Full stack user interface for real time querying of a 4-camera smart space',
    details: 'Describe the research question, the tools you used, and the most interesting result.',
    problem: 'LLM agent workflows can be variable and produce incorrect resuls with no way of determining the exact cause of error',
    process: 'Applied and tuned TraceFIX,a protocol thtat uses TLA+/TLC to verify the agent protcol and ensures that there are no conflicts or deadlocks in the topology.',
    tools: 'LLM API Keys (OPEN ROUTER), Python, JavaScript',
    accent: 'red',
  },
  {
    id: 'software portfolio',
    title: 'Software Portfolio',
    category: 'personal website',
    description: 'Interactive personal portfolio website',
    details: 'Design interactive camera component and consistently maintain',
    problem: 'Needed a singular place to display my expereince, projects and research', 
    process: `First sketched out a basic design and generated a PRD, then started building with camera segment, then portfolio section, and then the interaction to connect the two`,
    tools: 'React, Vite, HTML, CSS',
    accent: 'sage',
  },]


export const research = [
  {
    lab: 'Stonybrook University Biopolymer Lab Research Scholar',
    role: 'Garcia Summer Program (10% Acceptance Rate)',
    date: 'May 2025 â€“ August 2025',
    focus: 'Bioprinting, Cell Assay and Imaging',
    summary:
     `\u2022 Iterated and finalized IOS App for acoustic neuroma detection based on heatmap of muscle Movements measurements.
\u2022  Ran DISC and histogram analysis on in-vivo mice to measure wound healing progress of collagen-fibrin graf 30 ms latency reading from a shared memory buffer and writing to a live subscriber database.
\u2022 Developing a bio-printed collagen blood vessel on cross-linked F-127 substrate for tissue implantation.`,
    attachments: [
      { label: 'Paper 1', href: 'https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/presentations/view/2024-fall-meeting/2024-fall-meeting-4181033' },
      { label: 'Paper 2', href: 'https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/presentations/view/2024-fall-meeting/2024-fall-meeting-4181395' },
      { label: 'Paper 3', href: 'https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/presentations/view/2024-fall-meeting/2024-fall-meeting-4181491' },
      { label: 'Paper 4', href: 'https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/presentations/view/2024-fall-meeting/2024-fall-meeting-4181026' },
    ],
  },
  {
    lab: 'NASA SEES Air Quality Initiative Team',
    role: 'Research Student ',
    date: 'May 2024- August 2024',
    focus: 'Data Science Â· Visualization',
    summary:
       `\u2022 Selected as 1 of 100 interns conducting satellite and data science research under Dr. Yitong Jiang at UT Austin.
\u2022  Developed data graphs using Igor9Pro and ArcGIS mapping from PM 2.5 sensor to predict air quality trends.
\u2022 Focused on effect of coastal proximity on air quality due to pollutants, air speed, wind color, humidity, etc).`,
    attachments: [
      { label: 'Abstract', href: '' },
      { label: 'Presentation', href: '' },
    ],
  },
]
export const skillGroups = [
  { label: 'Languages', items: ['Python', 'Java', 'JavaScript', 'HTML/CSS', 'Swift'] },
  { label: 'Frameworks', items: ['ROS2','FastAPI', 'React', 'Vite', 'Express.js', 'PyTorch'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Tailscale', 'Starlink', 'SolidWorks'] },
]






