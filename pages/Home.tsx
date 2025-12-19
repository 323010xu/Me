import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { USER_INFO, INITIAL_COMMENTS } from '../constants';
import { NavRoute, Comment } from '../types';

const Home: React.FC = () => {
  // Likes State
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  // Comments State
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  const [newCommentUser, setNewCommentUser] = useState('');
  const [newCommentContent, setNewCommentContent] = useState('');

  // Load likes from local storage on mount
  useEffect(() => {
    const storedLikes = localStorage.getItem('portfolio_likes');
    if (storedLikes) {
      setLikes(parseInt(storedLikes, 10));
    } else {
      setLikes(42); // Initial fake likes
    }

    const userLiked = localStorage.getItem('portfolio_has_liked');
    if (userLiked === 'true') {
      setHasLiked(true);
    }
  }, []);

  const handleLike = () => {
    if (hasLiked) return;
    
    const newCount = likes + 1;
    setLikes(newCount);
    setHasLiked(true);
    localStorage.setItem('portfolio_likes', newCount.toString());
    localStorage.setItem('portfolio_has_liked', 'true');
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentUser.trim() || !newCommentContent.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      user: newCommentUser,
      content: newCommentContent,
      date: new Date().toISOString().split('T')[0]
    };

    setComments([newComment, ...comments]);
    setNewCommentUser('');
    setNewCommentContent('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 animate-fade-in pb-12">
      {/* Hero Section */}
      <div className="text-center pt-10 md:pt-20">
        <div className="relative mb-8 inline-block">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
            <img 
              src="https://picsum.photos/400/400?grayscale" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white" title="Available for work"></div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-dark mb-4 tracking-tight">
          你好，我是 <span className="text-primary">{USER_INFO.name}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-secondary mb-6 max-w-2xl font-light mx-auto">
          {USER_INFO.title}
        </p>

        <p className="text-gray-600 mb-8 max-w-lg leading-relaxed mx-auto">
          {USER_INFO.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link 
            to={NavRoute.EXPERIENCE} 
            className="px-8 py-3 bg-primary text-white rounded-full font-semibold shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            查看经历
          </Link>
          <Link 
            to={NavRoute.ACHIEVEMENTS} 
            className="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-semibold shadow-sm hover:bg-gray-50 hover:border-gray-400 transition-all"
          >
            浏览成果
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <a 
            href={USER_INFO.github}
            target="_blank" 
            rel="noreferrer" 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-black hover:border-black/20 hover:bg-gray-50 transition-all shadow-sm text-xl transform hover:scale-110"
            title="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a 
            href={USER_INFO.google}
            target="_blank" 
            rel="noreferrer" 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all shadow-sm text-xl transform hover:scale-110"
            title="Google"
          >
            <i className="fa-brands fa-google"></i>
          </a>
          <a 
            href={USER_INFO.qq}
            target="_blank" 
            rel="noreferrer" 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#12B7F5] hover:border-[#12B7F5]/30 hover:bg-[#12B7F5]/10 transition-all shadow-sm text-xl transform hover:scale-110"
            title="QQ"
          >
            <i className="fa-brands fa-qq"></i>
          </a>
        </div>
      </div>
      
      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl w-full mb-20">
        <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="text-3xl text-primary mb-2"><i className="fa-solid fa-layer-group"></i></div>
          <h3 className="font-bold text-lg mb-1">架构设计</h3>
          <p className="text-sm text-gray-500">构建高可用、可扩展的现代Web应用</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="text-3xl text-purple-500 mb-2"><i className="fa-solid fa-brain"></i></div>
          <h3 className="font-bold text-lg mb-1">AI 赋能</h3>
          <p className="text-sm text-gray-500">探索大模型在实际业务中的落地场景</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="text-3xl text-green-500 mb-2"><i className="fa-solid fa-users"></i></div>
          <h3 className="font-bold text-lg mb-1">团队协作</h3>
          <p className="text-sm text-gray-500">敏捷开发拥护者，擅长技术分享</p>
        </div>
      </div>

      {/* Interaction Section: Likes & Comments */}
      <div className="w-full max-w-3xl border-t border-gray-200 pt-12">
        <h2 className="text-2xl font-bold text-center text-dark mb-8">访客互动</h2>
        
        {/* Like Button */}
        <div className="flex flex-col items-center mb-12">
          <button 
            onClick={handleLike}
            disabled={hasLiked}
            className={`flex items-center gap-2 px-6 py-3 rounded-full shadow-md transition-all transform ${
              hasLiked 
                ? 'bg-pink-50 text-pink-500 border border-pink-200 cursor-default' 
                : 'bg-white text-gray-600 border border-gray-200 hover:scale-110 hover:text-pink-500 hover:border-pink-200 active:scale-95'
            }`}
          >
            <i className={`fa-solid fa-heart text-2xl ${hasLiked ? 'text-pink-500' : 'text-gray-300 hover:text-pink-500'}`}></i>
            <span className="text-lg font-bold">{likes}</span>
            <span className="text-sm">{hasLiked ? '已赞' : '点赞'}</span>
          </button>
        </div>

        {/* Comment Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">留言板</h3>
          <form onSubmit={handleCommentSubmit} className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="您的昵称" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
                value={newCommentUser}
                onChange={(e) => setNewCommentUser(e.target.value)}
                maxLength={20}
              />
            </div>
            <div>
              <textarea 
                placeholder="写下您的想法..." 
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm resize-none"
                value={newCommentContent}
                onChange={(e) => setNewCommentContent(e.target.value)}
                maxLength={200}
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button 
                type="submit"
                disabled={!newCommentUser.trim() || !newCommentContent.trim()}
                className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                发表评论
              </button>
            </div>
          </form>
        </div>

        {/* Comment List */}
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-800 text-sm">{comment.user}</span>
                <span className="text-xs text-gray-400">{comment.date}</span>
              </div>
              <p className="text-gray-600 text-sm">{comment.content}</p>
            </div>
          ))}
          {comments.length === 0 && (
            <p className="text-center text-gray-400 py-4">暂无评论，快来抢沙发吧！</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;