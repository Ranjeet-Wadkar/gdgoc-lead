import { useState } from 'react';
import UploadForm from '../components/UploadForm';
import SearchBar from '../components/SearchBar';
import NotesList from '../components/NotesList';

export default function Dashboard() {
  const [results, setResults] = useState([]);
  return (
    <div className="container">
      <h1>College Resource Navigator</h1>
      <SearchBar setResults={setResults} />
      <NotesList results={results} />
      <UploadForm />
    </div>
  );
}
