// import { useState } from 'react';
// import '../styles/AboutMe.css';

// export default function AboutMe() {
//   const [results, setResults] = useState([]);

//   return (
//     <div className="home-container">
//       {/* Intro Section */}
//       <section className="intro-section">
//         <h1 className="main-heading"> <span className="gradient-text">Edugle</span> – College Notes Navigator</h1>
//         <h3 className="sub-heading">Built by a <span className="gradient-text">student</span>, for every <span className="gradient-text">student.</span></h3>

//         <div className="landing-text">
//           <p>
//             Hi, I'm <strong>Ranjeet Wadkar</strong>, a final-year AI & ML undergrad at PES Modern College of Engineering, Pune.<br />
//             As someone deeply involved in coding, hackathons, and community work, I’ve often seen how much time students waste hunting for quality, branch-specific study resources. This platform is my way of changing that.
//           </p>
//           <p>
//             <strong>Edugle</strong> was born out of the frustration of watching juniors struggle to find notes that seniors already had, scattered across random drives and WhatsApp chats. My goal: make it dead-simple for seniors to share, and for juniors to instantly find, curated and reliable resources – all in one place.
//           </p>
//           <p>
//             This project started as part of my work as a <strong>Google Developer Groups (GDG) On Campus Lead</strong>, but it’s become much more. Powered by <strong>Firebase</strong>, <strong>Gemini AI</strong>, and <strong>Google Cloud</strong>, Edugle is designed to be fast, search-driven, and branch-aware – with an interface inspired by the best AI products.
//           </p>
//         </div>
//       </section>

//       {/* Built With Section */}
//       <section className="built-with">
//         <h4>🔧 Built With</h4>
//         <div className="tech-icons">
//           <img src="https://www.svgrepo.com/show/373595/firebase.svg" alt="Firebase" />
//           <img src="https://registry.npmmirror.com/@lobehub/icons-static-png/1.55.0/files/dark/gemini-color.png" alt="Gemini" />
//           <img src="https://www.svgrepo.com/show/353810/google-developers.svg" alt="GDG" />
//         </div>
//       </section>

//       {/* Contributions Section */}
//       <section className="contributions-section">
//         <h4>🛠️ My Hackathons & Projects</h4>
//         <ul>
//           <li>
//             <a href="https://www.linkedin.com/feed/update/urn:li:activity:7299510986523205632/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }} className="underline-link">
//               Legacy Code AI Migrator – Winner, The Better Hack (by Google Cloud) 🏆
//             </a>
//           </li>
//           <li>
//             <a href="https://www.linkedin.com/feed/update/urn:li:activity:7338062768996024320/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }} className="underline-link">
//               HireMe: Smart India Hackathon (top 5 national Finalist).
//             </a>
//           </li>
//         </ul>
//       </section>


//       {/* Contact Section */}
//       <section className="contact-section">
//         <h4>📬 Connect With Me</h4>
//         <div className="contact-links">
//           <a href="https://github.com/ranjeet-wadkar" target="_blank" rel="noopener noreferrer">GitHub</a>
//           <a href="https://linkedin.com/in/ranjeet-wadkar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//           <a href="mailto:ranjeetwadkar@gmail.com">Email</a>
//         </div>
//       </section>
//     </div>
//   );
// }
import '../styles/AboutMe.css';

export default function AboutMe() {
  return (
    <>
      <div>
        {/* <h1 className="main-heading">
          <span className="gradient-text">Edugle</span> – College Notes Navigator
        </h1> */}
        <br/><br/>
        <h3 className="sub-heading">
          Built by a <span className="gradient-text">student</span>, for every <span className="gradient-text">student.</span>
        </h3>
      </div>
      <div className="aboutme-grid-container">
        <div className="aboutme-card intro-section card-span-2">
          <div className="landing-text">
            <p>
              Hi, I'm <strong>Ranjeet Wadkar</strong>, a final-year AI & ML undergrad at PES Modern College of Engineering, Pune.
              <br/>
            </p>
            <br/>
            <p>
              <strong>Edugle</strong> was born out of the frustration of watching juniors struggle to find notes that seniors already had, scattered across random drives and WhatsApp chats. My goal: make it dead-simple for seniors to share, and for juniors to instantly find, curated and reliable resources – all in one place.
            </p>
            <br/>
            <p>
              This project started as part of my work as a <strong>Google Developer Groups (GDG) On Campus Lead</strong>, but it’s become much more. Powered by <strong>Firebase</strong>, <strong>Gemini AI</strong>, and <strong>Google Cloud</strong>, Edugle is designed to be fast, search-driven, and branch-aware – with an interface inspired by the best AI products.
            </p>
          </div>
        </div>

        <div className="aboutme-card built-with">
          <h4>🔧 Built With</h4>
          <div className="tech-icons">
            <img src="https://www.svgrepo.com/show/373595/firebase.svg" alt="Firebase" />
            <img src="https://registry.npmmirror.com/@lobehub/icons-static-png/1.55.0/files/dark/gemini-color.png" alt="Gemini" />
            <img src="https://www.svgrepo.com/show/353810/google-developers.svg" alt="GDG" />
          </div>
        </div>

        <div className="aboutme-card contributions-section">
          <h4>🛠️ My Hackathons & Projects</h4>
          <ul>
            <li>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7299510986523205632/"
                target="_blank" rel="noopener noreferrer" className="underline-link">
                Legacy Code AI Migrator – Winner, The Better Hack (by Google Cloud) 🏆
                <img width="20" src="https://img.icons8.com/pastel-glyph/128/external-link--v1.png" alt="external-link--v1"/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7338062768996024320/"
                target="_blank" rel="noopener noreferrer" className="underline-link">
                HireMe: Smart India Hackathon (top 5 national Finalist)
                <img width="20" src="https://img.icons8.com/pastel-glyph/128/external-link--v1.png" alt="external-link--v1"/>
              </a>
            </li>
          </ul>
        </div>

        <div className="aboutme-card contact-section">
          <h4>📬 Connect With Me</h4>
          <div className="contact-links">
            <a href="https://github.com/ranjeet-wadkar" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/ranjeet-wadkar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:ranjeetwadkar@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </>
  );
}

