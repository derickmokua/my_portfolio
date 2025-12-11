export const skills = [
  { name: 'Network Security', level: 90, icon: '🔐' },
  { name: 'Penetration Testing', level: 85, icon: '🎯' },
  { name: 'Backend Development', level: 88, icon: '⚙️' },
  { name: 'Python/Node.js', level: 92, icon: '🐍' },
  { name: 'Cloud Security', level: 80, icon: '☁️' },
  { name: 'API Development', level: 87, icon: '🔌' }
];

export const projects = [
  {
    title: 'Vulnerability Scanner',
    desc: 'Automated security assessment tool for web applications',
    tags: ['Python', 'Security', 'Automation'],
    status: 'Active'
  },
  {
    title: 'Secure API Gateway',
    desc: 'Enterprise-grade API gateway with advanced authentication',
    tags: ['Node.js', 'JWT', 'Redis'],
    status: 'Production'
  },
  {
    title: 'AI Girlfriend (Project Aurora)',
    desc: 'Emotionally aware conversational AI companion built to learn your vibe and humor.',
    tags: ['AI', 'NLP', 'React', 'OpenAI'],
    status: 'Experimental'
  },
  {
    title: 'Threat Intelligence Platform',
    desc: 'Real-time threat detection and analysis system',
    tags: ['Python', 'ML', 'Database'],
    status: 'Beta'
  }
];

export const services = [
  {
    title: 'Security Consultation',
    icon: '🛡️',
    desc: 'Comprehensive security audits and strategic consulting',
    features: ['Vulnerability Assessment', 'Security Architecture Review', 'Compliance Guidance']
  },
  {
    title: 'Penetration Testing',
    icon: '🎯',
    desc: 'Ethical hacking to identify and fix vulnerabilities',
    features: ['Web Application Testing', 'Network Security Testing', 'API Security Testing']
  },
  {
    title: 'Secure Development',
    icon: '💻',
    desc: 'Build security into your applications from day one',
    features: ['Secure Code Review', 'DevSecOps Integration', 'Threat Modeling']
  }
];

export const testimonials = [
  {
    text: "Derick's penetration testing revealed critical vulnerabilities we didn't know existed. His detailed report and remediation guidance were invaluable.",
    name: "Sarah Mitchell",
    initials: "SM",
    role: "CTO",
    company: "TechStart Inc."
  },
  {
    text: "Outstanding security consultation. Derick helped us implement a robust security architecture that met compliance requirements while staying practical.",
    name: "James Omondi",
    initials: "JO",
    role: "Head of Engineering",
    company: "DataSecure Kenya"
  },
  {
    text: "Professional, thorough, and incredibly knowledgeable. Derick's code review caught issues that would have been costly in production.",
    name: "Maria Santos",
    initials: "MS",
    role: "Product Manager",
    company: "CloudFlow Solutions"
  },
  {
    text: "Working with Derick was a game-changer for our security posture. His expertise in both development and security is rare and valuable.",
    name: "David Kimani",
    initials: "DK",
    role: "Founder & CEO",
    company: "SecureApps Africa"
  }
];

export const blogPosts = [
  {
    title: "Deconstructing the Latest Zero-Day Exploit",
    date: "Oct 15, 2025",
    desc: "A deep dive into the technical details of the recent CVE-2025-XXXX vulnerability and how we mitigated it.",
    tags: ["Cybersecurity", "Exploit", "Analysis"],
    content: [
      "The discovery of CVE-2025-XXXX sent shockwaves through the InfoSec community. It wasn't just another buffer overflow; it was a sophisticated logic flaw in a widely used authentication protocol. In this post, I'll walk you through the exploit chain, from initial discovery to reliable execution.",
      "The vulnerability stems from a race condition in the session validation logic. By flooding the auth endpoint with concurrent requests using a specific timing vector, an attacker could trick the server into issuing a valid session token for an arbitrary user ID.",
      "Our mitigation strategy involved implementing a strict mutex lock on the validation routine and introducing a cryptographically secure nonce for every handshake. This effectively neutralized the race condition without impacting performance.",
      "Remember: complexity is the enemy of security. The more intricate your state management, the more hiding spots for bugs like this one."
    ]
  },
  {
    title: "Building a Secure API with Node.js and JWT",
    date: "Sep 28, 2025",
    desc: "Step-by-step guide on implementing robust authentication and authorization using JSON Web Tokens.",
    tags: ["Node.js", "Security", "Backend"],
    content: [
      "Authentication is the gatekeeper of your application. Get it wrong, and nothing else matters. Today, we're building a production-ready authentication system using Node.js, Express, and JSON Web Tokens (JWT).",
      "We'll start by defining our schema. Storing passwords? Never. We'll use Argon2 for hashing, as it provides superior resistance to GPU-based cracking attempts compared to bcrypt.",
      "Next, the JWT strategy. We'll implement short-lived access tokens (15 minutes) paired with rotating refresh tokens stored in HTTP-only cookies. This prevents XSS attacks from stealing tokens while mitigating the risk of CSRF.",
      "Finally, let's talk about middleware. We'll write a custom 'authorize' middleware that validates the token signature, checks for revocation in Redis, and attaches the user context to the request object."
    ]
  },
  {
    title: "My Penetration Testing Workflow",
    date: "Sep 10, 2025",
    desc: "An overview of the tools, techniques, and methodologies I use to uncover critical vulnerabilities.",
    tags: ["Pentesting", "Workflow", "Tools"],
    content: [
      "Every penetration test is a new puzzle, but a consistent workflow is what separates the pros from the script kiddies. My process follows the PTES standard but tweaked for modern web architectures.",
      "Reconnaissance is 90% of the work. I start with passive subdomain enumeration using Amass and Subfinder, followed by active probing with Nmap and masscan. The goal is to maximize the attack surface before sending a single exploit.",
      "For web apps, Burp Suite Pro is my command center. I rely heavily on custom extensions to hunt for IDORs and business logic flaws—vulnerabilities that automated scanners usually miss.",
      "Reporting is the final, critical step. A vulnerability isn't fixed until the developer understands it. I prioritize writing clear, reproducible proof-of-concept exploits along with pragmatic remediation advice."
    ]
  }
];

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' }
];

export const typewriterLines = [
  '┌──(derick㉿kali)-[~/portfolio]',
  '└─$ whoami',
  '└─$ cat role.txt',
  '└─$ ls skills/',
  '└─$ ./projects.sh',
  '└─$ cat posts/latest.md',
  '└─$ ./connect.sh'
];
