// Mock CMS data simulating what would come from the multi-tenant CMS API

export interface SiteSettings {
  siteName: string;
  logo: string;
  tagline: string;
  primaryColor: string;
  socialLinks: { platform: string; url: string }[];
  footer: {
    address: string;
    phone: string;
    email: string;
    copyright: string;
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    ogImage: string;
  };
}

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  children?: MenuItem[];
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  status: "draft" | "published";
  template: string;
  seo: { title: string; description: string };
  blocks: Block[];
}

export interface Block {
  id: string;
  type: "hero" | "heading" | "paragraph" | "image" | "features" | "testimonials" | "cta" | "gallery";
  data: Record<string, any>;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  author: { name: string; avatar: string };
  publishedAt: string;
  categories: string[];
  featured: boolean;
  status: "draft" | "published";
  blocks: Block[];
}

export const siteSettings: SiteSettings = {
  siteName: "Meridian",
  logo: "",
  tagline: "Digital Solutions That Move Business Forward",
  primaryColor: "#e85d26",
  socialLinks: [
    { platform: "Twitter", url: "#" },
    { platform: "LinkedIn", url: "#" },
    { platform: "GitHub", url: "#" },
  ],
  footer: {
    address: "IILM University , Greater Noida, Uttar pradesh, India",
    phone: "+91-7004237105",
    email: "harsh.kumar.cs27@iilm.edu",
    copyright: "© 2026 Meridian. All rights reserved.",
  },
  seo: {
    defaultTitle: "Meridian — Digital Solutions",
    defaultDescription: "We build digital products that drive growth and innovation.",
    ogImage: "",
  },
};

export const headerMenu: MenuItem[] = [
  { id: "1", label: "Home", href: "/" },
  { id: "2", label: "About", href: "/about" },
  {
    id: "3", label: "Services", href: "/services", children: [
      { id: "3a", label: "Web Development", href: "/services#web" },
      { id: "3b", label: "Brand Strategy", href: "/services#brand" },
      { id: "3c", label: "Digital Marketing", href: "/services#marketing" },
    ],
  },
  { id: "4", label: "Blog", href: "/blog" },
  { id: "5", label: "Contact", href: "/contact" },
];

export const footerMenu: MenuItem[] = [
  { id: "f1", label: "Privacy Policy", href: "/privacy" },
  { id: "f2", label: "Terms of Service", href: "/terms" },
  { id: "f3", label: "Sitemap", href: "/sitemap" },
];

export const posts: Post[] = [
  {
    id: "p1",
    title: "The Future of Headless CMS Architecture",
    slug: "future-headless-cms",
    excerpt: "How decoupled content management systems are reshaping digital experiences for modern enterprises.",
    coverImage: "",
    author: { name: "Sarah Chen", avatar: "" },
    publishedAt: "2026-03-20",
    categories: ["Technology", "CMS"],
    featured: true,
    status: "published",
    blocks: [
      { id: "b1", type: "paragraph", data: { text: "The world of content management is undergoing a fundamental transformation. Traditional monolithic CMS platforms are giving way to headless, API-first architectures that offer unprecedented flexibility and performance." } },
      { id: "b2", type: "paragraph", data: { text: "In this new paradigm, content is created once and delivered everywhere — websites, mobile apps, IoT devices, and digital signage. The separation of content from presentation empowers teams to move faster and build better experiences." } },
      { id: "b3", type: "heading", data: { text: "Why Go Headless?", level: 2 } },
      { id: "b4", type: "paragraph", data: { text: "Performance, developer experience, and omnichannel delivery are the three pillars driving headless adoption. Organizations that embrace this architecture see 40% faster page loads and 60% reduction in development cycles." } },
    ],
  },
  {
    id: "p2",
    title: "Building Multi-Tenant SaaS: Lessons from the Trenches",
    slug: "multi-tenant-saas-lessons",
    excerpt: "Real-world patterns and pitfalls in building scalable multi-tenant applications.",
    coverImage: "",
    author: { name: "Alex Rivera", avatar: "" },
    publishedAt: "2026-03-15",
    categories: ["Engineering", "SaaS"],
    featured: false,
    status: "published",
    blocks: [
      { id: "b5", type: "paragraph", data: { text: "Multi-tenancy is the backbone of modern SaaS. Getting it right from day one can save months of refactoring later." } },
    ],
  },
  {
    id: "p3",
    title: "Design Systems That Scale",
    slug: "design-systems-scale",
    excerpt: "Creating consistent, maintainable design systems across large organizations.",
    coverImage: "",
    author: { name: "Maya Patel", avatar: "" },
    publishedAt: "2026-03-10",
    categories: ["Design", "Engineering"],
    featured: false,
    status: "published",
    blocks: [
      { id: "b6", type: "paragraph", data: { text: "A design system is more than a component library. It's a shared language that enables teams to build cohesive products at scale." } },
    ],
  },
  {
    id: "p4",
    title: "SEO in the Age of AI-Generated Content",
    slug: "seo-ai-content",
    excerpt: "Navigating search optimization strategies when AI is reshaping content creation.",
    coverImage: "",
    author: { name: "Sarah Chen", avatar: "" },
    publishedAt: "2026-03-05",
    categories: ["Marketing", "AI"],
    featured: false,
    status: "published",
    blocks: [],
  },
];

export const services = [
  {
    icon: "Code",
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices for performance and scalability.",
  },
  {
    icon: "Palette",
    title: "Brand Strategy",
    description: "Strategic brand positioning and visual identity systems that differentiate you in the market.",
  },
  {
    icon: "BarChart3",
    title: "Digital Marketing",
    description: "Data-driven marketing campaigns that maximize ROI and drive measurable business growth.",
  },
  {
    icon: "Shield",
    title: "Security Consulting",
    description: "Enterprise-grade security audits, compliance planning, and threat mitigation strategies.",
  },
  {
    icon: "Zap",
    title: "Performance Optimization",
    description: "Speed up your digital presence with advanced optimization techniques and CDN strategies.",
  },
  {
    icon: "Users",
    title: "Team Augmentation",
    description: "Skilled developers and designers integrated seamlessly into your existing workflows.",
  },
];

export const testimonials = [
  {
    quote: "Meridian transformed our digital presence. Their CMS solution handles our multi-region content effortlessly.",
    author: "James Park",
    role: "CTO, Nexus Technologies",
  },
  {
    quote: "The team's attention to performance and SEO resulted in a 3x increase in organic traffic within months.",
    author: "Lisa Morales",
    role: "VP Marketing, Elevate Co",
  },
  {
    quote: "Working with Meridian felt like having an extension of our own team. Exceptional quality and communication.",
    author: "David Okafor",
    role: "Founder, BrightPath",
  },
];
