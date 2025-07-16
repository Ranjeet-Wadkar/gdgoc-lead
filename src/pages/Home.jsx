// import SearchBar from '../components/SearchBar';
// import NotesList from '../components/NotesList';
// import { useState } from 'react';
// import ChatStyleSearch from '../components/ChatStyleSearch';


// export default function Home() {
//   const [results, setResults] = useState([]);

//   return (
//     <div className="home-glass-container">
//         <div style={{ padding: '2rem' }}>
//         <section style={{ marginBottom: '2rem' }}>
//           <h1>📚 College Resource Navigator</h1>
//           <p>
//             I'm an AIML student at PESMCOE and I’ve often struggled to find quality,
//             branch-specific study resources. Materials are scattered, often unavailable
//             in the market, and difficult to access for juniors.
//           </p>
//           <p>
//             This platform solves that — seniors can upload notes, and juniors can access them easily.
//             Powered by Firebase, Gemini AI, and Google tools — as part of my GDG On Campus lead initiative.
//           </p>
//         </section>

//         {/* <SearchBar setResults={setResults} /> */}
//         <ChatStyleSearch />
//         {/* <NotesList results={results} /> */}
//       </div>
//     </div> 
//   );
// }


import { useState } from 'react';
import ChatStyleSearch from '../components/ChatStyleSearch';
import NotesList from '../components/NotesList';

export default function Home() {
  const [results, setResults] = useState([]);

  return (
    <div className="view-notes-container">
      <h2 className="view-notes-title">📄 Browse Uploaded Notes</h2>
      <p className="view-notes-subtitle">
        Filter by subject, semester, or branch and get study material instantly.
      </p>

      <ChatStyleSearch setResults={setResults} />
      <NotesList results={results} />
    </div>
  );
}



