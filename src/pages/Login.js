// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [selectedRole, setSelectedRole] = useState(null); // "admin" or "user"
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  const handleSignIn = () => {
    // Sign-in functionality to be added here with backend connection
    alert('Sign in functionality');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="./AquaNidhi_logo.png" alt="AquaNidhi Logo" className="logo" />
        <h1>AQUANIDHI</h1>
        <p>The Ultimate Fisheries Data Hub of India</p>
      </div>

      <div className="login-right">
        <img src="/AquaNidhi_logo.png" alt="AquaNidhi Logo" className="mini-logo" />
        <h1>AQUANIDHI</h1>

        <div className="role-selection">
          <button
            className={`role-button ${selectedRole === 'admin' ? 'selected' : ''}`}
            onClick={() => handleRoleClick('admin')}
          >
            Admin
          </button>
          <button
            className={`role-button ${selectedRole === 'user' ? 'selected' : ''}`}
            onClick={() => handleRoleClick('user')}
          >
            User
          </button>
        </div>

        <div className="login-form">
          <label>Login</label>
          <input type="text" placeholder="Email or phone number" />

          <label>Password</label>
          <div className="password-input">
            <input type="password" placeholder="Enter password" />
            <span className="show-password">👁️</span>
          </div>

          <button className="sign-in-button" onClick={handleSignIn}>Sign in</button>
        </div>

        <p className="sign-up-text">
          Don’t have an account? <span onClick={handleSignUpClick} className="sign-up-link">Sign up now</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
// // Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Login.css';

// function Login() {
//   const [selectedRole, setSelectedRole] = useState('admin'); // Default to "admin"
//   const navigate = useNavigate();

//   const handleSignIn = () => {
//     if (selectedRole === 'admin') {
//       navigate('/admin-dashboard'); // Redirect to Admin Dashboard
//     } else {
//       alert('Please select the "Admin" role to proceed.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-left">
//         <img src="./AquaNidhi_logo.png" alt="AquaNidhi Logo" className="logo" />
//         <h1>AQUANIDHI</h1>
//         <p>The Ultimate Fisheries Data Hub of India</p>
//       </div>

//       <div className="login-right">
//         <img src="/AquaNidhi_logo.png" alt="AquaNidhi Logo" className="mini-logo" />
//         <h1>AQUANIDHI</h1>

//         <div className="role-selection">
//           <button className="role-button selected">Admin</button>
//         </div>

//         <div className="login-form">
//           <button className="sign-in-button" onClick={handleSignIn}>
//             Sign in
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
