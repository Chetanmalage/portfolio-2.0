export const personal = {
    name: 'Chetan Malage',
    role: 'Full-Stack Developer',
    tagline: 'I build production-ready web apps with Spring Boot, React & MongoDB.',
    location: 'Solapur, Maharashtra, India',
    email: 'chetanmalage234@gmail.com',
    phone: '+91 8888656234',
    linkedin: 'https://www.linkedin.com/in/chetanmalage/',
    github: 'https://github.com/Chetanmalage',
    leetcode: 'https://leetcode.com/u/chetanmalage234/',
    formspree: 'https://formspree.io/f/xkjwjnpk',
    profileImage: '/images/chet.jpeg',
}

export const about = {
    paragraphs: [
        "I'm an MCA student at V.V.P. Institute of Engineering & Technology, Solapur. I build full-stack web applications — mostly with Java, Spring Boot, React, and MongoDB.",
        "Recently, I built and shipped a complete ecommerce platform for a real client — my friend's personalized gifting business, MemoryCrafts. It's live in production, serving real users and real orders.",
        "I use Java for Data Structures & Algorithms and I'm currently sharpening my problem-solving skills on LeetCode. I enjoy understanding how things work under the hood and shipping products that people actually use.",
    ],
    education: [
        {
            degree: 'Master of Computer Applications (MCA)',
            school: 'V.V.P. Institute of Engineering & Technology',
            period: '2025 – Present',
            location: 'Solapur, Maharashtra',
        },
        {
            degree: 'Bachelor of Computer Applications (BCA)',
            school: 'Abhijit Kadam Institute of Management and Technology',
            period: '2022 – 2025',
            location: 'Solapur, Maharashtra',
            extra: 'CGPA: 7.90/10',
        },
    ],
    skills: [
        { category: 'Backend', items: ['Spring Boot', 'Spring Security', 'REST APIs', 'JWT', 'OAuth 2.0'] },
        { category: 'Frontend', items: ['React', 'Vite', 'React Router', 'Tailwind CSS', 'Bootstrap'] },
        { category: 'Databases', items: ['MongoDB', 'MySQL', 'SQL'] },
        { category: 'Languages', items: ['Java', 'JavaScript', 'Python', 'HTML', 'CSS'] },
        { category: 'Tools', items: ['Docker', 'Git', 'GitHub', 'Render', 'Postman', 'Maven', 'VS Code', 'IntelliJ'] },
        { category: 'Core CS', items: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Operating Systems'] },
    ],
}

export const projects = [
    {
        id: 'memorycrafts',
        title: 'MemoryCraftsOnline',
        subtitle: 'Full-Stack Ecommerce Platform',
        description:
            'Complete ecommerce platform built for a real personalized-gifting business. Customers can browse products, customize gifts with photo uploads, choose tier-based pricing, apply coupons, and checkout via Razorpay or COD. Includes an admin dashboard with product CRUD, order management, revenue charts, review moderation, and inventory tracking.',
        tech: ['Spring Boot', 'React', 'MongoDB', 'Docker', 'JWT', 'Razorpay'],
        liveUrl: 'https://memorycrafts-backend.onrender.com',
        githubUrl: 'https://github.com/Chetanmalage/MemoryCraftsOnline',
        image: '/projects/memorycrafts.png',   // we'll add a screenshot manually below
        featured: true,
    },
    {
        id: 'voting-app',
        title: 'Real-Time Audience Voting App',
        subtitle: 'Live Analytics & Voting Platform',
        description:
            'Live audience voting web app using Firebase Realtime Database for instant state sync. Dynamic score aggregation with Chart.js visualizations. Password-protected admin panel with voter tracking and session vote-locking.',
        tech: ['JavaScript', 'Firebase', 'Chart.js', 'Vercel'],
        liveUrl: 'https://rampwalk-event-rating-app.vercel.app/',
        githubUrl: 'https://github.com/Chetanmalage/rampwalk-event-rating-app',
        image: '/projects/voting.png',
        featured: true,
    },
    {
        id: 'youtube-clone',
        title: 'YouTube Clone',
        subtitle: 'Responsive UI Replica',
        description:
            'Responsive YouTube landing page clone built with HTML and CSS. Replicates the original interface layout while sharpening modern responsive design skills.',
        tech: ['HTML', 'CSS', 'Flexbox'],
        liveUrl: 'https://chetanmalage.github.io/Youtube-clone/',
        githubUrl: 'https://github.com/Chetanmalage/Youtube-clone',
        image: '/projects/youtube-ss.png',
        featured: false,
    },
    {
        id: 'myntra-clone',
        title: 'Myntra Clone',
        subtitle: 'E-commerce Homepage',
        description:
            'Responsive e-commerce homepage inspired by Myntra, built with HTML and CSS. Focused on modern layouts and clean responsive user interfaces.',
        tech: ['HTML', 'CSS', 'Responsive Design'],
        liveUrl: 'https://chetanmalage.github.io/Myntra-Clone/',
        githubUrl: 'https://github.com/Chetanmalage/Myntra-Clone',
        image: '/projects/myntra-ss.png',
        featured: false,
    },
    {
        id: 'rock-paper-scissors',
        title: 'Rock Paper Scissors',
        subtitle: 'Interactive Game',
        description:
            'Interactive Rock Paper Scissors game built with vanilla JavaScript. Features random computer moves, score tracking, and local storage to save player progress.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
        liveUrl: 'https://chetanmalage.github.io/Rock-Paper-Scissors/',
        githubUrl: 'https://github.com/Chetanmalage/Rock-Paper-Scissors',
        image: '/projects/RPS_ss.png',
        featured: false,
    },
]

export const experience = [
    {
        role: 'Freelance Full-Stack Developer',
        company: 'MemoryCraftsOnline',
        period: 'Aug 2026 – Sept 2026',
        location: 'Solapur, India · Remote',
        bullets: [
            'Designed, built, and deployed a complete ecommerce platform for a real client — from requirements to production.',
            'Backend: Spring Boot 4.x REST API with JWT authentication, Google OAuth2, and MongoDB Atlas.',
            'Frontend: React 19 with cart, wishlist, multi-photo customization, and tier-based pricing.',
            'Integrated Razorpay payment gateway + COD. Automated order confirmation emails via Gmail SMTP.',
            'Dockerized with multi-stage builds, deployed on Render. Live and serving real orders.',
        ],
    },
]