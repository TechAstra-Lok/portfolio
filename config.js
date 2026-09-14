const SITE_DATA = {
    profile: {
        name: "Lokesh Prasai",
        title: "Cybersecurity Specialist, AI/ML Developer & Web Architect",
        location: "Birtamode, Jhapa, Nepal",
        email: "contact@lokeshprasai.com.np",
        phone: "+977 9816003020",
        bioParagraph1: "I am a technology practitioner based in Birtamode, Jhapa, specializing in security vulnerability research, AI/ML system development, and resilient web software architecture.",
        bioParagraph2: "Through TechAstra Solutions, my objective is to help organizations safeguard digital infrastructure, execute thorough penetration testing, and build AI-driven applications that automate enterprise tasks.",
        stats: {
            experience: "3+",
            audits: "25+",
            models: "10+"
        }
    },

    skills: [
        {
            category: "Cybersecurity & Pentesting",
            icon: "fas fa-user-shield",
            items: [
                { name: "Vulnerability Assessment", percent: "90%" },
                { name: "Network Security & Wireshark", percent: "85%" },
                { name: "Ethical Hacking & Burp Suite", percent: "88%" }
            ]
        },
        {
            category: "AI & Machine Learning",
            icon: "fas fa-brain",
            items: [
                { name: "Python & PyTorch / TensorFlow", percent: "82%" },
                { name: "NLP & Automated Speech AI", percent: "80%" },
                { name: "Model Optimization & Analytics", percent: "78%" }
            ]
        },
        {
            category: "Web Architecture",
            icon: "fas fa-code",
            items: [
                { name: "HTML5, CSS3 & JavaScript (ES6+)", percent: "92%" },
                { name: "Node.js & Flask Backends", percent: "85%" },
                { name: "REST APIs & Database Design", percent: "86%" }
            ]
        }
    ],

    services: [
        {
            title: "Penetration Testing",
            icon: "fas fa-shield-halved",
            description: "Executing thorough vulnerability evaluations across web applications, networks, and server configurations to address security flaws before malicious exploitation."
        },
        {
            title: "AI/ML Engineering",
            icon: "fas fa-microchip",
            description: "Engineering tailored machine learning models, natural language processing pipelines, and data analytic engines for business automation."
        },
        {
            title: "Secure Web Architecture",
            icon: "fas fa-laptop-code",
            description: "Building responsive, high-performance web applications built from the ground up with defensive coding standards and OWASP compliance."
        },
        {
            title: "Security Auditing",
            icon: "fas fa-file-shield",
            description: "Evaluating infrastructure setups, code repositories, and operational workflows against industry standards to strengthen digital security posture."
        }
    ],

    projects: [
        {
            title: "Protect Yourself",
            description: "Live global attack visualization and threat signature detection system.",
            image: "./protect_yourself.png",
            link: "#"
        },
        {
            title: "Nepali Blood Donors Society",
            description: "A specialized platform connecting blood donors with individuals needing urgent transfusions across Nepal, managing real-time requests efficiently.",
            image: "./NBDS.png",
            link: "https://raktadata.lokeshprasai.com.np/"
        },
        {
            title: "AI Meeting Minutes",
            description: "Automated transcription and intelligence extraction platform designed for operational teams.",
            image: "./Ai_Meeting.png",
            link: "#"
        },
        {
            title: "Hamro Ghar Jagga",
            description: "Specialized real estate management system and land mapping solution tailored for Nepal.",
            image: "./hamro_ghar_jagga.png",
            link: "#"
        }
    ],

    blogs: [
        {
            title: "Understanding OWASP Top 10 for Web Application Developers",
            category: "Cybersecurity",
            readTime: "5 min read",
            excerpt: "A practical breakdown of common web vulnerabilities—including Injection flaws, Broken Auth, and XSS—with mitigation guidelines.",
            link: "https://github.com/TechAstra-Lok/"
        },
        {
            title: "Deploying Lightweight NLP Models on Edge Infrastructure",
            category: "Artificial Intelligence",
            readTime: "7 min read",
            excerpt: "Techniques for model quantization, pruning, and optimization to execute machine learning inference efficiently on resource-constrained hardware.",
            link: "https://github.com/TechAstra-Lok/"
        },
        {
            title: "Hardening Frontend Client Interfaces Against Modern XSS Vectors",
            category: "Web Security",
            readTime: "4 min read",
            excerpt: "Implementing strict Content Security Policies (CSP), DOM sanitization, and secure token storage mechanisms.",
            link: "https://github.com/TechAstra-Lok/"
        }
    ]
};
