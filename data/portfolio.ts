export interface Profile {
  name: string;
  role: string;
  headline: string;
  subheadline: string;
  summary: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  availability: string;
  experienceYears: string;
  projectsCount: string;
  clientsCount: string;
  technologiesCount: string;
  linkedin: string;
  github: string;
  twitter: string;
  resumeUrl: string;
  photoUrl: string;
}

export interface SkillGroup {
  group: string;
  icon: string;
  description: string;
  items: string[];
}

export interface Project {
  number: string;
  name: string;
  type: string;
  category: "all" | "featured" | "travel" | "crm" | "web" | "landing";
  stack: string[];
  description: string;
  highlight: string;
  live: string;
  code: string;
  image?: string;
  featured: boolean;
  accent: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  badge: string;
  description: string;
  points: string[];
  skills: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface Metric {
  value: string;
  label: string;
  description: string;
}

export const profile: Profile = {
  name: "Harshit Kumar",
  role: "Frontend Developer",
  headline: "Building Scalable Solutions with Clean Code & Modern Tech",
  subheadline: "I build modern, high-speed, and responsive web applications with React.js, Next.js 15, and TypeScript. Turning thoughtful designs into pixel-perfect digital experiences.",
  summary: "Frontend Developer with 3+ years of hands-on experience building scalable, accessible, and high-converting web applications. Proven track record delivering 100+ live production projects across travel booking platforms, CRM & ERP management systems, media production agencies, and conversion-focused landing pages.",
  email: "i.harshitdw@gmail.com",
  phone: "+91 8219927740",
  whatsapp: "https://wa.me/918219927740?text=Hi%20Harshit,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  location: "India (Open to Global Remote Work)",
  availability: "Available for Projects & Full-time Roles",
  experienceYears: "3+",
  projectsCount: "100+",
  clientsCount: "20+",
  technologiesCount: "12+",
  linkedin: "https://www.linkedin.com/in/harshit-kumar-13a159337/",
  github: "https://github.com/webgashwatechnologies2-alt",
  twitter: "https://twitter.com",
  resumeUrl: "/Harshit-Kumar-Resume.pdf",
  photoUrl: "/harshit.jpg"
};

export const metrics: Metric[] = [
  { value: "3+", label: "Years Experience", description: "Delivering modern frontend solutions" },
  { value: "100+", label: "Live Production Websites", description: "All deployed & actively serving clients" },
  { value: "99+", label: "Lighthouse Performance", description: "Focused on speed, SEO and accessibility" },
  { value: "100%", label: "Responsive Design", description: "Flawless on mobile, tablet & desktop" }
];

export const whyChooseMe = [
  {
    title: "100+ Live Deployments",
    desc: "Proven track record with real client websites and enterprise CRM systems in production."
  },
  {
    title: "100% Fully Responsive",
    desc: "Pixel-perfect layouts optimized across all mobile devices, tablets, and large screens."
  },
  {
    title: "Fast & Clean Code",
    desc: "Maintainable Next.js 15, React, and TypeScript architecture with clean component patterns."
  },
  {
    title: "Reliable Communication",
    desc: "Direct daily updates, quick turnaround, and proactive problem solving."
  }
];

export const skills: SkillGroup[] = [
  {
    group: "Core Frontend & Frameworks",
    icon: "code",
    description: "Modern JavaScript ecosystems for building fast, reactive web apps.",
    items: ["React.js", "Next.js 15 (App Router)", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3 / SCSS"]
  },
  {
    group: "UI Systems & Styling",
    icon: "palette",
    description: "Pixel-perfect component systems with responsive design principles.",
    items: ["Tailwind CSS", "Material UI (MUI)", "Chakra UI", "Bootstrap 5", "Figma to Code", "Responsive Layouts"]
  },
  {
    group: "State, APIs & Architecture",
    icon: "database",
    description: "Robust data flow, asynchronous caching, and seamless API wiring.",
    items: ["RESTful APIs", "Axios", "Fetch API", "React-Redux", "Context API", "Component Architecture"]
  },
  {
    group: "Workflow, Tools & Cloud",
    icon: "cpu",
    description: "Industry-standard tooling for collaboration, versioning, and hosting.",
    items: ["Git & GitHub", "Vercel", "Netlify", "Hostinger", "JIRA", "Cross-Browser Testing"]
  }
];

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Building responsive and performant web applications using modern frameworks like Next.js 15 and React 19.",
    icon: "code",
    deliverables: ["Single Page Applications (SPAs)", "Server-Rendered Next.js Apps", "Cross-Browser Compatibility", "Clean Component Architecture"]
  },
  {
    id: "frontend-arch",
    title: "CRM & Management Systems",
    description: "Creating robust operational portals with dynamic data tables, complex forms, pipelines, and user role management.",
    icon: "layers",
    deliverables: ["CRM Platforms & Lead Management", "Employee Management Systems", "State Management with Redux", "Modular Folder Structure"]
  },
  {
    id: "uiux-implementation",
    title: "UI/UX & Figma Implementation",
    description: "Converting design prototypes into beautiful, intuitive, and interactive user interfaces with 100% pixel-perfect fidelity.",
    icon: "palette",
    deliverables: ["Figma to Pixel-Perfect Code", "Fluid Responsive Layouts", "Smooth Micro-Interactions", "Accessible Component Design"]
  },
  {
    id: "performance-optimization",
    title: "Performance & SEO Optimization",
    description: "Improving application speed, optimizing Core Web Vitals, and enhancing overall user experience and conversion rates.",
    icon: "zap",
    deliverables: ["95+ Google Lighthouse Scores", "Asset & Image Optimization", "Code Splitting & Lazy Loading", "SEO-Friendly SSR Architecture"]
  }
];

export const projects: Project[] = [
  {
    number: "01",
    name: "Zoyo Trip Holiday",
    type: "Travel & Tour Booking Platform",
    category: "travel",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    description: "A premier travel and tour booking platform offering seamless holiday packages discovery, interactive itineraries, dynamic inquiry capture, and high-converting booking journeys.",
    highlight: "Live Production · Tour Discovery & Booking · Mobile-First UI",
    image: "/images/projects/zoyotrips.png",
    live: "https://zoyotrip.in",
    code: "",
    featured: true,
    accent: "from-amber-500/20 via-orange-500/10 to-transparent"
  },
  {
    number: "03",
    name: "White Oak Pictures",
    type: "Film & Media Production Studio",
    category: "web",
    stack: ["React.js", "Modern CSS", "Showreel", "Responsive Design"],
    description: "A modern, cinematic digital presence for an elite film and media production company, featuring video showreels, responsive creative layouts, and structured portfolio showcases.",
    highlight: "Live Production · Cinematic Video Showreel · High-End Creative UI",
    image: "/images/projects/whiteoakpictures.png",
    live: "https://whiteoakpictures.in",
    code: "",
    featured: true,
    accent: "from-rose-500/20 via-pink-500/10 to-transparent"
  },
  {
    number: "06",
    name: "Gashwa Technologies",
    type: "IT & Digital Agency Website",
    category: "web",
    stack: ["Next.js", "TypeScript", "Tailwind UI", "SEO Engine"],
    description: "Official agency web portal for Gashwa Technologies presenting software development services, case studies, technology stacks, and client consultation funnels.",
    highlight: "Live Production · Agency Showcase · 95+ Lighthouse Score",
    image: "/images/projects/gashwarechnologies.png",
    live: "https://gashwatechnologies.org",
    code: "",
    featured: true,
    accent: "from-cyan-500/20 via-sky-500/10 to-transparent"
  },
  {
    number: "04",
    name: "Vista Travels",
    type: "Holiday Packages & Tour Portal",
    category: "travel",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description: "A clean, modern holiday and destination booking portal built to showcase curated international and domestic tour packages with structured inquiry forms.",
    highlight: "Live Production · Curated Itineraries · Fast Page Loads",
    image: "/images/projects/vistatravels.png",
    live: "https://vistatravelss.com",
    code: "",
    featured: true,
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent"
  },
  {
    number: "02",
    name: "Travel Fusion CRM",
    type: "Enterprise Travel CRM Platform",
    category: "crm",
    stack: ["Next.js", "React", "TypeScript", "Redux", "Data Tables"],
    description: "A centralized cloud CRM tailored for travel agency operations—managing inbound client enquiries, quotation pipelines, booking status workflows, and day-to-day team coordination.",
    highlight: "Live Production · Lead Pipelines & Quotation Builder · Data Tables",
    image: "/images/projects/travelfusioncrm.png",
    live: "https://travelfusioncrm.com",
    code: "",
    featured: true,
    accent: "from-blue-500/20 via-indigo-500/10 to-transparent"
  },
  {
    number: "05",
    name: "Employee Management System",
    type: "HR & Enterprise Operations Portal",
    category: "crm",
    stack: ["React.js", "Bootstrap", "REST APIs", "CRUD Operations"],
    description: "An internal enterprise management dashboard facilitating employee records management, role-based access, attendance tracking, and administrative controls.",
    highlight: "Live Production · Multi-Role Admin Panel · Complex Form Validations",
    image: "/images/projects/employymanagement.png",
    live: "https://royalblue-dove-144713.hostingersite.com",
    code: "",
    featured: true,
    accent: "from-indigo-500/20 via-purple-500/10 to-transparent"
  },
  {
    number: "07",
    name: "Highline Himalayas",
    type: "Himalayan Treks & Adventure Travel",
    category: "travel",
    stack: ["Next.js", "React", "Modern CSS", "Mobile UX"],
    description: "An immersive adventure travel website designed for mountain lovers and trek enthusiasts—featuring high-altitude trekking routes, itinerary guides, and booking inquiries.",
    highlight: "Live Production · Mountain Expedition Guides · Responsive UX",
    image: "/images/projects/highlinehimalayas.png",
    live: "https://highlinehimalayas.com",
    code: "",
    featured: false,
    accent: "from-teal-500/20 via-emerald-500/10 to-transparent"
  },
  {
    number: "08",
    name: "India Ghummo",
    type: "Domestic Tour & Travel Engine",
    category: "travel",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    description: "A vibrant pan-India tour portal dedicated to exploring heritage, wildlife, beach, and hill station packages across India with intuitive booking filters.",
    highlight: "Live Production · Domestic Tour Discovery · High-Conversion UX",
    image: "/images/projects/indiaghummoo.png",
    live: "https://indiaghummo.com",
    code: "",
    featured: false,
    accent: "from-orange-500/20 via-amber-500/10 to-transparent"
  },
  {
    number: "09",
    name: "Samast Travel",
    type: "Curated Holiday Experiences",
    category: "travel",
    stack: ["Next.js", "React", "Responsive UI"],
    description: "A sophisticated bespoke travel website delivering customized vacation packages, honeymoon specials, and family holiday tours with transparent pricing.",
    highlight: "Live Production · Bespoke Holiday Booking · Modern Layout",
    image: "/images/projects/samasttravel.png",
    live: "https://samasttravel.com",
    code: "",
    featured: false,
    accent: "from-purple-500/20 via-violet-500/10 to-transparent"
  },
  {
    number: "10",
    name: "Horizon Bound Travels",
    type: "International Tour & Travel Portal",
    category: "travel",
    stack: ["Next.js", "TypeScript", "SEO Architecture"],
    description: "A premium travel brand website showcasing curated international destinations, interactive day-by-day itineraries, and instant trip booking capture.",
    highlight: "Live Production · International Packages · SEO Optimized",
    image: "/images/projects/horizonbound.png",
    live: "https://horizonboundtravels.com",
    code: "",
    featured: false,
    accent: "from-blue-500/20 via-sky-500/10 to-transparent"
  },
  {
    number: "11",
    name: "Dream Destination Explorer",
    type: "Interactive Travel Package Explorer",
    category: "travel",
    stack: ["Next.js", "React", "REST API", "Tailwind UI"],
    description: "An interactive holiday package discovery engine allowing travelers to filter packages by budget, duration, climate, and adventure type with real-time dynamic pricing previews.",
    highlight: "Live Production · Interactive Package Filtering · Modern Grid",
    image: "/images/projects/dreamdestination.png",
    live: "https://dreamdestinationexplorer.com",
    code: "",
    featured: false,
    accent: "from-yellow-500/20 via-amber-500/10 to-transparent"
  },
  {
    number: "12",
    name: "Lavanya Holiday",
    type: "Tour Packages & Destination Portal",
    category: "travel",
    stack: ["Next.js", "React", "Responsive UI", "REST APIs"],
    description: "A dedicated holiday booking portal built to help families and groups explore seasonal tour packages, hotel bookings, and sightseeing packages seamlessly.",
    highlight: "Live Production · Seasonal Holiday Packages · Fast Inquiry Forms",
    image: "/images/projects/lavanyaholidays.png",
    live: "https://lavanyaholiday.com",
    code: "",
    featured: false,
    accent: "from-pink-500/20 via-rose-500/10 to-transparent"
  },
  {
    number: "13",
    name: "Nature Quest Travels",
    type: "Eco & Wildlife Adventure Tours",
    category: "travel",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    description: "An eco-friendly travel platform designed to connect nature enthusiasts with wildlife safaris, jungle trails, and sustainable travel experiences across breathtaking spots.",
    highlight: "Live Production · Eco-Tourism & Safaris · Clean Green UI",
    image: "/images/projects/naturequesttravels.png",
    live: "https://naturequesttravels.com",
    code: "",
    featured: false,
    accent: "from-emerald-500/20 via-green-500/10 to-transparent"
  },
  {
    number: "14",
    name: "Modern Product Landing Page",
    type: "High-Converting Landing Page Design",
    category: "landing",
    stack: ["React.js", "Modern CSS", "Conversion UX", "Figma to Code"],
    description: "A high-converting, responsive landing page crafted with modern visual aesthetics, clear value propositions, interactive feature sections, and optimized lead capture funnels.",
    highlight: "Live Production · Conversion-Optimized UX · Fluid Micro-Interactions",
    live: "https://darkturquoise-goshawk-683391.hostingersite.com",
    image: "/images/projects/landingpage.png",
    code: "",
    featured: true,
    accent: "from-cyan-500/20 via-indigo-500/10 to-transparent"
  },
  {
    number: "15",
    name: "Kavya Productions",
    type: "Premium Video & Photo Production Studio",
    category: "web",
    stack: ["Next.js", "React", "Responsive Design", "Media Galleries"],
    description: "A cinematic digital presence for a premium visual storytelling studio, showcasing podcast shoots, UGC campaigns, corporate films, hotel showcases, product photography, and social media production services.",
    highlight: "Live Production · Cinematic Portfolio · 500+ Projects Delivered",
    image: "/images/projects/kavyaproduction.png",
    live: "https://kavyaproductions.com",
    code: "",
    featured: true,
    accent: "from-fuchsia-500/20 via-violet-500/10 to-transparent"
  }
];

export const experience: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Gashwa Technologies Pvt. Ltd.",
    location: "India",
    period: "2025 — Present",
    badge: "Current Role",
    description: "Leading frontend architecture and building mission-critical client projects spanning travel portals, CRM platforms, and high-converting marketing solutions.",
    points: [
      "Architected and deployed 100+ scalable client platforms including ZoyoTrip, Travel Fusion CRM, and White Oak Pictures.",
      "Engineered responsive, SEO-optimized web interfaces using Next.js 15 App Router, React 19, and TypeScript.",
      "Collaborated closely with design teams to translate Figma design systems into pixel-perfect, reusable component libraries.",
      "Integrated secure REST APIs, implemented optimized data caching, and maintained Google Lighthouse scores above 95."
    ],
    skills: ["Next.js 15", "React.js", "TypeScript", "REST APIs", "Tailwind CSS", "Figma to Code"]
  },
  {
    role: "Frontend Developer",
    company: "Milleynium Soft",
    location: "India",
    period: "2024 — 2025",
    badge: "Full-Time",
    description: "Developed and maintained complex dashboard interfaces and customer-facing websites in an agile team environment.",
    points: [
      "Contributed core frontend modules to enterprise applications including Skoolizer ERP using React.js and Material UI.",
      "Built clean, responsive UI workflows for travel platforms and academic institutions.",
      "Streamlined REST API data binding, state management with Redux, and complex multi-step form validation pipelines.",
      "Reduced page load times by 28% through image optimization, lazy loading, and code splitting techniques."
    ],
    skills: ["React.js", "Redux", "Material UI", "Bootstrap", "API Integration"]
  },
  {
    role: "Frontend Developer",
    company: "Seesoft Developers",
    location: "India",
    period: "2023 — 2024",
    badge: "Full-Time",
    description: "Foundational engineering role focused on responsive web development, CMS customizations, and cross-browser consistency.",
    points: [
      "Built over a dozen responsive, mobile-first client websites using semantic HTML5, modern CSS3, and JavaScript.",
      "Customized dynamic frontends, resolved cross-browser compatibility issues across Safari, Chrome, and Firefox.",
      "Collaborated with senior engineers to implement best practices for version control using Git and GitHub."
    ],
    skills: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Git", "Cross-Browser Testing"]
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: "Harshit is an exceptional frontend developer. He delivered high-quality work on time and exceeded our expectations for our travel booking platform. Highly recommended!",
    author: "Rahul Sharma",
    role: "Project Lead",
    company: "Gashwa Tech",
    avatar: "RS"
  },
  {
    quote: "Working with Harshit was a great experience. He's professional, communicative, and his frontend code quality, responsive design, and attention to detail are top-notch.",
    author: "Priya Mehta",
    role: "Product Manager",
    company: "InnovateX",
    avatar: "PM"
  },
  {
    quote: "Harshit's technical skills and problem-solving ability helped our CRM project succeed. He understands modern React architecture and builds interfaces that users love.",
    author: "Vikram Singh",
    role: "Founder",
    company: "StartupHub",
    avatar: "VS"
  }
];
