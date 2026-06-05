import { Briefcase, Code2, Palette, BrainCircuit } from "lucide-react";

export type Project = {
  slug: string;
  title: string;
  period: string;
  stack: string[];
  summary: string;
  highlights: string[];
  liveDemo?: string;
  image: string;
  galleryImages: string[];
  clientLocation?: string;
  about?: string;
};

export const portfolioData = {
  name: "Jyotiranjan Sahoo",
  title: "Freelance React Developer & Full Stack MERN Expert",
  location: "Brahmapur, Ganjam, Odisha, India",
  email: "sahoojyotiranjan595@gmail.com",
  phone: "+91 8114325023",
  intro:
    "I am a freelance web developer for hire, building scalable web applications and AI-powered SaaS products. Based in India, I focus on performance, secure architecture, and premium user experience to deliver high-converting B2B and e-commerce platforms.",
  about:
    "As a remote web developer from India specializing in the MERN stack, my portfolio spans Next.js, React, TypeScript, Node.js, and PostgreSQL. I design and ship production-ready systems including RBAC auth, payment workflows, cloud storage integrations, and robust AI-assisted product experiences.",
  socials: {
    github: "https://github.com/jyotiranjan-x04",
    linkedin: "https://www.linkedin.com/in/jyotiranjan-sahoo595",
    instagram: "https://www.instagram.com/jyotiranjan_x04/",
    email: "mailto:sahoojyotiranjan595@gmail.com",
  },
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "C", "Java", "SQL"],
    frameworks: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Three.js"],
    tools: ["Prisma ORM", "NextAuth", "Git", "OpenRouter API", "REST APIs"],
    cloud: ["AWS S3", "Google Drive API", "Razorpay API", "Vercel"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
    design: ["Figma", "Canva", "Adobe Creative Suite"],
  },
  experience: [
    {
      company: "Airobosoft Products and Services LLP",
      role: "Full Stack Software Developer Intern",
      period: "June 2025 – July 2025",
      location: "Bengaluru, India",
      bullets: [
        "Built full-stack products including e-commerce, chat, and event management systems.",
        "Developed REST APIs and integrated frontend-backend workflows with React and Node.js.",
        "Collaborated in agile delivery with Git-based workflows and scalable feature rollouts.",
      ],
    },
    {
      company: "Pixizip Solutions Pvt. Ltd.",
      role: "Graphic Design Intern",
      period: "March 2025 – May 2025",
      location: "Brahmapur, India",
      bullets: [
        "Designed web, app, and marketing creatives with Adobe Creative Suite, Figma, and Canva.",
        "Delivered 5+ client design projects improving branding quality and visual engagement.",
      ],
    },
  ],
  education: {
    degree: "Bachelor of Technology, Computer Science & Engineering",
    school: "NIST University",
  },
  certificates: [
    "Software Engineering Job Simulation: Electronic Arts",
    "Introduction to Machine Learning using Python: IIT Madras",
    "NCC C Certificate",
  ],
};

export const projects: Project[] = [
  {
    slug: "packmax-india",
    title: "Packmax India",
    period: "2026",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"],
    summary:
      "A B2B packaging manufacturer, supplier and wholesaler website showcasing dynamic marketplace SEO and targeted SEO strategies. Currently under active development.",
    highlights: [
      "Dynamic marketplace SEO with targeted keyword strategies.",
      "B2B product catalog and supplier information showcase.",
      "Modern responsive design optimized for business inquiries.",
    ],
    liveDemo: "https://www.packmaxindia.in/",
    image: "/assets/projects/packmax-india-cover.png",
    galleryImages: ["/assets/projects/packmax-india-cover.png"],
    clientLocation: "🇮🇳 India",
  },
  {
    slug: "reveil-fragrance",
    title: "Reveil Fragrance",
    period: "2026",
    stack: ["Next.js", "Tailwind CSS", "Zustand", "Supabase", "Vercel", "PostHog"],
    summary:
      "A premium perfume brand e-commerce website built for a Berhampur-based client. Fully SEO optimized with modern architecture and analytics integration.",
    highlights: [
      "Built a fully SEO-optimized e-commerce storefront with structured data and meta tags.",
      "Integrated Supabase for backend and PostHog for product analytics and event tracking.",
      "Implemented Zustand for global state management with persistent cart and user preferences.",
    ],
    liveDemo: "https://www.reveilfragrance.in/",
    image: "/assets/projects/reveil-cover.png",
    galleryImages: ["/assets/projects/reveil-cover.png"],
    clientLocation: "🇮🇳 Berhampur, Odisha, India",
  },
  {
    slug: "edusaarthi-india",
    title: "EduSaarthi India",
    period: "2026",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Razorpay", "Neon"],
    summary:
      "A scalable EdTech SaaS platform for creators to upload, protect, and monetize learning content.",
    highlights: [
      "Implemented role-based access control and secure content delivery via signed URLs.",
      "Built hybrid cloud storage pipeline using AWS S3 and Google Drive.",
      "Integrated subscription and transaction workflows using Razorpay.",
    ],
    liveDemo: "https://edusaarthi-iota.vercel.app/",
    image: "/assets/projects/edusaarthi-new-cover.png",
    galleryImages: ["/assets/projects/edusaarthi-new-cover.png"],
  },
  {
    slug: "peckers-chicken",
    title: "Peckers Chicken",
    period: "2026",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    summary:
      "Premium restaurant website for Peckers Chicken, a UK-based poultry restaurant offering high-quality chicken dishes. Features menu showcase, location information, ordering system, and reward program.",
    highlights: [
      "Dynamic menu showcase with high-quality food photography and online ordering.",
      "Location finder for multiple branches with rewards and loyalty program.",
      "Mobile app integration and responsive design with customer reviews system.",
    ],
    liveDemo: "https://www.peckerschicken.co.uk/",
    image: "/assets/projects/peckers-chicken-cover.webp",
    galleryImages: ["/assets/projects/peckers-chicken-cover.webp"],
    clientLocation: "🇬🇧 United Kingdom",
  },
  {
    slug: "coasis",
    title: "Coasis",
    period: "2026",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    summary:
      "Premium restaurant and event venue website for Coasis in Tampa. Showcases their unique atmosphere, menu offerings, entertainment, and event hosting capabilities for an unforgettable experience.",
    highlights: [
      "Restaurant menu and dining experience showcase.",
      "Event and private catering information with visual gallery.",
      "Atmosphere and ambiance visual gallery with modern design.",
    ],
    liveDemo: "https://coasis.vercel.app/",
    image: "/assets/projects/coasis-cover.png",
    galleryImages: ["/assets/projects/coasis-cover.png"],
    clientLocation: "🇺🇸 Tampa, Florida, USA",
    about: "Premium restaurant and event venue website for Coasis in Tampa. Showcases their unique atmosphere, menu offerings, entertainment, and event hosting capabilities for an unforgettable experience.",
  },

  {
    slug: "vigro-it",
    title: "Vigro IT",
    period: "2026",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    summary:
      "Professional website for Vigro IT, an enterprise-grade IT solutions provider. Showcases infrastructure, security, and cloud services trusted by Fortune 1000 companies for secure connectivity.",
    highlights: [
      "Enterprise IT solutions and service offerings showcase.",
      "Security infrastructure showcase with compliance certifications.",
      "Cloud services and professional B2B design for enterprise clients.",
    ],
    liveDemo: "https://vighro-it.vercel.app/",
    image: "/assets/projects/vigro-it-cover.png",
    galleryImages: ["/assets/projects/vigro-it-cover.png"],
    clientLocation: "🇺🇸 USA",
    about: "Professional website for Vigro IT, an enterprise-grade IT solutions provider. Showcases infrastructure, security, and cloud services trusted by Fortune 1000 companies for secure connectivity.",
  },
  {
    slug: "hayat-interiors",
    title: "Hayat Interiors",
    period: "2025",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    summary:
      "Designed and developed a stunning portfolio website for a luxury home interiors business in Bangalore. Showcases interior design projects, services, and design process with high-quality imagery and modern UI.",
    highlights: [
      "Luxury portfolio showcase with high-quality images and project filtering.",
      "Design process timeline, service offerings, and client testimonials.",
      "Responsive design optimized for all devices with contact and inquiry management.",
    ],
    liveDemo: "https://www.hayatinteriors.com/",
    image: "/assets/projects/hayat-interiors-cover.png",
    galleryImages: ["/assets/projects/hayat-interiors-cover.png"],
    clientLocation: "🇮🇳 Bangalore, India",
    about: "Designed and developed a stunning portfolio website for a luxury home interiors business in Bangalore. Showcases their interior design projects, services, and design process with high-quality imagery and modern UI.",
  },
  {
    slug: "lemon-studio-dxb",
    title: "Lemon Studio",
    period: "2025",
    stack: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
    summary:
      "Designed a visually striking and user-friendly photography portfolio website for a Dubai-based client, showcasing their work, services, and contact options.",
    highlights: [
      "Gallery layout with hover animations and lightbox previews.",
      "Smooth page transitions using Framer Motion with responsive contact form.",
      "Mobile-optimized UI with modern design showcasing services and packages.",
    ],
    liveDemo: "https://www.lemonstudiodxb.ae/",
    image: "/assets/projects/lemon-studio-cover.png",
    galleryImages: ["/assets/projects/lemon-studio-cover.png"],
    clientLocation: "🇦🇪 Dubai, UAE",
  },
  {
    slug: "vyra-herbals",
    title: "Vyra Herbals",
    period: "2025",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    summary:
      "Premium e-commerce website for Vyra Herbals featuring their collection of herbal hair oils and natural beauty products with detailed product information and seamless shopping experience.",
    highlights: [
      "Product catalog with detailed descriptions, benefits, and high-quality photography.",
      "Secure shopping cart and checkout with customer reviews and ratings.",
      "Blog section for beauty and wellness tips with order tracking and customer support.",
    ],
    liveDemo: "https://www.vyraherbals.com/",
    image: "/assets/projects/vyra-herbals-cover.png",
    galleryImages: ["/assets/projects/vyra-herbals-cover.png"],
    clientLocation: "🇮🇳 India",
  },
  {
    slug: "clienter",
    title: "Clienter",
    period: "2025",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    summary:
      "A comprehensive project management and client relationship platform designed for freelancers and agency owners. Manage clients, projects, team members, and track workflow all in one place.",
    highlights: [
      "Client management and relationship tracking with project creation and assignment.",
      "Team member management with role-based access and task tracking.",
      "Invoice and payment tracking with analytics and performance dashboards.",
    ],
    liveDemo: "https://clienter25.vercel.app/login",
    image: "/assets/projects/clienter-cover.webp",
    galleryImages: ["/assets/projects/clienter-cover.webp"],
  },
  {
    slug: "homestead-community",
    title: "Homestead Community Associates",
    period: "2025",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    summary:
      "Professional website for Homestead Community Associates, specializing in property management and HOA services in Georgia. Showcases their transparent, integrity-driven management approach protecting property values.",
    highlights: [
      "HOA management services and expertise display with service packages.",
      "Pricing information with homeowner portal and payment system.",
      "Professional design conveying trust for property management services.",
    ],
    liveDemo: "https://homestead-green.vercel.app/",
    image: "/assets/projects/homestead-cover.png",
    galleryImages: ["/assets/projects/homestead-cover.png"],
    clientLocation: "🇺🇸 Georgia, USA",
    about: "Professional website for Homestead Community Associates, specializing in property management and HOA services. Showcases their transparent, integrity-driven management approach protecting property values.",
  },
  {
    slug: "orion-constructions",
    title: "Orion Constructions",
    period: "2024",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    summary:
      "Built a professional website for Orion Constructions, a national general contractor. Features project showcases, service offerings, and location-specific information across multiple regions in India.",
    highlights: [
      "Project portfolio with detailed case studies and regional office showcase.",
      "Services and expertise highlighting with image galleries for construction projects.",
      "Contact and inquiry forms with mobile-responsive design for accessibility.",
    ],
    liveDemo: "https://www.orionconstructions.co.in/",
    image: "/assets/projects/orion-constructions-cover.png",
    galleryImages: ["/assets/projects/orion-constructions-cover.png"],
    clientLocation: "🇮🇳 India",
  },
  {
    slug: "roxy-global",
    title: "Roxy Global",
    period: "2024",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    summary:
      "Professional website for Roxy Global Food Products showcasing their services as importers, re-exporters, and local suppliers of quality food items across the globe.",
    highlights: [
      "Product portfolio and catalog showcase with service offerings.",
      "Global operations and supply chain information with quality certifications.",
      "Professional B2B focused design with contact and business inquiry forms.",
    ],
    liveDemo: "https://roxyglobal.ae/",
    image: "/assets/projects/roxy-global-cover.png",
    galleryImages: ["/assets/projects/roxy-global-cover.png"],
    clientLocation: "🇦🇪 UAE",
  },
  {
    slug: "job-launch-uk",
    title: "Job Launch UK",
    period: "2024",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    summary:
      "A comprehensive platform built for international students seeking to establish their careers in the UK. Provides structured guidance, real access, and honest support for career placement and employment opportunities.",
    highlights: [
      "Career guidance and program listings for international students.",
      "Transparent pricing with real success stories and case studies from placements.",
      "Partner network and employer connections with mobile-responsive design.",
    ],
    liveDemo: "https://www.joblaunchuk.co.uk/",
    image: "/assets/projects/job-launch-uk-cover.webp",
    galleryImages: ["/assets/projects/job-launch-uk-cover.webp"],
    clientLocation: "🇬🇧 United Kingdom",
  },
  {
    slug: "dealsofagro",
    title: "DealsOfAgro",
    period: "2024",
    stack: ["Next.js", "React", "Firebase", "Figma"],
    summary:
      "Developed a full-fledged online marketplace for an agricultural machinery company during an internship. The platform allows sellers to list equipment and enables farmers to browse, explore, and purchase machinery with ease.",
    highlights: [
      "Product listing and detailed pages with real-time data from Firebase.",
      "Secure user authentication and dynamic routing with Next.js.",
      "Interactive and responsive UI tailored for farmers and sellers with admin features.",
    ],
    liveDemo: "https://dealsofagro.com/ganjam",
    image: "/assets/projects/dealsofagro-cover.webp",
    galleryImages: ["/assets/projects/dealsofagro-cover.webp"],
    clientLocation: "🇮🇳 Ganjam, Odisha, India",
  },
  {
    slug: "accountrix-solutions",
    title: "Accountrix Solutions",
    period: "2024",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    summary:
      "Professional website for Accountrix Solutions, a strategic financial services provider. Delivers expert accounting and compliance services for growing businesses with a focus on translating complexity into clarity.",
    highlights: [
      "End-to-end accounting and compliance services showcase.",
      "Business solutions and service offerings with client testimonials.",
      "Case studies and professional design conveying trust and expertise.",
    ],
    liveDemo: "https://www.accountrixsolutions.in/",
    image: "/assets/projects/accountrix-cover.png",
    galleryImages: ["/assets/projects/accountrix-cover.png"],
    clientLocation: "🇮🇳 India",
    about: "Professional website for Accountrix Solutions, a strategic financial services provider. Delivers expert accounting and compliance services for growing businesses with a focus on translating complexity into clarity.",
  },
  {
    slug: "u-rise",
    title: "U Rise",
    period: "2024",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    summary:
      "A platform built for discovering, launching, and growing the next generation of digital products. Connects makers with a community of early adopters and provides tools for product validation and market entry.",
    highlights: [
      "Product discovery and showcase platform for digital products.",
      "Community of 50k+ makers and early adopters for product validation.",
      "Product launch tools and marketing support with modern UI.",
    ],
    liveDemo: "https://u-rise-rosy.vercel.app/",
    image: "/assets/projects/u-rise-cover.png",
    galleryImages: ["/assets/projects/u-rise-cover.png"],
    about: "A platform built for discovering, launching, and growing the next generation of digital products. Connects makers with a community of early adopters and provides tools for product validation and market entry.",
  },
  {
    slug: "renova-pharmaceuticals",
    title: "Renova Pharmaceuticals",
    period: "2023",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    summary:
      "Professional website for Renova Pharmaceuticals showcasing their pharmaceutical products, mission, and commitment to innovation and quality in healthcare.",
    highlights: [
      "Product catalog with detailed descriptions and company mission showcase.",
      "Research and development highlights with career opportunities section.",
      "Professional and trustworthy design with contact and inquiry management.",
    ],
    liveDemo: "https://renovapharmaceuticals.com/",
    image: "/assets/projects/renova-cover.png",
    galleryImages: ["/assets/projects/renova-cover.png"],
    clientLocation: "🇮🇳 India",
  },
  {
    slug: "coaching-shark",
    title: "Coaching Shark",
    period: "2023",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    summary:
      "A comprehensive coaching and tuition management system designed for educational institutions. Track student performance, manage attendance, handle payments, and streamline operations.",
    highlights: [
      "Student management with enrollment tracking, attendance, and performance monitoring.",
      "Class scheduling, time management, and payment/fee collection system.",
      "Report generation for parents and administrators with real-time analytics dashboard.",
    ],
    liveDemo: "https://www.coachingshark.in/",
    image: "/assets/projects/coaching-shark-cover.webp",
    galleryImages: ["/assets/projects/coaching-shark-cover.webp"],
    clientLocation: "🇮🇳 India",
  },
];

export const services = [
  {
    title: "Web Development",
    description: "Modern full-stack applications with scalable architecture and production-grade performance.",
    icon: Code2,
  },
  {
    title: "UI/UX Design",
    description: "Clean, high-conversion digital interfaces with strong visual hierarchy and user flow.",
    icon: Palette,
  },
  {
    title: "Branding",
    description: "Visual identity systems, creative direction, and branded digital collateral.",
    icon: Briefcase,
  },
  {
    title: "AI/ML",
    description: "AI-powered product features, automation workflows, and practical ML experimentation.",
    icon: BrainCircuit,
  },
] as const;
