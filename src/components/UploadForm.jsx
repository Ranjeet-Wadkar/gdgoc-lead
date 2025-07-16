import './UploadForm.css';
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';


export default function UploadForm() {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [semester, setSemester] = useState('');
  const [branch, setBranch] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const semesterOptions = Array.from({ length: 8 }, (_, i) => (i + 1).toString());

  const branchOptions = [
    "CSE", "IT", "AIDS", "AIML", "ECE", "ENTC", "MECH", "ELEC"
  ];

  const subjectOptions = [
    "CN", "DMW", "OS", "DBMS", "DSA", "AI", "ML", "DL", "TOC", "SE", "COA", "OOP", "Maths", "WT"
  ]; // You can later filter based on branch/semester

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!url.trim().startsWith('http')) {
      setMessage("❌ Please provide a valid public file link.");
      return;
    }

    setUploading(true);
    setMessage('');

    try {
      await addDoc(collection(db, "resources"), {
        title: title.trim(),
        subject,
        semester,
        branch,
        description: description.trim(),
        url: url.trim(),
        created_at: serverTimestamp(),
      });

      setMessage("✅ Note uploaded successfully!");
      setTitle('');
      setSubject('');
      setSemester('');
      setBranch('');
      setDescription('');
      setUrl('');
    } catch (error) {
      setMessage("❌ Upload failed: " + error.message);
    }

    setUploading(false);
  };

  return (
    <div className="upload-form-container">
      <form onSubmit={handleUpload}>
        <h2>Upload Notes</h2>
  
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., CNN Full Notes" required />
  
        <label>Branch</label>
        <select value={branch} onChange={(e) => setBranch(e.target.value)} required>
          <option value="">-- Select Branch --</option>
          {branchOptions.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
  
        <label>Semester</label>
        <select value={semester} onChange={(e) => setSemester(e.target.value)} required>
          <option value="">-- Select Semester --</option>
          {semesterOptions.map((sem) => (
            <option key={sem} value={sem}>{sem}</option>
          ))}
        </select>
  
        <label>Subject</label>
        <select value={subject} onChange={(e) => setSubject(e.target.value)} required>
          <option value="">-- Select Subject --</option>
          {subjectOptions.map((subj) => (
            <option key={subj} value={subj}>{subj}</option>
          ))}
        </select>
  
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Short description (topics covered, year, etc.)" required />
  
        <label>File Link</label>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Paste Google Drive or external PDF link" required />
  
        <button type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
  
        {message && (
          <p style={{ marginTop: '1rem', color: message.startsWith("✅") ? "lightgreen" : "crimson" }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
  
    
}
