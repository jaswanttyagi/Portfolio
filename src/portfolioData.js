// Replace the text, links, and image src values in this file with your own details.
export const portfolioData = {
  navigation: [
    { id: 'home', label: 'Home', icon: 'home', path: '/' },
    { id: 'about', label: 'About', icon: 'user', path: '/about' },
    { id: 'experience', label: 'Experience', icon: 'briefcase', path: '/experience' },
    { id: 'projects', label: 'Projects', icon: 'folder', path: '/projects' },
    { id: 'skills', label: 'Skills', icon: 'spark', path: '/skills' },
    { id: 'certifications', label: 'Certificates', icon: 'award', path: '/certifications' },
    { id: 'contact', label: 'Contact', icon: 'mail', path: '/contact' },
  ],
  profile: {
    initials: 'JT',
    name: 'Jaswant singh',
    eyebrow: 'Personal Portfolio Template',
    role: 'Full Stack Developer crafting polished web products.',
    summary:
      'Welcome to my portfolio. I am Jaswant Singh, a developer passionate about building responsive, user-friendly, and visually appealing web applications using modern technologies.',
    email: 'jaswanttyagi@gmail.com',
    emailDraft: {
      subject: 'Portfolio inquiry for Jaswant Singh',
      body:
        'Hi Jaswant,\n\nI visited your portfolio and would love to connect with you.\n\nMy name:\nMy email:\nProject / opportunity:\nMessage:\n\nBest regards,\n[Your Name]',
    },
    heroImage: {
      src: '/images/galleryimages/img2.png',
      alt: 'Jaswant Tyagi profile image',
      label: 'Profile image',
      ratio: 'portrait',
      position: 'center top',
    },
    socials: [
      { label: 'GitHub', href: 'https://github.com/jaswanttyagi', icon: 'github' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jaswant-singh-311215302/', icon: 'linkedin' },
      { label: 'Portfolio Link', href: 'https://example.com', icon: 'link' },
      { label: 'Email', href: 'mailto:jaswanttyagi@gmail.com', icon: 'mail' },
    ],
    stats: [
      { value: '04', label: 'Featured projects' },
      { value: '03+', label: 'Years learning and building' },
      { value: '12+', label: 'Core technologies' },
    ],
    quickFacts: [
      { label: 'Ghaziabad', value: 'Ghaziabad, India' },
      { label: 'Focus', value: 'Frontend, backend, and UI systems' },
      { label: 'Currently', value: 'Building a portfolio tailored to you' },
    ],
    galleryImages: [
      {
        src: '/images/galleryimages/img3.webp',
        alt: 'Gallery image 01',
        label: 'Gallery image 01',
        ratio: 'gallery',
        fit: 'cover',
        position: 'center 24%',
        frameClassName: 'gallery-frame',
      },
      {
        src: '/images/galleryimages/img2.png',
        alt: 'Gallery image 02',
        label: 'Gallery image 02',
        ratio: 'gallery',
        fit: 'contain',
        position: 'center center',
        frameClassName: 'gallery-frame',
      },
      {
        src: '/images/galleryimages/img1.jpg',
        alt: 'Gallery image 03',
        label: 'Gallery image 03',
        ratio: 'portrait',
        fit: 'cover',
        position: 'center 18%',
        frameClassName: 'gallery-frame',
      },
    ],
  },
  about: {
    eyebrow: 'About',
    title: 'Here is my story with my personality',
    description:
      'A glimpse into my background, education, interests, and the experiences that shape how I think, build, and solve problems.',
    cards: [
      {
        icon: 'education',
        title: 'Education',
        items: [
          'RKGIT - B.TECH (CSE-AIML) , CGPA-7.9 (till 5th sem).',
          'Greenland Public School - (12th: 85%, 10th: 85%)',
        ],
      },
      {
        icon: 'heart',
        title: 'Passions',
        items: [
          'I am passionate about building modern web applications and solving real-world problems through technology.',
          'I enjoy learning new tools, practicing Data Structures & Algorithms, and improving my development skills through projects.',
        ],
      },
      {
        icon: 'compass',
        title: 'Interests',
        items: [
          'I enjoy exploring new AI tools and technologies in my free time to enhance productivity and learn modern development trends. I also like experimenting with vibe coding, where I quickly build creative ideas and prototypes.'
        ],
      },
      {
        icon: 'spark',
        title: 'Hobbiees',
        items: [
          'Playing voleyball (only for enjoy) , Exploring new technologies, and building fun projects to apply what I learn.',
        ],
      },
    ],
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Highlighting internships, freelance work, and impact',
    description:
      'Here’s a snapshot of my journey so far, working with exciting projects and companies that fuel my passion and growth.',
    items: [
      {
        company: 'Freelance or Campus Project',
        role: 'Web Developer',
        duration: 'Dec 2024 - Mar 2025',
        summary:
          "Designed and developed multiple web applications including E-commerce platform for create, delete & update a post Focused on building responsive interfaces, clean UI/UX, and efficient frontend logic using JavaScript and modern frameworks.",
        highlights: [
          'Translated raw ideas into a clear information architecture and polished interface.',
          'Set up modular components that made future updates easier and faster.',
          'Delivered an accessible, mobile-friendly experience across common device sizes.',
        ],
        stack: ['React', 'Tailwind CSS', 'Node.js', 'Vite'],
        links: [
          { label: 'Company site', href: 'https://codectechnologies.in/' },
          { label: 'Experience note', href: 'https://example.com' },
        ],
        image: {
          src: '/images/projectImg/image.png',
          alt: 'Second experience section placeholder image',
          label: 'Project snapshot',
        },
      },
    ],
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Highlight',
    description:
      'A few highlights of the projects I’ve built or contributed to.',
    items: [
      {
        title: 'Study Notion',
        category: 'Study Management App',
        featured: true,
        summary:
          'Study Notion is a web-based learning management platform designed to help students organize and track study resources efficiently. It lets users create, manage, and categorize notes, tasks, and learning materials inside a structured dashboard with responsive layouts and smooth navigation. The app focuses on productivity by making study content easy to store and access anytime. It also reflects strong frontend execution, thoughtful UI design, and a scalable structure for future growth.',
        metrics: [
          { value: 'LMS', label: 'Productivity focused' },
          { value: 'Responsive', label: 'Student dashboard' },
        ],
        stack: ['Dashboard UI', 'Notes Management', 'Tasks', 'Responsive Design'],
        links: [
          { label: 'GitHub', href: 'https://github.com/jaswanttyagi', icon: 'github' },
          { label: 'Live Demo', href: 'https://study-notion-three-lyart.vercel.app', icon: 'external' },
        ],
        image: {
          src: '/images/projectImg/p1.png',
          alt: 'Study Notion project preview',
          label: 'Study Notion preview',
        },
      },

      {
        title: 'CerateAI',
        category: 'Voice-Enabled AI Assistant Web App',
        featured: true,
        summary:
          'CerateAI is a full-stack voice-enabled AI assistant web application where users can create their own personalized assistant with a custom name and image, interact using wake-word based voice commands, and receive spoken responses in real time. It combines a modern React frontend with a Node/Express backend, authentication, assistant customization, browser speech recognition, text-to-speech, conversational memory, and AI-powered replies/actions. The app can answer questions, perform browser-based actions like opening YouTube, Google, maps, weather, Gmail, GitHub, LinkedIn, and more, while handling real-world issues such as microphone permissions, popup blockers, browser differences, and API failures.',
        metrics: [
          { value: 'Voice AI', label: 'Wake-word interaction' },
          { value: 'Smart', label: 'Personalized assistant memory' },
        ],
        stack: [
          'React',
          'Vite',
          'React Router',
          'Node.js',
          'Express',
          'MongoDB',
          'Gemini API',
          'Cloudinary',
          'Web Speech API',
          'Speech Synthesis API',
          'JWT',
          'Cookies',
        ],
        links: [
          { label: 'GitHub', href: 'https://github.com/jaswanttyagi', icon: 'github' },
          { label: 'Live Demo', href: 'https://create-ai-nine.vercel.app/', icon: 'external' },
        ],
        image: {
          src: '/images/projectImg/p5.png',
          alt: 'CerateAI project preview',
          label: 'CerateAI preview',
        },
      },

      {
        title: 'Weather App',
        category: 'Real-time Weather App',
        featured: false,
        summary:
          'The Weather App is a dynamic web application that delivers real-time weather information for any location using a weather API. Users can search cities and instantly view temperature, humidity, wind speed, and overall weather conditions through a clean and responsive interface. The project showcases API integration, asynchronous data fetching, dynamic updates based on user input, and error handling. It highlights practical frontend development and a useful day-to-day utility experience.',
        metrics: [
          { value: 'Live API', label: 'Real-time weather data' },
          { value: 'Search', label: 'City based results' },
        ],
        stack: ['Weather API', 'Async Fetching', 'Error Handling', 'Responsive UI'],
        links: [
          { label: 'GitHub', href: 'https://github.com/jaswanttyagi', icon: 'github' },
          { label: 'Live Demo', href: 'https://1weeatherapp.netlify.app/', icon: 'external' },
        ],
        image: {
          src: '/images/projectImg/p2.png',
          alt: 'Weather App project preview',
          label: 'Weather App preview',
        },
      },
      {
        title: 'Password Generator',
        category: 'Security Utility App',
        featured: false,
        summary:
          'The Password Generator is a utility web application built to create strong and secure passwords instantly. Users can control password length and choose uppercase letters, lowercase letters, numbers, and special characters for more secure combinations. It includes quick copy-to-clipboard functionality and a simple interactive interface. This project demonstrates JavaScript logic, randomization techniques, and useful UI interactions centered around everyday online security.',
        metrics: [
          { value: 'Secure', label: 'Random password logic' },
          { value: 'Copy', label: 'Clipboard ready' },
        ],
        stack: ['JavaScript Logic', 'Randomization', 'Interactive UI', 'Copy to Clipboard'],
        links: [
          { label: 'GitHub', href: 'https://github.com/jaswanttyagi', icon: 'github' },
          { label: 'Live Demo', href: 'https://1passwordgenertor.netlify.app/', icon: 'external' },
        ],
        image: {
          src: '/images/projectImg/p3.png',
          alt: 'Password Generator project preview',
          label: 'Password Generator preview',
        },
      },
      {
        title: 'Tic Tac Toe Game',
        category: 'Browser Game',
        featured: false,
        summary:
          'The Tic Tac Toe Game is an interactive browser-based version of the classic two-player strategy game. It includes a responsive game board, real-time move tracking, win detection, draw handling, and reset behavior for smooth replayability. The project emphasizes JavaScript logic, DOM interaction, event handling, and state-based thinking. It is a compact but strong example of building engaging web applications with clean UI and core game algorithms.',
        metrics: [
          { value: 'Game Logic', label: 'Winning combinations' },
          { value: 'Mobile', label: 'Responsive gameplay' },
        ],
        stack: ['Game State', 'DOM Manipulation', 'Event Handling', 'Win Detection'],
        links: [
          { label: 'GitHub', href: 'https://github.com/jaswanttyagi', icon: 'github' },
          { label: 'Live Demo', href: 'https://1tictactoegame.netlify.app/', icon: 'external' },
        ],
        image: {
          src: '/images/projectImg/p4.png',
          alt: 'Tic Tac Toe project preview',
          label: 'Tic Tac Toe preview',
        },
      },
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Skill I Learned',
    description:
      'A showcase of my technical skills and the technologies I work in.',
    groups: [
      {
        title: 'Languages',
        items: ['JavaScript', 'C++', 'Python'],
      },
      {
        title: 'Frontend',
        items: ['React', 'HTML', 'CSS', 'Responsive Design', 'Accessibility'],
      },
      {
        title: 'Backend',
        items: ['Node.js', 'Express', 'REST APIs', 'Authentication', 'Databases', 'MongoDB(Atlas)'],
      },
      {
        title: 'Tools and Platforms',
        items: ['Git', 'GitHub', 'VS Code', 'Vite', 'Postman', 'Figma', 'Vercel', 'Netlify', 'Render'],
      },
    ],
    conceptsTitle: 'Concepts and strengths',
    concepts: [
      'Reusable component systems',
      'API design',
      'Responsive layouts',
      'State management',
      'Performance basics',
      'Form validation',
      'Authentication flows',
      'Debugging and testing',
      'Clean code structure',
      'Team collaboration',
    ],
    toolboxTitle: 'Toolbox',
    toolbox: [
      { name: 'Git', description: 'Version control, branching, and collaboration workflows.' },
      { name: 'Figma', description: 'Reading designs and translating them into polished interfaces.' },
      { name: 'Postman', description: 'Testing APIs and validating backend integrations.' },
      { name: 'Vite', description: 'Fast local development and production builds for React apps.' },
    ],
  },
  certificates: {
    eyebrow: 'Certificates',
    title: 'Show learning milestones, achievements, and proof',
    description:
      'A showcase of my verified learning journey – from hands-on workshops to structured programs.',
    items: [
      {
        title: 'Featured Certificate 01',
        issuer: 'Professional Learning',
        year: '2026',
        credential: 'Credential available on request',
        description:
          'Applied local certificate image from your assets folder. You can replace this title and description with the exact certificate name whenever you want.',
        href: 'https://example.com',
        image: {
          src: '/images/certificates/c1.jpeg',
          alt: 'Certificate 01 image',
          label: 'Certificate preview',
        },
      },
      {
        title: 'Featured Certificate 02',
        issuer: 'Professional Learning',
        year: '2025',
        credential: 'Credential available on request',
        description:
          'This card is already connected to your second certificate image so the section now reflects your real assets instead of placeholders.',
        href: 'https://example.com',
        image: {
          src: '/images/certificates/c2.jpeg',
          alt: 'Certificate 02 image',
          label: 'Achievement preview',
        },
      },
      {
        title: 'Featured Certificate 03',
        issuer: 'Professional Learning',
        year: '2025',
        credential: 'Credential available on request',
        description:
          'A third certificate card has been added using your local image assets, ready for you to rename with the exact certification details.',
        href: 'https://example.com',
        image: {
          src: '/images/certificates/c3.png',
          alt: 'Certificate 03 image',
          label: 'Certificate preview',
        },
      },
      {
        title: 'Featured Certificate 04',
        issuer: 'Professional Learning',
        year: '2025',
        credential: 'Credential available on request',
        description:
          'This fourth card keeps the visual section consistent and makes full use of the certificate images already present in your project.',
        href: 'https://example.com',
        image: {
          src: '/images/certificates/c4.jpeg',
          alt: 'Certificate 04 image',
          label: 'Achievement preview',
        },
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Ready for your own details and links',
    description:
      'This website presents my work, technical skills, and personal projects in web development. It reflects my learning journey and my passion for building modern web applications.',
    points: [
      { label: 'Email', value: 'jaswanttyagi@gmail.com' },
      { label: 'Location', value: 'India , Ghaziabad' },
      { label: 'Open to', value: 'Internships, freelance, or full-time roles' },
      { label: 'Best fit', value: 'Frontend, full stack, and product-focused work' },
    ],
    setupSteps: [
      'This portfolio showcases my projects, technical skills, and learning journey in web development.',
      'Each project includes descriptions, technologies used, and links to the live application and source code.',
      'You can use this page to directly contact me feel free to reach out me.',
    ],
  },
  footerNote: 'Built with React and ready for your own content.',
}
