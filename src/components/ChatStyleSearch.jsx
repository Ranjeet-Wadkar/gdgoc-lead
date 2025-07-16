// import { useState } from 'react';
// import { db } from '../firebase';
// import { collection, getDocs } from 'firebase/firestore';
// import { extractSearchKeywords } from '../geminiAPI';
// import './ChatStyleSearch.css';
// import Select from 'react-select';

// const branchOptions = [
//   { value: '', label: 'Branch' },
//   { value: 'CSE', label: 'CSE' },
//   { value: 'IT', label: 'IT' },
//   { value: 'AIDS', label: 'AIDS' },
//   { value: 'AIML', label: 'AIML' },
//   { value: 'ECE', label: 'ECE' },
//   { value: 'ENTC', label: 'ENTC' },
//   { value: 'MECH', label: 'MECH' },
//   { value: 'ELEC', label: 'ELEC' },
// ];


// export default function ChatStyleSearch() {
//   const [query, setQuery] = useState('');
//   const [filtersVisible, setFiltersVisible] = useState(false);
//   const [branch, setBranch] = useState('');
//   const [semester, setSemester] = useState('');
//   const [subject, setSubject] = useState('');
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [hasSearched, setHasSearched] = useState(false);
//   const handleSearch = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResults([]);
//     setHasSearched(false); // reset state before starting search
  
//     try {
//       const keywords = await extractSearchKeywords(query);
  
//       const snapshot = await getDocs(collection(db, 'resources'));
//       const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  
//       const filtered = docs.filter((note) => {
//         const text = `${note.title} ${note.subject} ${note.description} ${note.semester} ${note.branch}`.toLowerCase();
//         const matchesQuery = keywords.some((kw) => text.includes(kw));
//         const matchesBranch = branch ? note.branch === branch : true;
//         const matchesSemester = semester ? note.semester === semester : true;
//         const matchesSubject = subject ? note.subject === subject : true;
//         return matchesQuery && matchesBranch && matchesSemester && matchesSubject;
//       });
  
//       setResults(filtered);
//       setHasSearched(true); // mark that search completed
//     } catch (err) {
//       alert("Search failed");
//     }
  
//     setLoading(false);
//   };

//   return (
//     <div className="chat-container">
//       <form onSubmit={handleSearch} className="chat-form">
//         <div className="gradient-border">
//           <div className="input-with-icon-vertical">
//             <div className="search-input-container">
//               <img
//                 src="https://img.icons8.com/doodle-line/60/search.png"
//                 alt="search"
//                 className="search-img-icon"
//               />
//               <input
//                 className="chat-input"
//                 type="text"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="Ask me for notes... (e.g., sem 5 AIML DMW)"
//                 required
//               />
//             </div>

//             <div className="filter-container">
//               <button type="button" className="filter-icon" onClick={() => setFiltersVisible(!filtersVisible)}>
//                 ⚙️
//               </button>
//               {filtersVisible && (
//                 <div className="filter-inline-dropdowns">
//                   <select value={branch} onChange={(e) => setBranch(e.target.value)}>
//                     <option value="">Branch</option>
//                     <option value="CSE">CSE</option>
//                     <option value="IT">IT</option>
//                     <option value="AIDS">AIDS</option>
//                     <option value="AIML">AIML</option>
//                     <option value="ECE">ECE</option>
//                     <option value="ENTC">ENTC</option>
//                     <option value="MECH">MECH</option>
//                     <option value="ELEC">ELEC</option>
//                   </select>
//                   {/* <Select
//                     options={branchOptions}
//                     value={branchOptions.find(opt => opt.value === branch)}
//                     onChange={(selected) => setBranch(selected.value)}
//                     className="glass-dropdown"
//                   /> */}

//                   <select value={semester} onChange={(e) => setSemester(e.target.value)}>
//                     <option value="">Semester</option>
//                     {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
//                       <option key={sem} value={sem}>{sem}</option>
//                     ))}
//                   </select>
//                   <select value={subject} onChange={(e) => setSubject(e.target.value)}>
//                     <option value="">Subject</option>
//                     <option value="DMW">DMW</option>
//                     <option value="ML">ML</option>
//                     <option value="CN">CN</option>
//                   </select>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </form>
//       <div className="results-section">
//         {loading && <p>Searching...</p>}
//         {hasSearched && !loading && results.length === 0 && (
//             <p>No matching notes found.</p>
//         )}
//         {results.map((note) => (
//           <div key={note.id} className="result-card">
//             <h3>{note.title}</h3>
//             <p><strong>Subject:</strong> {note.subject}</p>
//             <p><strong>Branch:</strong> {note.branch}</p>
//             <p><strong>Semester:</strong> {note.semester}</p>
//             <p>{note.description}</p>
//             <a href={note.url} target="_blank" rel="noreferrer">View Note</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { extractSearchKeywords } from '../geminiAPI';
import './ChatStyleSearch.css';

export default function ChatStyleSearch() {
  const [query, setQuery] = useState('');
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');
  const [subject, setSubject] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [mode, setMode] = useState('ai'); // 'ai' or 'filter'

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResults([]);
    setHasSearched(false);

    try {
      const snapshot = await getDocs(collection(db, 'resources'));
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      let keywords = [];

      if (mode === 'ai') {
        keywords = await extractSearchKeywords(query);
      } else {
        keywords = query.trim().toLowerCase().split(/\s+/);
      }

      const filtered = docs.filter((note) => {
        const text = `${note.title} ${note.subject} ${note.description} ${note.semester} ${note.branch}`.toLowerCase();
        const matchesQuery = keywords.some((kw) => text.includes(kw));
        const matchesBranch = branch ? note.branch === branch : true;
        const matchesSemester = semester ? note.semester === semester : true;
        const matchesSubject = subject ? note.subject === subject : true;
        return matchesQuery && matchesBranch && matchesSemester && matchesSubject;
      });

      setResults(filtered);
      setHasSearched(true);
    } catch (err) {
      alert("Search failed");
    }

    setLoading(false);
  };

  return (
    <div className="chat-container">
      <form onSubmit={handleSearch} className="chat-form">
        {/* Mode Toggle */}
        <div className="search-mode-toggle">
          <button
            type="button"
            className={mode === 'ai' ? 'active' : ''}
            onClick={() => setMode('ai')}
          >
            🤖 Smart Search (Gemini)
          </button>
          <button
            type="button"
            className={mode === 'filter' ? 'active' : ''}
            onClick={() => setMode('filter')}
          >
            🎯 Filter Search
          </button>
        </div>

        <div className="gradient-border">
          <div className="input-with-icon-vertical">
            <div className="search-input-container">
              <img
                src="https://img.icons8.com/doodle-line/60/search.png"
                alt="search"
                className="search-img-icon"
              />
              <input
                className="chat-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask me for notes... (e.g., sem 5 AIML DMW)"
                required
              />
            </div>

            {/* Filters visible only in 'filter' mode */}
            {mode === 'filter' && (
              <div className="filter-container">
                <button type="button" className="filter-icon" onClick={() => setFiltersVisible(!filtersVisible)}>
                  ⚙️
                </button>
                {filtersVisible && (
                  <div className="filter-inline-dropdowns">
                    <select value={branch} onChange={(e) => setBranch(e.target.value)}>
                      <option value="">Branch</option>
                      <option value="CSE">CSE</option>
                      <option value="IT">IT</option>
                      <option value="AIDS">AIDS</option>
                      <option value="AIML">AIML</option>
                      <option value="ECE">ECE</option>
                      <option value="ENTC">ENTC</option>
                      <option value="MECH">MECH</option>
                      <option value="ELEC">ELEC</option>
                    </select>

                    <select value={semester} onChange={(e) => setSemester(e.target.value)}>
                      <option value="">Semester</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                        <option key={sem} value={sem}>{sem}</option>
                      ))}
                    </select>

                    <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                      <option value="">Subject</option>
                      <option value="DMW">DMW</option>
                      <option value="ML">ML</option>
                      <option value="CN">CN</option>
                    </select>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </form>

      {/* Results section */}
      <div className="results-section">
        {loading && <p>Searching...</p>}
        {hasSearched && !loading && results.length === 0 && (
          <p>No matching notes found.</p>
        )}
        {results.map((note) => (
          <div key={note.id} className="result-card">
            <h3>{note.title}</h3>
            <p><strong>Subject:</strong> {note.subject}</p>
            <p><strong>Branch:</strong> {note.branch}</p>
            <p><strong>Semester:</strong> {note.semester}</p>
            <p>{note.description}</p>
            <a href={note.url} target="_blank" rel="noreferrer">View Note</a>
          </div>
        ))}
      </div>
    </div>
  );
}
