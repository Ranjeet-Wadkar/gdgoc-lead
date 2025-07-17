import { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../firebase';
import ChatStyleSearch from '../components/ChatStyleSearch';
import NotesList from '../components/NotesList';
import Tagline from '../components/Tagline';

export default function Home() {
  const [results, setResults] = useState([]);
  const [viewCount, setViewCount] = useState(null);

  useEffect(() => {
    const updateAndFetchViews = async () => {
      const docRef = doc(db, 'analytics', 'siteViews');

      try {
        // Increment view count
        await updateDoc(docRef, {
          count: increment(1),
        });

        // Fetch updated count
        const updatedDoc = await getDoc(docRef);
        if (updatedDoc.exists()) {
          setViewCount(updatedDoc.data().count);
        }
      } catch (err) {
        console.error('Error updating view count:', err);
      }
    };

    updateAndFetchViews();
  }, []);

  return (
    <div className="view-notes-container">
      <Tagline line1="Students search." line2="Edugle finds." />
      <p className="view-notes-subtitle">
        Filter by subject, semester, or branch and get study material instantly.
      </p>

      {viewCount !== null && (
        <p style={{ fontSize: '0.9rem', marginTop: '-1rem', marginBottom: '1rem', color: '#999' }}>
          👀 {viewCount} total views
        </p>
      )}

      <ChatStyleSearch setResults={setResults} />
      <NotesList results={results} />


      <h2 className="view-notes-title">PYQ section <span className="gradient-text">coming soon</span>. </h2>
      <p className="view-notes-subtitle">
        stay tuned.
      </p>
    </div>
  );
}



