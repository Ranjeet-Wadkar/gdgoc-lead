import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UploadForm from './components/UploadForm';
import Login from './pages/Login';
import ViewNotes from './pages/AboutMe';
import Register from './pages/Register';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<ViewNotes />} />
      </Routes>
    </Router>
  );
}
