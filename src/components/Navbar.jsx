// import { Link, useNavigate } from 'react-router-dom';
// import { auth } from '../firebase';
// import { onAuthStateChanged, signOut } from 'firebase/auth';
// import { useEffect, useState } from 'react';

// export default function Navbar() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsub();
//   }, []);

//   const handleLogout = async () => {
//     await signOut(auth);
//     navigate('/');
//   };

//   return (
//     <nav
//       style={{
//         padding: '1rem 2rem',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         gap: '1.5rem',
//         // boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//         // borderRadius: '0 0 12px 12px',
//         // backdropFilter: 'blur(16px) saturate(180%)',
//         // backgroundColor: 'rgba(17, 25, 40, 0.29)',
//         // border: '1px solid rgba(255, 255, 255, 0.125)',
//       }}
//     >
//       <Link to="/" className="nav-link">Home</Link>
//       <Link to="/viewNotes" className="nav-link">About me</Link>
//       {user && <Link to="/upload" className="nav-link">Upload</Link>}
//       {!user && <Link to="/login" className="nav-link">Login</Link>}
//       {!user && <Link to="/register" className="nav-link">Register</Link>}
//       {user && (
//         <button onClick={handleLogout} className="nav-link logout">
//           Logout
//         </button>
//       )}
//     </nav>
//   );
// }
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <nav
      style={{
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem',
        // boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        // borderRadius: '0 0 12px 12px',
        // backdropFilter: 'blur(16px) saturate(180%)',
        // backgroundColor: 'rgba(17, 25, 40, 0.29)',
        // border: '1px solid rgba(255, 255, 255, 0.125)',
      }}
    >
      <Link to="/" className="nav-link">Home</Link>
      {user && <Link to="/upload" className="nav-link">Upload</Link>}
      <Link to="/about" className="nav-link">About</Link>
      
      {!user && <Link to="/login" className="nav-link">Login</Link>}
      
      {/* {!user && <Link to="/register" className="nav-link">Register</Link>} */}
      {user && (
        <button onClick={handleLogout} className="nav-link logout">
          Logout
        </button>
      )}
    </nav>
  );
}
