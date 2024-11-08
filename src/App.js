// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from './pages/Home.js';
// import LoginPage from './pages/Login.js';
// // import AdminDashboard from './pages/AdminDashboard';
// // import UserDashboard from './pages/UserDashboard';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={HomePage} />
//         <Route path="/login" component={LoginPage} />
//         {/* <Route path="/admin-dashboard" component={AdminDashboard} />
//         <Route path="/user-dashboard" component={UserDashboard} /> */}
//       </Switch>
//     </Router>
//   );
// }

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Login from './pages/Login'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;