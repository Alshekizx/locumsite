export interface BlogSubtopic {
  heading: string;
  content: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  datePosted: string;
  readTime: string;
  whatsInside?:string[];
  subtopics: { heading: string; content: string }[];
  sideCategory: string;
  country: string;
  author: {
    name: string;
    position: string;
    profilePicture: string;
  };
}

export const blogData: BlogPost[] = [
  {
    slug: "eefmfm",
    image: "/images/default.jpg",
    title: "The Future of Fintech in Africa",
    summary: "Explore the rapid growth of financial technology across the African continent and what it means for the future.",
    category: "Fintech",
    readTime: "5 min read",
    datePosted: "2025-05-10",
    sideCategory: "News",
    country: 'Republic of Ireland',
    subtopics: [
      { heading: "Rise of Mobile Banking", content: "With mobile phone penetration on the rise, more Africans are accessing banking services through mobile apps." },
      { heading: "Fintech Startups and Investment", content: "Investors are turning their attention to African fintech startups, with funding growing every year." },
      { heading: "Challenges in Regulation", content: "Despite growth, regulatory frameworks still lag behind in many countries." }
    ],

    author: {
      name: "Adaeze Nwosu",
      position: "Fintech Analyst",
      profilePicture: "/images/default.jpg"
    }
  },
  {
    slug: "fvdmm",
    image: "/images/default.jpg",
    title: "Building Scalable Web Apps with Next.js",
    summary: "Learn why Next.js is a preferred framework for building fast, scalable web applications.",
    category: "Web Development",
    readTime: "4 min read",
    datePosted: "2025-04-28",
    sideCategory: "Our Guides",
    country: 'United Kingdom',
    subtopics: [
      { heading: "What is Next.js?", content: "Next.js is a React-based framework that supports server-side rendering and static site generation." },
      { heading: "Performance Benefits", content: "Thanks to its optimized loading and SSR, Next.js apps load faster and provide better SEO." }
    ],
    author: {
      name: "Daniel Obi",
      position: "Full-Stack Developer",
      profilePicture: "/images/default.jpg"
    }
  },

  {
    slug: "mcngk",
    image: "/images/default.jpg",
    title: "Understanding the Role of AI in Customer Experience",
    summary: "Discover how artificial intelligence is reshaping customer interactions, personalization, and support in digital platforms.",
    category: "Artificial Intelligence",
    readTime: "5 min read",
    datePosted: "2025-05-01",
    sideCategory: "Tips & Tricks",
    country: 'United Kingdom',
    subtopics: [
      { heading: "AI-Powered Chatbots", content: "Businesses use AI-driven bots to provide 24/7 support, reducing response time and improving satisfaction." },
      { heading: "Personalized Recommendations", content: "AI helps tailor product suggestions based on user behavior and preferences, increasing engagement." },
      { heading: "Data-Driven Insights", content: "AI analyzes user data to provide actionable insights for better customer targeting and retention." }
    ],
    author: {
      name: "Tunde Bakare",
      position: "AI Product Manager",
      profilePicture: "/images/default.jpg"
    }
  },
  {
    slug: "lkbjggjj",
    image: "/images/default.jpg",
    title: "Why Your Startup Needs a Strong Brand Identity",
    summary: "Learn the essentials of building a memorable and trustworthy brand for your startup from day one.",
    category: "Branding",
    readTime: "4 min read",
    datePosted: "2025-04-10",
    sideCategory: "Uncategorised",
    country: 'Republic of Ireland',
    subtopics: [
      { heading: "Consistency is Key", content: "Using consistent visual elements and tone helps establish brand recognition and trust." },
      { heading: "Defining Your Brand Voice", content: "Your brand should speak in a way that resonates with your audience and reflects your values." },
      { heading: "Visual Identity Matters", content: "Logos, colors, and typography play a major role in how people perceive your business." }
    ],
    author: {
      name: "Chiamaka Eze",
      position: "Brand Strategist",
      profilePicture: "/images/default.jpg"
    }
  },

  {
  slug: "pharmacy-innovation-2025",
  image: "/images/default.jpg",
  title: "Pharmacy Innovation in 2025",
  summary: "The pharmacy landscape is evolving with technology, AI, and personalized care.",
  category: "Healthcare",
  readTime: "6 min read",
  datePosted: "2025-06-01",
  sideCategory: "Pharmacy",
  country: "Republic of Ireland",
  subtopics: [
    { heading: "Tech in Dispensing", content: "Automated systems improve accuracy and efficiency in medication dispensing." },
    { heading: "Telepharmacy Rise", content: "Remote consultations and prescriptions are becoming mainstream." }
  ],
  author: {
    name: "Dr. Janet Cole",
    position: "Clinical Pharmacist",
    profilePicture: "/images/default.jpg"
  }
},
{
  slug: "nursing-agency-benefits",
  image: "/images/default.jpg",
  title: "Why Nurses Choose Agency Work",
  summary: "Explore the flexibility and career benefits of working with nursing agencies.",
  category: "Nursing",
  readTime: "3 min read",
  datePosted: "2025-05-15",
  sideCategory: "Agency Nursing",
  country: "Republic of Ireland",
  subtopics: [
    { heading: "Flexible Hours", content: "Agency work allows nurses to manage schedules around life commitments." },
    { heading: "Higher Pay Rates", content: "Agencies often offer better pay compared to traditional contracts." }
  ],
  author: {
    name: "Lucy Morgan",
    position: "Registered Nurse",
    profilePicture: "/images/default.jpg"
  }
},
{
  slug: "gp-digital-shift",
  image: "/images/default.jpg",
  title: "The Digital Shift in General Practice",
  summary: "General practitioners are adopting new technologies to improve patient care.",
  category: "Primary Care",
  readTime: "4 min read",
  datePosted: "2025-06-05",
  sideCategory: "General Practitioners",
  country: "Republic of Ireland",
  subtopics: [
    { heading: "EHR Integration", content: "Electronic health records are streamlining diagnosis and follow-ups." },
    { heading: "Remote Consults", content: "Video calls are reducing wait times and improving access." }
  ],
  author: {
    name: "Dr. Adebayo Smith",
    position: "General Practitioner",
    profilePicture: "/images/default.jpg"
  }
},
{
  slug: "healthcare-assistants-role",
  image: "/images/default.jpg",
  title: "The Growing Role of Healthcare Assistants",
  summary: "HCAs are taking on expanded responsibilities in modern healthcare settings.",
  category: "Healthcare",
  readTime: "5 min read",
  datePosted: "2025-05-20",
  sideCategory: "Healthcare Assistants",
  country: "United Kingdom",
  subtopics: [
    { heading: "Vital Support Staff", content: "HCAs are key to delivering quality patient care in wards." },
    { heading: "Training & Career Growth", content: "More institutions offer formal progression paths for HCAs." }
  ],
  author: {
    name: "Nina James",
    position: "Senior HCA",
    profilePicture: "/images/default.jpg"
  }
},
{
  slug: "student-nurse-tips",
  image: "/images/default.jpg",
  title: "Surviving Nursing School: Top Tips",
  summary: "Advice from experienced nurses for navigating nursing school successfully.",
  category: "Republic of Ireland",
  readTime: "6 min read",
  datePosted: "2025-04-29",
  sideCategory: "Student Nurses",
  country: "United Kingdom",
  subtopics: [
    { heading: "Clinical Placements", content: "Make the most of every rotation for real-world experience." },
    { heading: "Study Smarter", content: "Use time management and active recall techniques to learn better." }
  ],
  author: {
    name: "Mary Kalu",
    position: "Nurse Educator",
    profilePicture: "/images/default.jpg"
  }
},
{
  slug: "allied-health-opportunities",
  image: "/images/default.jpg",
  title: "Opportunities in Allied Health",
  summary: "From physios to radiographers, allied health professionals are essential to healthcare systems.",
  category: "Allied Health",
  readTime: "5 min read",
  datePosted: "2025-06-02",
  sideCategory: "Allied Health Professionals",
  country: "Republic of Ireland",
  subtopics: [
    { heading: "Diverse Roles", content: "Allied health covers a wide range of critical non-nursing careers." },
    { heading: "Growing Demand", content: "Health services increasingly rely on specialists in this category." }
  ],
  author: {
    name: "Charles Egan",
    position: "AHP Lead",
    profilePicture: "/images/default.jpg"
  }
},
{
  slug: "ai-trends-healthcare-2025",
  image: "/images/default.jpg",
  title: "AI Trends in Healthcare for 2025",
  summary: "What's next in AI for healthcare? Discover the top trends to watch.",
  category: "Artificial Intelligence",
  readTime: "4 min read",
  datePosted: "2025-06-01",
  sideCategory: "Latest News",
  country: "United Kingdom",
  subtopics: [
    { heading: "Predictive Diagnostics", content: "AI tools are helping detect diseases early and more accurately." },
    { heading: "Administrative Automation", content: "Hospitals are automating paperwork with AI." }
  ],
  author: {
    name: "Zainab Bello",
    position: "Health Tech Consultant",
    profilePicture: "/images/default.jpg"
  }
},
{
  slug: "branding-tips-healthcare-startups",
  image: "/images/default.jpg",
  title: "Branding Tips for Healthcare Startups",
  summary: "Even in healthcare, branding matters. Here's how to do it right.",
  category: "Branding",
  readTime: "4 min read",
  datePosted: "2025-04-25",
  sideCategory: "Tips & Tricks",
  country: "United Kingdom",
  subtopics: [
    { heading: "Build Trust", content: "Patients are more likely to trust clearly branded services." },
    { heading: "Professional Aesthetics", content: "Visual design impacts how credible your startup appears." }
  ],
  author: {
    name: "Olivia Okon",
    position: "Brand Designer",
    profilePicture: "/images/default.jpg"
  }
},
{
  slug: "web-dev-guide-2025",
  image: "/images/default.jpg",
  title: "Ultimate Web Development Guide 2025",
  summary: "Everything you need to know to stay ahead in web development this year.",
  category: "Web Development",
  readTime: "7 min read",
  datePosted: "2025-05-10",
  sideCategory: "Our Guides",
  country: "United Kingdom",
  subtopics: [
    { heading: "Framework Choices", content: "Next.js, SvelteKit, and Nuxt dominate the scene." },
    { heading: "API Design Tips", content: "Best practices for REST and GraphQL APIs." }
  ],
  author: {
    name: "Ifeanyi Dada",
    position: "Software Engineer",
    profilePicture: "/images/default.jpg"
  }
},
{
  slug: "uncategorised-health-article",
  image: "/images/default.jpg",
  title: "Community Health and You",
  summary: "Understand how your local health center supports your wellbeing.",
  category: "Community Health",
  readTime: "3 min read",
  datePosted: "2025-04-30",
  sideCategory: "Uncategorised",
  country: "United Kingdom",
  subtopics: [
    { heading: "Walk-in Clinics", content: "Easier access to urgent care near you." },
    { heading: "Preventative Care", content: "Simple steps can help you avoid major illness." }
  ],
  author: {
    name: "Grace Ibeh",
    position: "Public Health Advocate",
    profilePicture: "/images/default.jpg"
  }
}
 
];