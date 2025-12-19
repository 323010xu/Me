import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ACHIEVEMENTS } from '../constants';
import { NavRoute } from '../types';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = ACHIEVEMENTS.find(item => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">项目未找到</h2>
        <button 
          onClick={() => navigate(NavRoute.ACHIEVEMENTS)}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          返回列表
        </button>
      </div>
    );
  }

  const { detailContent } = project;

  return (
    <div className="animate-fade-in bg-white min-h-screen pb-20">
      {/* 1. Hero Section (大图 + 基础信息) */}
      <div className="w-full h-[45vh] relative overflow-hidden bg-gray-900 group">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end">
          <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 pb-12 text-white">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold bg-primary rounded backdrop-blur-md">
              {project.category === 'Project' ? 'PROJECT' : project.category === 'Paper' ? 'PAPER' : 'AWARD'}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 shadow-sm">{project.title}</h1>
            <div className="flex flex-wrap gap-4 items-center text-sm md:text-base text-gray-300">
              <span className="flex items-center"><i className="fa-regular fa-clock mr-2"></i> {project.date}</span>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center hover:text-white transition-colors">
                  <i className="fa-solid fa-link mr-2"></i> 访问链接
                </a>
              )}
            </div>
            {/* Tech Stack Tags */}
            {project.techStack && (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 left-4 md:left-8 w-10 h-10 bg-black/30 backdrop-blur-md hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-all z-10 border border-white/20"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* 2. 项目概述 (Project Overview) */}
        <section className="py-12 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-2 h-8 bg-primary mr-3 rounded-full"></span>
            项目概述
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {detailContent.overview}
          </p>
        </section>

        {/* 3. 项目背景 (Project Background) */}
        <section className="py-12 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
             <span className="w-2 h-8 bg-purple-500 mr-3 rounded-full"></span>
             项目背景
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* 痛点 */}
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <i className="fa-solid fa-triangle-exclamation text-red-500 mr-2"></i> 痛点
              </h3>
              <ul className="space-y-3">
                {detailContent.background.painPoints.map((point, index) => (
                  <li key={index} className="flex items-start text-gray-700 text-sm md:text-base">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* 竞品分析 */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <i className="fa-solid fa-magnifying-glass-chart text-blue-500 mr-2"></i> 竞品分析
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {detailContent.background.competitorAnalysis}
              </p>
            </div>
          </div>
        </section>

        {/* 4. 设计方案 (Design Proposal) */}
        <section className="py-12 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-2 h-8 bg-yellow-500 mr-3 rounded-full"></span>
            设计方案
          </h2>

          {/* 设计思路 */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-3 border-l-4 border-yellow-200 pl-3">设计思路</h3>
            <p className="text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-xl">
              {detailContent.design.thinking}
            </p>
          </div>

          {/* 设计原型 */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-l-4 border-yellow-200 pl-3">设计原型</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {detailContent.design.prototypes.map((imgUrl, idx) => (
                <div key={idx} className="group relative rounded-xl overflow-hidden shadow-md border border-gray-100 aspect-video bg-gray-100">
                  <img src={imgUrl} alt={`Prototype ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. 最终展示 (Final Showcase) */}
        <section className="py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-2 h-8 bg-green-500 mr-3 rounded-full"></span>
            最终展示
          </h2>

          {/* 展示视频 */}
          {detailContent.showcase.videos.length > 0 && (
            <div className="mb-12">
              <h3 className="text-lg font-bold text-gray-800 mb-4 border-l-4 border-green-200 pl-3">展示视频</h3>
              <div className="grid gap-8">
                {detailContent.showcase.videos.map((videoUrl, idx) => (
                  <div key={idx} className="w-full rounded-xl overflow-hidden shadow-lg bg-black">
                    <video 
                      controls 
                      className="w-full aspect-video"
                      preload="metadata"
                      poster={project.imageUrl} // 使用项目主图作为视频封面预览
                    >
                      <source src={videoUrl} type="video/mp4" />
                      您的浏览器不支持 HTML5 视频播放。
                    </video>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 海报 */}
          {detailContent.showcase.posters.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4 border-l-4 border-green-200 pl-3">项目海报</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {detailContent.showcase.posters.map((posterUrl, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden shadow-lg border border-gray-100 group">
                     <img 
                       src={posterUrl} 
                       alt={`Poster ${idx + 1}`} 
                       className="w-full h-auto object-cover transition-all duration-500 group-hover:brightness-90"
                     />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

      </div>
    </div>
  );
};

export default ProjectDetail;