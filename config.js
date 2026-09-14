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
            id: "owasp-top-10",
            title: "Understanding OWASP Top 10 for Web Application Developers",
            category: "Cybersecurity",
            readTime: "5 min read",
            date: "May 2026",
            excerpt: "A practical breakdown of common web vulnerabilities—including Injection flaws, Broken Auth, and XSS—with mitigation guidelines.",
            link: "blog.html?id=owasp-top-10",
            content: `
                <p>Web application security is an essential discipline for modern software engineers. The Open Web Application Security Project (OWASP) Top 10 serves as a foundational awareness document representing the most critical security risks to web applications.</p>
                
                <h2>1. Injection Flaws (SQLi, Command Injection)</h2>
                <p>Injection flaws occur when untrusted user data is sent to an interpreter as part of a command or query. Attackers craft malicious data to trick the interpreter into executing unintended commands or accessing data without proper authorization.</p>
                
                <h2>2. Broken Authentication</h2>
                <p>Application functions related to authentication and session management are frequently implemented incorrectly. This permits attackers to compromise passwords, keys, or session tokens to assume other users' identities.</p>
                
                <h2>3. Cross-Site Scripting (XSS)</h2>
                <p>XSS flaws occur whenever an application includes untrusted data in a web page without proper validation or escaping. XSS allows attackers to execute scripts in the victim's browser to hijack user sessions or deface web sites.</p>

                <h2>Mitigation Strategies</h2>
                <p>To defend applications effectively: enforce parameterized queries, sanitize dynamic outputs, apply Content Security Policies (CSP), and maintain strict session handling practices.</p>
            `
        },
        {
            id: "nlp-edge-infrastructure",
            title: "Deploying Lightweight NLP Models on Edge Infrastructure",
            category: "Artificial Intelligence",
            readTime: "7 min read",
            date: "April 2026",
            excerpt: "Techniques for model quantization, pruning, and optimization to execute machine learning inference efficiently on resource-constrained hardware.",
            link: "blog.html?id=nlp-edge-infrastructure",
            content: `
                <p>Running Natural Language Processing (NLP) models directly on edge devices reduces latency, minimizes bandwidth usage, and ensures data privacy by keeping compute localized.</p>

                <h2>1. Model Quantization</h2>
                <p>Quantization converts 32-bit floating-point parameters to lower-bit representations (such as 8-bit integers). This significantly reduces memory usage and speeds up execution without drastically lowering accuracy.</p>

                <h2>2. Structural Pruning</h2>
                <p>Pruning eliminates non-essential weights and attention heads from transformer architectures. By removing redundant paths, execution graphs become lighter and run substantially faster on mobile and edge platforms.</p>

                <h2>3. ONNX & TensorRT Runtime Optimization</h2>
                <p>Converting PyTorch models into unified representations like ONNX enables specialized runtime engines to execute low-level hardware optimizations targeted specifically at edge GPUs or NPUs.</p>
            `
        },
        {
            id: "frontend-xss-hardening",
            title: "Hardening Frontend Client Interfaces Against Modern XSS Vectors",
            category: "Web Security",
            readTime: "4 min read",
            date: "March 2026",
            excerpt: "Implementing strict Content Security Policies (CSP), DOM sanitization, and secure token storage mechanisms.",
            link: "blog.html?id=frontend-xss-hardening",
            content: `
                <p>Modern frontend frameworks reduce common DOM-based vulnerabilities, but sophisticated client-side injection vectors still pose serious risks to applications.</p>

                <h2>1. Content Security Policy (CSP) Headers</h2>
                <p>A well-configured CSP acts as a defense-in-depth layer. By restricting where scripts can load from and disabling inline script execution (<code>'unsafe-inline'</code>), malicious payloads are blocked at the browser engine level.</p>

                <h2>2. Secure Session Storage Practices</h2>
                <p>Never store authentication tokens (JWTs) in <code>localStorage</code> or <code>sessionStorage</code> where any executed XSS payload can read them. Prefer <code>HttpOnly</code>, <code>SameSite</code>, and <code>Secure</code> cookies for token persistence.</p>

                <h2>3. DOM Sanitization Pipelines</h2>
                <p>When rendering raw HTML content dynamically, pass all strings through trusted sanitization tools (such as DOMPurify) before injecting them into the DOM tree.</p>
            `
        }
    ]
};
