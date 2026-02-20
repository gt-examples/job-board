const dictionary = {
  jobs: {
    1: {
      title: "Senior Frontend Engineer",
      company: "Meridian Systems",
      companySlug: "meridian-systems",
      location: "San Francisco, CA",
      description:
        "Build and maintain complex web applications using React and TypeScript. Lead architectural decisions for our customer-facing platform.",
      longDescription:
        "We're looking for a Senior Frontend Engineer to join our growing team at Meridian Systems. You'll be responsible for building and maintaining complex web applications using React and TypeScript, leading architectural decisions, mentoring junior developers, and collaborating closely with product and design teams. This role offers the opportunity to shape the technical direction of our customer-facing platform used by thousands of businesses worldwide.",
      type: "Full-time",
      responsibilities: [
        "Architect and implement new features for our React-based platform",
        "Conduct code reviews and mentor junior engineers",
        "Collaborate with product managers and designers on feature specifications",
        "Optimize application performance and accessibility",
        "Contribute to technical documentation and engineering blog posts",
      ],
      qualifications: [
        "5+ years of experience with React and TypeScript",
        "Strong understanding of web performance optimization",
        "Experience with state management solutions (Redux, Zustand, etc.)",
        "Familiarity with testing frameworks (Jest, Playwright)",
        "Excellent communication skills and ability to work in a distributed team",
      ],
      benefits: [
        "Competitive salary and equity package",
        "Flexible remote work policy",
        "Annual learning and development budget",
        "Comprehensive health, dental, and vision insurance",
        "Four weeks paid time off plus company holidays",
      ],
    },
    2: {
      title: "Backend Developer",
      company: "Norden Analytics",
      companySlug: "norden-analytics",
      location: "Berlin, Germany",
      description:
        "Design and implement scalable microservices in Go. Work on real-time data processing pipelines serving millions of requests daily.",
      longDescription:
        "Norden Analytics is seeking a Backend Developer to help us scale our data infrastructure. You will design and implement microservices in Go, work on real-time data processing pipelines, and ensure our systems can handle the growing demands of millions of daily requests. You'll work alongside a talented team of engineers in our Berlin office with the flexibility to work remotely part of the week.",
      type: "Full-time",
      responsibilities: [
        "Design and build scalable microservices using Go",
        "Develop and maintain real-time data processing pipelines",
        "Optimize database queries and system performance",
        "Participate in on-call rotation for production systems",
        "Write comprehensive tests and documentation",
      ],
      qualifications: [
        "3+ years of experience with Go or similar systems languages",
        "Experience with distributed systems and message queues",
        "Proficiency with SQL and NoSQL databases",
        "Understanding of containerization and orchestration (Docker, Kubernetes)",
        "Ability to communicate effectively in English",
      ],
      benefits: [
        "Relocation assistance for Berlin",
        "30 days paid vacation",
        "Public transit subsidy",
        "Team offsites twice a year",
        "Professional development conferences budget",
      ],
    },
    3: {
      title: "Product Designer",
      company: "Luma Creative",
      companySlug: "luma-creative",
      location: "Tokyo, Japan",
      description:
        "Shape the user experience for our design collaboration tool. Conduct research, create prototypes, and work closely with engineering to ship polished interfaces.",
      longDescription:
        "Luma Creative is looking for a Product Designer to shape the future of our design collaboration platform. You'll conduct user research, create wireframes and high-fidelity prototypes, and partner closely with engineering to ship beautifully polished interfaces. This role is based in our Tokyo studio and offers the chance to work on a product used by creative professionals around the world.",
      type: "Full-time",
      responsibilities: [
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and high-fidelity mockups",
        "Define and maintain our design system",
        "Collaborate with engineers to ensure design quality in production",
        "Present design concepts to stakeholders and iterate on feedback",
      ],
      qualifications: [
        "4+ years of product design experience",
        "Proficiency with Figma and prototyping tools",
        "Strong portfolio demonstrating user-centered design process",
        "Experience with design systems at scale",
        "Conversational Japanese preferred but not required",
      ],
      benefits: [
        "Creative workspace in Shibuya",
        "Flexible working hours",
        "Annual design conference attendance",
        "Equipment budget for personal creative projects",
        "Subsidized Japanese language classes",
      ],
    },
    4: {
      title: "DevOps Engineer",
      company: "Cirrus Infrastructure",
      companySlug: "cirrus-infrastructure",
      location: "Remote",
      description:
        "Manage cloud infrastructure on AWS and GCP. Automate deployment pipelines and improve system reliability across a global network of services.",
      longDescription:
        "Cirrus Infrastructure is hiring a DevOps Engineer to manage and evolve our multi-cloud infrastructure spanning AWS and GCP. You will automate deployment pipelines, improve monitoring and alerting, and drive reliability improvements across our global network of services. This is a fully remote position open to candidates in any time zone, with async-first communication practices.",
      type: "Contract",
      responsibilities: [
        "Manage and optimize AWS and GCP cloud infrastructure",
        "Build and maintain CI/CD pipelines using GitHub Actions and Terraform",
        "Implement monitoring, alerting, and incident response procedures",
        "Collaborate with development teams on deployment strategies",
        "Document infrastructure architecture and runbooks",
      ],
      qualifications: [
        "6+ years of DevOps or SRE experience",
        "Deep expertise with AWS and/or GCP",
        "Proficiency with Infrastructure as Code (Terraform, Pulumi)",
        "Experience with container orchestration (Kubernetes, ECS)",
        "Strong scripting skills (Bash, Python)",
        "Comfortable with async, remote-first workflows",
      ],
      benefits: [
        "Fully remote with async-first culture",
        "Competitive contract rate",
        "Home office setup stipend",
        "Flexible schedule across time zones",
        "Option to convert to full-time after 6 months",
      ],
    },
    5: {
      title: "Data Scientist",
      company: "Vantage Research",
      companySlug: "vantage-research",
      location: "London, UK",
      description:
        "Develop machine learning models for financial forecasting. Analyze large datasets and present findings to stakeholders across the organization.",
      longDescription:
        "Vantage Research is looking for a Data Scientist to join our quantitative research team in London. You will develop machine learning models for financial forecasting, analyze large datasets, and communicate insights to both technical and non-technical stakeholders. This role bridges cutting-edge ML research with real-world financial applications.",
      type: "Full-time",
      responsibilities: [
        "Develop and deploy machine learning models for financial prediction",
        "Analyze large-scale financial datasets using Python and SQL",
        "Create data visualizations and present findings to stakeholders",
        "Collaborate with quantitative analysts and portfolio managers",
        "Stay current with ML research and evaluate new techniques",
      ],
      qualifications: [
        "4+ years of data science experience, preferably in finance",
        "Strong proficiency in Python, pandas, and scikit-learn",
        "Experience with deep learning frameworks (PyTorch or TensorFlow)",
        "Graduate degree in a quantitative field (Statistics, CS, Mathematics, Physics)",
        "Excellent presentation and communication skills",
      ],
      benefits: [
        "Canary Wharf office with Thames views",
        "Performance-based bonus structure",
        "Private healthcare and pension contributions",
        "Research publication opportunities",
        "Sponsorship for relevant certifications",
      ],
    },
    6: {
      title: "Mobile Developer",
      company: "Aether Apps",
      companySlug: "aether-apps",
      location: "Sydney, Australia",
      description:
        "Build cross-platform mobile applications using React Native. Collaborate with designers to deliver smooth, performant experiences on iOS and Android.",
      longDescription:
        "Aether Apps is seeking a Mobile Developer to build and refine our cross-platform applications using React Native. Based in our Sydney office, you will work closely with designers and product managers to deliver smooth, performant mobile experiences for both iOS and Android. This part-time role is ideal for experienced developers seeking work-life balance.",
      type: "Part-time",
      responsibilities: [
        "Build and maintain cross-platform mobile apps with React Native",
        "Implement pixel-perfect designs with smooth animations",
        "Integrate RESTful APIs and manage local data persistence",
        "Write unit and integration tests for critical user flows",
        "Publish updates to the App Store and Google Play",
      ],
      qualifications: [
        "4+ years of mobile development experience",
        "Strong React Native and JavaScript/TypeScript skills",
        "Experience publishing apps to both App Store and Google Play",
        "Familiarity with native iOS (Swift) or Android (Kotlin) development",
        "Eye for design and attention to UI/UX detail",
      ],
      benefits: [
        "Flexible part-time schedule (20-25 hours/week)",
        "Harbourside office in Circular Quay",
        "Latest devices for testing",
        "Conference and meetup attendance",
        "Path to full-time if desired",
      ],
    },
  },
  companies: {
    "meridian-systems": {
      name: "Meridian Systems",
      tagline: "Building the future of business software",
      description:
        "Meridian Systems is a San Francisco-based enterprise software company that builds tools for modern businesses. Founded in 2018, we serve over 5,000 companies across 40 countries with our suite of workflow automation and analytics products.",
      founded: "2018",
      headquarters: "San Francisco, CA",
      employees: "250-500",
      industry: "Enterprise Software",
      website: "https://example.com/meridian",
      culture:
        "We value ownership, curiosity, and collaboration. Our engineering culture emphasizes clean code, thorough code reviews, and continuous learning. We ship weekly and celebrate both successes and lessons learned.",
      techStack: "React, TypeScript, Node.js, PostgreSQL, AWS",
    },
    "norden-analytics": {
      name: "Norden Analytics",
      tagline: "Real-time data intelligence for the modern enterprise",
      description:
        "Norden Analytics is a Berlin-based data platform company specializing in real-time analytics and business intelligence. Our platform processes billions of events daily, helping companies make data-driven decisions with sub-second latency.",
      founded: "2020",
      headquarters: "Berlin, Germany",
      employees: "50-100",
      industry: "Data & Analytics",
      website: "https://example.com/norden",
      culture:
        "We're a diverse, international team that values technical excellence and open communication. We practice blameless postmortems, invest heavily in tooling, and believe great infrastructure enables great products.",
      techStack: "Go, Apache Kafka, ClickHouse, Kubernetes, GCP",
    },
    "luma-creative": {
      name: "Luma Creative",
      tagline: "Where creativity meets collaboration",
      description:
        "Luma Creative builds design collaboration tools used by creative professionals worldwide. Based in Tokyo, our platform combines real-time collaboration with powerful design capabilities, serving studios, agencies, and independent creators.",
      founded: "2019",
      headquarters: "Tokyo, Japan",
      employees: "100-250",
      industry: "Design Tools",
      website: "https://example.com/luma",
      culture:
        "Creativity is at the heart of everything we do. Our Tokyo studio is a space for experimentation and craft. We host monthly design critiques, encourage side projects, and believe beautiful products start with beautiful processes.",
      techStack: "TypeScript, WebGL, Rust (WASM), React, AWS",
    },
    "cirrus-infrastructure": {
      name: "Cirrus Infrastructure",
      tagline: "Cloud infrastructure, simplified",
      description:
        "Cirrus Infrastructure provides managed cloud services and infrastructure automation for startups and mid-size companies. Fully remote since founding, we help teams deploy, scale, and secure their applications across multiple cloud providers.",
      founded: "2021",
      headquarters: "Remote (Global)",
      employees: "25-50",
      industry: "Cloud Infrastructure",
      website: "https://example.com/cirrus",
      culture:
        "We're a small, remote-first team spread across 12 time zones. We communicate asynchronously by default, document everything, and trust each other to manage our own schedules. We ship reliable infrastructure so our customers can focus on their products.",
      techStack: "Terraform, Go, Python, Kubernetes, AWS, GCP",
    },
    "vantage-research": {
      name: "Vantage Research",
      tagline: "Quantitative intelligence for financial markets",
      description:
        "Vantage Research is a London-based fintech company that combines machine learning with financial expertise. Our models power investment decisions for hedge funds, asset managers, and institutional investors around the world.",
      founded: "2017",
      headquarters: "London, UK",
      employees: "100-250",
      industry: "Fintech & Research",
      website: "https://example.com/vantage",
      culture:
        "We blend academic rigor with startup agility. Our team includes PhDs, former traders, and engineers who thrive on solving hard problems. We publish research, attend conferences, and encourage intellectual curiosity at every level.",
      techStack: "Python, PyTorch, Apache Spark, PostgreSQL, Azure",
    },
    "aether-apps": {
      name: "Aether Apps",
      tagline: "Mobile experiences that feel like magic",
      description:
        "Aether Apps is a Sydney-based mobile development studio that creates consumer and enterprise applications for iOS and Android. Known for polished user experiences and smooth performance, our apps have been featured on both the App Store and Google Play.",
      founded: "2020",
      headquarters: "Sydney, Australia",
      employees: "25-50",
      industry: "Mobile Development",
      website: "https://example.com/aether",
      culture:
        "We care deeply about craft. Every animation, every interaction, every pixel matters. Our small team moves fast but never ships anything we're not proud of. We offer flexible schedules because we trust our people to do their best work on their own terms.",
      techStack: "React Native, TypeScript, Swift, Kotlin, Firebase",
    },
  },
  apply: {
    heading: "Apply for this Position",
    subtitle:
      "Fill out the form below to submit your application. All fields marked with an asterisk are required.",
    fullName: "Full Name",
    fullNamePlaceholder: "Enter your full name",
    email: "Email Address",
    emailPlaceholder: "you@example.com",
    phone: "Phone Number",
    phonePlaceholder: "+1 (555) 000-0000",
    resume: "Resume / CV",
    resumeHint: "Upload your resume in PDF format (max 10 MB)",
    coverLetter: "Cover Letter",
    coverLetterPlaceholder:
      "Tell us why you're interested in this role and what makes you a great fit...",
    linkedIn: "LinkedIn Profile",
    linkedInPlaceholder: "https://linkedin.com/in/yourprofile",
    portfolio: "Portfolio / Website",
    portfolioPlaceholder: "https://yourportfolio.com",
    startDate: "Earliest Start Date",
    salaryExpectation: "Salary Expectation",
    salaryExpectationPlaceholder: "e.g. 150,000 USD",
    howDidYouHear: "How did you hear about this position?",
    howDidYouHearOptions: {
      search: "Search engine",
      socialMedia: "Social media",
      referral: "Employee referral",
      jobBoard: "Job board",
      other: "Other",
    },
    submitApplication: "Submit Application",
    submitting: "Submitting...",
    successHeading: "Application Submitted!",
    successMessage:
      "Thank you for your interest. We will review your application and get back to you within 5-7 business days.",
    backToJob: "Back to Job Listing",
    backToAll: "Browse All Jobs",
    required: "Required",
    optional: "Optional",
  },
};

export default dictionary;
