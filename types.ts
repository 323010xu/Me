export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Project' | 'Paper' | 'Award';
  description: string; // 用于列表页卡片展示的简短描述
  imageUrl?: string;   // 列表页封面图 & 详情页Hero图
  link?: string;       // 外部链接
  date: string;
  techStack?: string[]; // 技术栈标签

  // 详情页结构化内容
  detailContent: {
    overview: string; // 项目概述
    background: {
      painPoints: string[]; // 痛点列表
      competitorAnalysis: string; // 竞品分析
    };
    design: {
      thinking: string; // 设计思路
      prototypes: string[]; // 设计原型图片URL列表
    };
    showcase: {
      videos: string[]; // 展示视频URL列表
      posters: string[]; // 海报图片URL列表
    };
  };
}

export interface IdeaItem {
  id: string;
  title: string;
  status: 'Planning' | 'In Progress' | 'Testing';
  progress: number; // 0 - 100
  description: string;
  tags: string[];
}

export interface Comment {
  id: number;
  user: string;
  content: string;
  date: string;
}

export enum NavRoute {
  HOME = '/',
  EXPERIENCE = '/experience',
  ACHIEVEMENTS = '/achievements',
  IDEAS = '/ideas',
  PROJECT_DETAIL = '/achievements/:id',
}

export interface IdeaState {
  topic: string;
  content: string;
  isGenerating: boolean;
  error: string | null;
}