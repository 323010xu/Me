import React from 'react';
import { Link } from 'react-router-dom';
import { ACHIEVEMENTS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-dark mb-4">成果与项目</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          这里展示了我的一些个人项目、发表的论文以及获得的奖项。点击项目可以查看详细介绍。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ACHIEVEMENTS.map((item) => (
          <Link 
            to={`/achievements/${item.id}`}
            key={item.id} 
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col cursor-pointer block"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 text-xs font-bold rounded text-white ${
                  item.category === 'Project' ? 'bg-blue-500' :
                  item.category === 'Paper' ? 'bg-purple-500' :
                  'bg-yellow-500'
                }`}>
                  {item.category === 'Project' ? '项目' : item.category === 'Paper' ? '论文' : '奖项'}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="text-xs text-gray-400 mb-2 flex items-center">
                <i className="fa-regular fa-clock mr-1"></i> {item.date}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                {item.description}
              </p>
              
              <div className="mt-auto w-full py-2 px-4 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all flex items-center justify-center">
                查看详情 <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Achievements;