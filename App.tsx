import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Ideas from './pages/Ideas';
import ProjectDetail from './pages/ProjectDetail';
import { NavRoute } from './types';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-900 relative">
      <Navbar />
      
      <main className="flex-grow w-full">
        <Routes>
          <Route path={NavRoute.HOME} element={<Home />} />
          <Route path={NavRoute.EXPERIENCE} element={<Experience />} />
          <Route path={NavRoute.ACHIEVEMENTS} element={<Achievements />} />
          {/* Add dynamic route for project details */}
          <Route path="/achievements/:id" element={<ProjectDetail />} />
          <Route path={NavRoute.IDEAS} element={<Ideas />} />
          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to={NavRoute.HOME} replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;