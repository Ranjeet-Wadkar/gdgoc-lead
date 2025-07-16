// import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import { useNavigate } from "react-router-dom";
// import './Register.css'; // adjust path if needed

// export default function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const register = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <form onSubmit={register}>
//       <h2>Register</h2>
//       <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//       <button type="submit">Register</button>
//     </form>
//   );
// }
// import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import { useNavigate } from "react-router-dom";
// import './Register.css'; 

// export default function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const register = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <form onSubmit={register} className="upload-form-container">
//       <h2>Register</h2>
//       <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//       <button type="submit">Register</button>
//     </form>
//   );
// }
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import '../components/UploadForm.css'; // Reuse same glassmorphism style

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="upload-form-container">
      <form onSubmit={register}>
        <h2>Register</h2>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
