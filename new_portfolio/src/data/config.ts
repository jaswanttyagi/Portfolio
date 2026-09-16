const config = {
  title: "Jaswant Singh | Full Stack Developer",
  description: {
    long: "Full Stack Developer passionate about building responsive, user-friendly, and visually appealing web applications using modern technologies.",
    short:
      "Jaswant Singh — Full Stack Developer focused on modern web applications.",
  },
  keywords: [
    "Jaswant Singh",
    "portfolio",
    "full stack developer",
    "web development",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Python",
    "C++",
    "MySQL",
  ],
  author: "Jaswant Singh",
  email: "jaswanttyagi66@gmail.com",
  site: "https://1my-1portfolio.netlify.app",
  githubUsername: "jaswanttyagi",
  githubRepo: "portfolio",
  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/in/jaswant-singh-311215302/",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    github: "https://github.com/jaswanttyagi",
  },
};
export { config };
