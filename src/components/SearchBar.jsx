import { useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { extractSearchKeywords } from '../geminiAPI';

export default function SearchBar({ setResults }) {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setResults([]);
    setLoading(true);
    

    try {
      const keywords = await extractSearchKeywords(input);
      console.log("User input:", input);
      console.log("Extracted keywords:", keywords);

      if (!keywords.length) {
        alert("No keywords found");
        setLoading(false);
        return;
      }

      const snapshot = await getDocs(collection(db, 'resources'));
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log("All documents:", docs);

      const filtered = docs.filter((note) => {
        const combined = `${note.title} ${note.subject} ${note.description}`.toLowerCase();
        return keywords.some((kw) => combined.includes(kw));
      });

      console.log("Filtered documents:", filtered);
      setResults(filtered);
    } catch (err) {
      console.error("Search failed", err);
      alert("Search failed");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search notes (e.g., sem 5 CNN)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}
