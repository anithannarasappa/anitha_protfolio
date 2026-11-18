import React from "react";
import "./App.css";

function App() {
  const projects = [
    {
      number: "01",
      title: "Employee Leave & Workforce Availability Planning Platform",
      description:
        "A web-based platform designed to manage employee leave requests, track workforce availability, and simplify employee planning.",
      tech: "React • Node.js • Express.js • MongoDB",
      link: "https://github.com/anithannarasappa",
    },
    {
      number: "02",
      title: "Online Earnings Shopping",
      description:
        "An online shopping application designed to provide users with a simple shopping experience, product browsing, and easy navigation.",
      tech: "HTML • CSS • JavaScript • React",
      link: "https://github.com/anithannarasappa",
    },
    {
      number: "03",
      title: "CAT API",
      description:
        "A creative application that uses the Cat API to retrieve and display cat images dynamically.",
      tech: "HTML • CSS • JavaScript • API",
      link: "https://github.com/anithannarasappa",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
    "REST API",
  ];

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          AN<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk ↗
        </a>
      </nav>

      {/* HOME SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="welcome">
            <span className="status-dot"></span>
            Welcome to my portfolio
          </div>

          <p className="intro">HELLO, I'M ANITHA N</p>

          <h1>
            Creative Mind.
            <br />
            <span>MERN Stack</span>
            <br />
            Developer.
          </h1>

          <p className="hero-description">
            I am an enthusiastic BCA student and aspiring MERN Stack
            Developer who loves creating modern, creative and
            user-friendly web applications. I enjoy learning new
            technologies and transforming ideas into reality through code.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Projects ↗
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me →
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/anithannarasappa"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/anitha-n-5b5005438"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:anithannarasappa@gmail.com">
              Email ↗
            </a>
          </div>
        </div>

        {/* CIRCULAR PROFILE PHOTO ONLY */}
        <div className="hero-image">
          <div className="circle-glow"></div>
          <img
            src="/profile.jpg"
            alt="Anitha N"
            className="profile-photo"
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about section" id="about">
        <p className="section-label">GET TO KNOW ME</p>
        <h2>
          About <span>Me</span>
        </h2>

        <p className="about-text">
          Hello! I am Anitha N. I am currently pursuing Bachelor of
          Computer Applications (BCA) at Aditya Institute of Management
          Studies. I am passionate about web development, programming
          and technology. I am continuously improving my technical
          knowledge and developing practical projects to build my
          skills as a MERN Stack Developer.
        </p>

        <div className="education">
          <p className="education-label">MY EDUCATION</p>
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p>Aditya Institute of Management Studies</p>
          <p className="education-status">Currently Pursuing</p>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills section" id="skills">
        <p className="section-label">WHAT I WORK WITH</p>
        <h2>
          My <span>Skills</span>
        </h2>

        <p className="section-description">
          Technologies and tools I use to create web applications.
        </p>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-item" key={skill}>
              <span className="skill-number">
                0{index + 1}
              </span>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects section" id="projects">
        <p className="section-label">MY RECENT WORK</p>
        <h2>
          Featured <span>Projects</span>
        </h2>

        <p className="section-description">
          Some of the projects I have developed and worked on.
        </p>

        <div className="project-list">
          {projects.map((project) => (
            <div className="project-card" key={project.number}>
              <span className="project-number">
                {project.number}
              </span>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-tech">
                  {project.tech}
                </span>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact section" id="contact">
        <p className="section-label">LET'S CONNECT</p>

        <h2>
          Have a project in <span>Mind?</span>
        </h2>

        <p className="contact-description">
          I am always interested in learning, exploring opportunities
          and connecting with people. Feel free to contact me!
        </p>

        <a
          href="mailto:anithannarasappa@gmail.com"
          className="primary-button"
        >
          Send Me an Email ↗
        </a>

        <div className="contact-details">
          <p>Email</p>
          <a href="mailto:anithannarasappa@gmail.com">
            anithannarasappa@gmail.com
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <a href="#home" className="logo">
          AN<span>.</span>
        </a>

        <p>Designed & Built by Anitha N © 2026</p>

        <a href="#home" className="back-top">
          Back to Top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;