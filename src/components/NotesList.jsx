export default function NotesList({ results }) {
    // if (!results.length) return <p style={{ marginBottom: '2rem' }}>No results found.</p>;
  
    return (
      <div>
        {results.map((note) => (
          <div key={note.id} className="note-card">
            <h4>{note.title}</h4>
            <p><strong>Subject:</strong> {note.subject}</p>
            <p><strong>Semester:</strong> {note.semester}</p>
            <p>{note.description}</p>
            <a href={note.url} target="_blank" rel="noopener noreferrer">View Note</a>
          </div>
        ))}
      </div>
    );
  }
  