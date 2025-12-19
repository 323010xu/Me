import React from 'react';
import { CURRENT_IDEAS } from '../constants';

const Ideas: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Planning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Testing': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'Planning': return '构思规划';
      case 'In Progress': return '正在研发';
      case 'Testing': return '测试阶段';
      default: return status;
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-dark mb-4">
          孵化室 & 进行中
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          这里展示了我当前正在投入精力的项目和想法。它们虽然还未完全成熟，但代表了我探索的方向。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CURRENT_IDEAS.map((idea) => (
          <div key={idea.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(idea.status)}`}>
                {getStatusLabel(idea.status)}
              </div>
              <span className="text-sm font-bold text-gray-400">{idea.progress}%</span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">{idea.title}</h3>
            
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
              {idea.description}
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${idea.progress}%` }}
              ></div>
            </div>

            <div className="border-t border-gray-100 pt-4 mt-auto">
              <div className="flex flex-wrap gap-2">
                {idea.tags.map(tag => (
                  <span key={tag} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Placeholder Card for "New Idea" */}
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[300px] hover:border-primary/50 hover:bg-blue-50/30 transition-colors group cursor-pointer">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:shadow-md transition-all">
            <i className="fa-solid fa-plus text-2xl text-gray-400 group-hover:text-primary"></i>
          </div>
          <h3 className="text-lg font-medium text-gray-600 group-hover:text-primary">更多想法酝酿中</h3>
          <p className="text-sm text-gray-400 mt-2">敬请期待...</p>
        </div>
      </div>
    </div>
  );
};

export default Ideas;