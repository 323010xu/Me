import React, { useState, useEffect } from 'react';
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 组件挂载后设置加载状态，触发 CSS transition
    // 设置一个小延迟确保浏览器完成初始渲染，使动画更丝滑
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-900 relative">
      {/* 
        开场白屏动效遮罩 
        - z-[9999]: 确保在最上层
        - pointer-events-none: 确保动画结束后不阻挡鼠标点击
        - transition-opacity duration-1000: 1秒钟的渐变时间
      */}
      <div 
        className={`fixed inset-0 bg-white z-[9999] transition-opacity duration-1000 ease-out pointer-events-none ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      />

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