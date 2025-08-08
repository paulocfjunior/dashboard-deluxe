import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
const AdminPage = lazy(() => import("./components/AdminPage"));

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/admin">Admin</Link>
      </nav>
      <Suspense fallback={
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '50vh',
          fontSize: '18px',
          color: '#777'
        }}>
          Loading...
        </div>
      }>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
export default App;
