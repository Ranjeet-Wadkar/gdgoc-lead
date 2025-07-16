
import { useState } from 'react';
import ChatStyleSearch from '../components/ChatStyleSearch';
import '../styles/AboutMe.css'; // create this CSS file if not present

export default function AboutMe() {
  const [results, setResults] = useState([]);

  return (
    <div className="home-container">
      {/* Intro Section */}
      <section className="intro-section">
        <h1 className="main-heading">📚 College Resource Navigator</h1>
        <h3 className="sub-heading">Built for students, by a student.</h3>

        <div className="landing-text">
          <p>
            Hi, I'm <strong>Ranjeet Wadkar</strong> — a final-year AIML student at PESMCOE, Pune.
            I'm passionate about AI, developer communities, and building practical tools that solve real problems.
          </p>
          <p>
            This platform is part of my journey as a <strong>GDG On Campus Lead</strong>. It solves a simple but real
            challenge — finding quality, branch-specific notes and resources.
          </p>
          <p>
            Powered by <strong>Firebase</strong>, <strong>Gemini AI</strong>, and <strong>Google Cloud</strong>,
            this system makes it easy for seniors to upload and for juniors to search.
          </p>
        </div>
      </section>

      {/* Built With Section */}
      <section className="built-with">
        <h4>🔧 Built With</h4>
        <div className="tech-icons">
          <img src="https://www.svgrepo.com/show/373595/firebase.svg" alt="Firebase" />
          <img src="https://registry.npmmirror.com/@lobehub/icons-static-png/1.55.0/files/dark/gemini-color.png" alt="Gemini" />
          <img src="https://www.svgrepo.com/show/353810/google-developers.svg" alt="GDG" />
        </div>
      </section>

      {/* Contributions Section */}
      <section className="contributions-section">
        <h4>🛠️ My Contributions</h4>
        <ul>
          <li>
            <a href="https://gdg.community.dev" target="_blank" rel="noopener noreferrer">
              GDG On Campus Initiatives
            </a>
          </li>
          <li>
            <a href="https://your-other-project-link.com" target="_blank" rel="noopener noreferrer">
              Legacy Code AI Migrator – The Better Hack Winner 🏆
            </a>
          </li>
          <li>
            <a href="https://your-ai-project-link.com" target="_blank" rel="noopener noreferrer">
              SaathiCare – AI for Dementia Patients
            </a>
          </li>
        </ul>
      </section>

      {/* Search Section */}
      <div className="search-section">
        <ChatStyleSearch />
      </div>

      {/* Contact Section */}
      <section className="contact-section">
        <h4>📬 Connect With Me</h4>
        <div className="contact-links">
          <a href="https://github.com/ranjeet-wadkar" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/ranjeet-wadkar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:ranjeetwadkar@gmail.com">Email</a>
        </div>
      </section>
    </div>
  );
}