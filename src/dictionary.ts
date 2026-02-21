const dictionary = {
  jobs: {
    1: {
      slug: "senior-frontend-engineer",
      title: "Senior Frontend Engineer",
      company: "Meridian Systems",
      companySlug: "meridian-systems",
      location: "San Francisco, CA",
      description:
        "Build and maintain complex web applications using React and TypeScript. Lead architectural decisions for our customer-facing platform.",
      type: "Full-time",
      department: "Engineering",
      fullDescription:
        "We are looking for a Senior Frontend Engineer to join our growing team. You will be responsible for building and maintaining complex web applications using React and TypeScript, leading architectural decisions for our customer-facing platform, and mentoring junior developers. You will work closely with product designers and backend engineers to deliver polished, performant user experiences.",
      requirements: {
        "0": "5+ years of experience with React and TypeScript",
        "1": "Strong understanding of web performance optimization",
        "2": "Experience with state management libraries such as Redux or Zustand",
        "3": "Familiarity with CI/CD pipelines and automated testing",
        "4": "Excellent communication and collaboration skills"
      },
      benefits: {
        "0": "Competitive salary and equity package",
        "1": "Comprehensive health, dental, and vision insurance",
        "2": "Flexible remote work policy",
        "3": "Annual learning and development budget",
        "4": "Generous paid time off"
      },
    },
    2: {
      slug: "backend-developer",
      title: "Backend Developer",
      company: "Norden Analytics",
      companySlug: "norden-analytics",
      location: "Berlin, Germany",
      description:
        "Design and implement scalable microservices in Go. Work on real-time data processing pipelines serving millions of requests daily.",
      type: "Full-time",
      department: "Engineering",
      fullDescription:
        "Join Norden Analytics as a Backend Developer and help us build the next generation of our real-time data processing infrastructure. You will design and implement scalable microservices in Go, work on event-driven architectures, and optimize systems that serve millions of requests daily. Our team values clean code, thorough testing, and continuous improvement.",
      requirements: {
        "0": "3+ years of experience with Go or similar systems languages",
        "1": "Experience designing and building RESTful APIs and microservices",
        "2": "Knowledge of message queues such as Kafka or RabbitMQ",
        "3": "Familiarity with containerization and orchestration tools",
        "4": "Understanding of database design and query optimization"
      },
      benefits: {
        "0": "Relocation assistance for Berlin",
        "1": "30 days paid vacation",
        "2": "Public transit subsidy",
        "3": "Weekly team lunches",
        "4": "Home office equipment stipend"
      },
    },
    3: {
      slug: "product-designer",
      title: "Product Designer",
      company: "Luma Creative",
      companySlug: "luma-creative",
      location: "Tokyo, Japan",
      description:
        "Shape the user experience for our design collaboration tool. Conduct research, create prototypes, and work closely with engineering to ship polished interfaces.",
      type: "Full-time",
      department: "Design",
      fullDescription:
        "Luma Creative is seeking a Product Designer to shape the user experience of our design collaboration tool used by thousands of creative professionals worldwide. You will conduct user research, create wireframes and prototypes, define interaction patterns, and work closely with engineering to ship polished, accessible interfaces. We value thoughtful design that balances aesthetics with usability.",
      requirements: {
        "0": "4+ years of product design experience",
        "1": "Proficiency with Figma or similar design tools",
        "2": "Strong portfolio demonstrating user-centered design process",
        "3": "Experience conducting user research and usability testing",
        "4": "Understanding of accessibility standards and best practices"
      },
      benefits: {
        "0": "Flexible working hours",
        "1": "Annual design conference attendance",
        "2": "Creative tools and software provided",
        "3": "Health and wellness programs",
        "4": "Sabbatical leave after three years"
      },
    },
    4: {
      slug: "devops-engineer",
      title: "DevOps Engineer",
      company: "Cirrus Infrastructure",
      companySlug: "cirrus-infrastructure",
      location: "Remote",
      description:
        "Manage cloud infrastructure on AWS and GCP. Automate deployment pipelines and improve system reliability across a global network of services.",
      type: "Contract",
      department: "Infrastructure",
      fullDescription:
        "Cirrus Infrastructure is hiring a DevOps Engineer to manage and improve our cloud infrastructure across AWS and GCP. You will automate deployment pipelines, implement monitoring and alerting systems, and improve reliability across our global network of services. This is a contract role with the possibility of extension, and can be performed fully remotely from anywhere in the world.",
      requirements: {
        "0": "6+ years of experience in DevOps or Site Reliability Engineering",
        "1": "Deep expertise with AWS or GCP cloud services",
        "2": "Experience with infrastructure as code tools such as Terraform",
        "3": "Strong scripting skills in Python or Bash",
        "4": "Knowledge of monitoring tools such as Prometheus and Grafana",
        "5": "Experience with Kubernetes in production environments"
      },
      benefits: {
        "0": "Fully remote work from anywhere",
        "1": "Competitive contract rates",
        "2": "Flexible schedule",
        "3": "Access to cloud certification programs",
        "4": "Annual team retreat"
      },
    },
    5: {
      slug: "data-scientist",
      title: "Data Scientist",
      company: "Vantage Research",
      companySlug: "vantage-research",
      location: "London, UK",
      description:
        "Develop machine learning models for financial forecasting. Analyze large datasets and present findings to stakeholders across the organization.",
      type: "Full-time",
      department: "Data Science",
      fullDescription:
        "Vantage Research is looking for a Data Scientist to develop machine learning models for financial forecasting and risk analysis. You will work with large, complex datasets, build predictive models, and present actionable insights to stakeholders across the organization. Our data science team operates at the intersection of finance and technology, solving challenging problems that directly impact investment decisions.",
      requirements: {
        "0": "4+ years of experience in data science or machine learning",
        "1": "Strong proficiency in Python and SQL",
        "2": "Experience with machine learning frameworks such as scikit-learn, TensorFlow, or PyTorch",
        "3": "Knowledge of statistical modeling and time series analysis",
        "4": "Ability to communicate technical findings to non-technical audiences"
      },
      benefits: {
        "0": "Performance-based bonuses",
        "1": "Private health insurance",
        "2": "Central London office with hybrid work options",
        "3": "Conference and training budget",
        "4": "Company pension scheme"
      },
    },
    6: {
      slug: "mobile-developer",
      title: "Mobile Developer",
      company: "Aether Apps",
      companySlug: "aether-apps",
      location: "Sydney, Australia",
      description:
        "Build cross-platform mobile applications using React Native. Collaborate with designers to deliver smooth, performant experiences on iOS and Android.",
      type: "Part-time",
      department: "Engineering",
      fullDescription:
        "Aether Apps is hiring a part-time Mobile Developer to build cross-platform mobile applications using React Native. You will collaborate closely with designers and backend engineers to deliver smooth, performant experiences on both iOS and Android. This role is ideal for someone seeking flexible hours while working on consumer-facing products used by thousands of people across Australia and New Zealand.",
      requirements: {
        "0": "4+ years of mobile development experience",
        "1": "Proficiency with React Native and TypeScript",
        "2": "Experience publishing apps to the App Store and Google Play",
        "3": "Understanding of mobile UI/UX best practices",
        "4": "Familiarity with native modules and platform-specific APIs"
      },
      benefits: {
        "0": "Flexible part-time schedule",
        "1": "Modern Sydney office with harbor views",
        "2": "Equipment and software provided",
        "3": "Professional development allowance",
        "4": "Team social events"
      },
    },
  },
  companies: {
    "meridian-systems": {
      name: "Meridian Systems",
      industry: "Enterprise Software",
      size: "200-500 employees",
      founded: "2015",
      headquarters: "San Francisco, CA",
      description:
        "Meridian Systems builds enterprise software that helps organizations manage complex workflows and data pipelines. Our platform serves Fortune 500 companies across finance, healthcare, and logistics.",
      culture:
        "We believe in ownership, transparency, and continuous learning. Our engineering teams operate with high autonomy and are encouraged to experiment with new technologies. We host weekly tech talks and maintain a strong open-source culture.",
    },
    "norden-analytics": {
      name: "Norden Analytics",
      industry: "Data Analytics",
      size: "50-200 employees",
      founded: "2018",
      headquarters: "Berlin, Germany",
      description:
        "Norden Analytics provides real-time data analytics solutions for European businesses. Our platform processes billions of events per day, enabling customers to make data-driven decisions with confidence.",
      culture:
        "Our team is international and collaborative. We value clean code, thorough testing, and thoughtful architecture. We work in small, focused teams with flat hierarchies and direct communication.",
    },
    "luma-creative": {
      name: "Luma Creative",
      industry: "Design Tools",
      size: "50-200 employees",
      founded: "2019",
      headquarters: "Tokyo, Japan",
      description:
        "Luma Creative develops design collaboration tools used by creative professionals worldwide. Our platform combines powerful design capabilities with seamless real-time collaboration features.",
      culture:
        "Design is at the heart of everything we do. We foster a creative environment where every team member is encouraged to contribute ideas. We prioritize work-life balance and offer flexible schedules to support personal projects.",
    },
    "cirrus-infrastructure": {
      name: "Cirrus Infrastructure",
      industry: "Cloud Services",
      size: "50-200 employees",
      founded: "2017",
      headquarters: "Remote-first",
      description:
        "Cirrus Infrastructure provides managed cloud services and infrastructure automation for growing technology companies. We help teams deploy, monitor, and scale their applications with confidence.",
      culture:
        "As a fully remote company, we prioritize asynchronous communication and written documentation. Our team spans multiple time zones and we embrace flexibility. We invest heavily in our tooling and internal developer experience.",
    },
    "vantage-research": {
      name: "Vantage Research",
      industry: "Financial Technology",
      size: "200-500 employees",
      founded: "2014",
      headquarters: "London, UK",
      description:
        "Vantage Research combines advanced machine learning with deep financial expertise to provide forecasting and risk analysis tools for institutional investors. Our models process terabytes of market data daily.",
      culture:
        "We operate at the intersection of finance and technology. Our team includes researchers, engineers, and analysts who collaborate closely to solve challenging problems. We encourage continuous learning and support conference attendance and further education.",
    },
    "aether-apps": {
      name: "Aether Apps",
      industry: "Consumer Mobile",
      size: "10-50 employees",
      founded: "2020",
      headquarters: "Sydney, Australia",
      description:
        "Aether Apps creates consumer mobile applications focused on productivity and wellness. Our apps are used by thousands of people across Australia and New Zealand, and we are expanding into new markets.",
      culture:
        "We are a small, close-knit team that values creativity and craftsmanship. We believe in building products that genuinely improve people's daily lives. Our Sydney office has a relaxed atmosphere with regular team activities and social events.",
    },
  },
};

export default dictionary;
