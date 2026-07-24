// Projects data — accurate, resume-sourced descriptions only.
const projects = [
  {
    name: "Personal Portfolio",
    tagline: "This website — terminal-themed developer portfolio",
    description:
      "A fully custom, terminal-themed personal portfolio built from scratch — including an interactive command-driven hero, data-driven content architecture, a real (backend-free) contact form, and a premium tech-stack showcase. Built for recruiter-readiness: fast, responsive, and SEO-friendly.",
    features: [
      "Interactive 'whoanupam' terminal hero with real navigable commands",
      "Fully data-driven sections — content lives in isolated data files",
      "Backend-free contact form (Web3Forms) with real email delivery",
      "Custom cursor-glow interaction, disabled on touch devices for performance",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Router", "Web3Forms"],
    github: "https://github.com/anupamindradeepsingh",
    live: null,
  },
  {
    name: "Syncly",
    tagline: "Real-time watch-party platform",
    description:
      "A full-stack watch-party platform enabling synchronized video playback and live communication for multiple concurrent users. Real-time, event-driven communication built with Socket.IO handles room creation, user sessions, playback sync, and chat messaging, with synchronization logic designed to mitigate network latency across distributed clients.",
    features: [
      "Room creation & multi-user session handling",
      "Playback synchronization tuned for network latency",
      "Live chat messaging alongside synced video",
      "Persistent message storage via MongoDB",
    ],
    stack: ["React", "Node.js", "Express.js", "Socket.IO", "MongoDB"],
    github: "https://github.com/anupamindradeepsingh/Syncly",
    live: "https://syncly-jade.vercel.app/",
  },
  {
    name: "Jioresume",
    tagline: "AI-powered full-stack resume builder",
    description:
      "A full-stack resume builder with secure authentication and resume management, using Google Gemini AI to optimize resume content against job-relevant keywords. Supports live preview, shareable public links, multiple templates, and full CRUD-based resume management.",
    features: [
      "Gemini AI-assisted content optimization",
      "Live resume preview with multiple templates",
      "Shareable public resume links",
      "Image upload & optimization via ImageKit",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "ImageKit"],
    github: "https://github.com/anupamindradeepsingh",
    live: null,
  },
];

export default projects;
