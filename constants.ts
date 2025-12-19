import { ExperienceItem, AchievementItem, IdeaItem, Comment } from './types';

export const USER_INFO = {
  name: "张三",
  title: "全栈开发工程师 & AI 研究员",
  bio: "致力于通过技术改变世界。热爱开源，专注于前端架构与大模型应用落地。",
  email: "contact@example.com",
  github: "https://github.com/example",
  // 示例链接
  google: "https://www.google.com",
  // QQ 推广链接格式 (WPA)，实际使用时替换为您的 QQ 号
  qq: "http://wpa.qq.com/msgrd?v=3&uin=12345678&site=qq&menu=yes",
  location: "中国, 北京"
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "1",
    role: "高级前端工程师",
    company: "未来科技股份有限公司",
    period: "2022 - 至今",
    description: "负责公司核心SaaS平台的前端架构设计与重构，提升页面加载速度40%。主导引入React 18与TypeScript技术栈。",
    skills: ["React", "TypeScript", "Next.js", "Performance"]
  },
  {
    id: "2",
    role: "全栈开发工程师",
    company: "创新互联网初创团队",
    period: "2020 - 2022",
    description: "从0到1构建电商小程序后端，使用Node.js与MongoDB。实现了高并发秒杀系统的核心逻辑。",
    skills: ["Node.js", "MongoDB", "Redis", "Mini Program"]
  },
  {
    id: "3",
    role: "软件工程实习生",
    company: "知名互联网大厂",
    period: "2019 - 2020",
    description: "参与内部工具平台开发，协助团队完成自动化测试覆盖率提升至85%。",
    skills: ["Java", "Spring Boot", "Testing"]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "1",
    title: "基于Gemini的智能知识库助手",
    category: "Project",
    description: "利用RAG技术构建的企业级知识库问答系统，支持多模态输入，准确率达到95%以上。",
    imageUrl: "https://picsum.photos/800/600?random=1",
    date: "2023-12",
    techStack: ["React", "Python", "LangChain", "Gemini API", "Pinecone"],
    link: "https://github.com",
    detailContent: {
      overview: "这是一个为了解决企业内部文档检索困难而设计的智能助手。传统关键词搜索往往难以理解上下文，而该项目利用大语言模型的语义理解能力，结合检索增强生成（RAG）技术，实现了能够精准回答复杂问题的问答系统。",
      background: {
        painPoints: [
          "企业内部文档格式繁杂（PDF, Word, Markdown），难以统一管理和检索。",
          "传统搜索只能匹配关键词，无法回答“总结一下XX项目的风险”这类概括性问题。",
          "新员工入职查阅资料效率低下，需要人工反复询问老员工。"
        ],
        competitorAnalysis: "目前市面上的竞品主要集中在纯文本搜索，或者昂贵的SaaS服务。我们的方案优势在于：1. 私有化部署，数据更安全；2. 针对技术文档优化，识别代码块更精准；3. 成本低廉，基于Gemini Flash模型，性价比极高。"
      },
      design: {
        thinking: "采用 'Ingestion -> Retrieval -> Generation' 的经典RAG架构。但在Ingestion阶段，我们设计了专门的预处理管道，通过OCR和布局分析提取PDF中的表格数据。在Generation阶段，引入了Prompt Engineering来规范化回答的语气。",
        prototypes: [
          "https://picsum.photos/600/400?random=101", // 模拟原型图
          "https://picsum.photos/600/400?random=102"
        ]
      },
      showcase: {
        videos: [
           "https://www.w3schools.com/html/mov_bbb.mp4" // 示例视频链接
        ],
        posters: [
          "https://picsum.photos/400/600?random=103", // 模拟海报
          "https://picsum.photos/400/600?random=104"
        ]
      }
    }
  },
  {
    id: "2",
    title: "大规模分布式系统优化策略",
    category: "Paper",
    description: "发表于国内核心期刊，探讨了基于一致性哈希的负载均衡算法改进。",
    imageUrl: "https://picsum.photos/800/600?random=2",
    date: "2022-08",
    techStack: ["Distributed Systems", "Algorithm", "Java", "Simulation"],
    detailContent: {
      overview: "随着云计算服务的普及，分布式缓存系统的负载均衡问题日益凸显。本论文提出了一种改进的一致性哈希算法（Bounded Load Consistent Hashing），旨在解决传统算法在节点动态增减时可能出现的数据倾斜问题。",
      background: {
        painPoints: [
          "传统一致性哈希在节点数较少时，容易出现数据倾斜（Hash环分布不均）。",
          "突发热点流量会导致某些节点过载，引发雪崩效应。",
          "现有算法在扩容时的数据迁移量不可控，影响线上服务稳定性。"
        ],
        competitorAnalysis: "对比了 Google 的 Maglev 算法和 Ketama 算法。Maglev 构建表耗时较长，不适合频繁变动的场景；Ketama 虚拟节点策略虽然缓解了倾斜，但在极端负载下仍无上限保障。我们的算法在两者之间取得了平衡。"
      },
      design: {
        thinking: "引入“有界负载”的概念，即在哈希映射时，除了考虑Hash环的距离，还增加一个“当前负载计数器”。当某个节点的负载达到平均负载的(1+ε)倍时，强制跳过该节点，寻找下一个可用节点。",
        prototypes: [
          "https://picsum.photos/600/400?random=201",
          "https://picsum.photos/600/400?random=202"
        ]
      },
      showcase: {
        videos: [],
        posters: [
          "https://picsum.photos/400/600?random=203"
        ]
      }
    }
  },
  {
    id: "3",
    title: "年度最佳极客奖",
    category: "Award",
    description: "在公司年度Hackathon中凭借无障碍辅助工具项目获得一等奖。",
    imageUrl: "https://picsum.photos/800/600?random=3",
    date: "2021-11",
    techStack: ["Web Speech API", "Computer Vision", "Accessibility"],
    detailContent: {
      overview: "在 24 小时极限编程挑战中，我们团队关注视障人士的互联网使用体验。我们开发了一款浏览器插件，能够利用计算机视觉技术自动为网页上的无标签图片生成描述性 Alt 文本，并优化了屏幕阅读器的导航逻辑。",
      background: {
        painPoints: [
          "互联网上超过 60% 的图片缺失 Alt 属性，视障人士无法感知。",
          "现有的读屏软件操作逻辑复杂，缺乏语义化的跳转功能。",
          "网页动态更新的内容往往无法被及时朗读。"
        ],
        competitorAnalysis: "大多数竞品是基于规则的静态检查工具（如Lighthouse），无法实时修复体验。微软的Seeing AI主要针对移动端APP。我们做的是基于浏览器的实时注入方案，即插即用。"
      },
      design: {
        thinking: "利用 Gemini Vision API 实时分析视口内的图片，生成简短描述并注入 DOM。同时监听键盘事件，提供基于语义（如'跳转到下一个主要内容区'）的快捷键。",
        prototypes: [
          "https://picsum.photos/600/400?random=301"
        ]
      },
      showcase: {
        videos: [
          "https://www.w3schools.com/html/movie.mp4",
          "https://www.w3schools.com/html/mov_bbb.mp4"
        ],
        posters: [
           "https://picsum.photos/400/600?random=302"
        ]
      }
    }
  },
  {
    id: "4",
    title: "React可视化组件库",
    category: "Project",
    description: "开源了一套轻量级数据可视化组件库，GitHub Star数超过500+。",
    imageUrl: "https://picsum.photos/800/600?random=4",
    date: "2020-05",
    techStack: ["React", "D3.js", "Canvas", "TypeScript"],
    link: "https://github.com",
    detailContent: {
      overview: "针对中后台仪表盘开发中常见的图表需求，我开发了这套基于 D3.js 封装的 React 组件库。它旨在提供一套配置简单、性能优异且视觉效果现代化的图表解决方案，特别针对移动端进行了触摸优化。",
      background: {
        painPoints: [
          "ECharts虽然强大但包体积过大，配置项过于复杂。",
          "Recharts在处理大量数据点（>10000）时性能下降明显。",
          "由于设计规范不统一，不同项目中的图表风格割裂。"
        ],
        competitorAnalysis: "主要竞品是 Ant Design Charts 和 Recharts。我们的定位是“小而美”，专注解决 80% 的常用场景，牺牲极度定制化能力换取极致的性能和开发体验。"
      },
      design: {
        thinking: "采用分层架构：底层使用 D3 计算布局，中间层根据数据量自动切换 SVG (少量数据) 或 Canvas (大量数据) 渲染引擎。API设计遵循 'Convention over Configuration' 原则。",
        prototypes: [
           "https://picsum.photos/600/400?random=401",
           "https://picsum.photos/600/400?random=402"
        ]
      },
      showcase: {
        videos: [
          "https://www.w3schools.com/html/mov_bbb.mp4"
        ],
        posters: [
          "https://picsum.photos/400/600?random=403",
          "https://picsum.photos/400/600?random=404"
        ]
      }
    }
  }
];

export const CURRENT_IDEAS: IdeaItem[] = [
  {
    id: "1",
    title: "个人知识图谱可视化工具",
    status: "In Progress",
    progress: 65,
    description: "正在构建一个可以将Obsidian笔记自动转化为3D知识图谱的Web工具，计划支持WebXR浏览。",
    tags: ["Three.js", "Graph DB", "Obsidian Plugin"]
  },
  {
    id: "2",
    title: "边缘计算容器调度平台",
    status: "Testing",
    progress: 90,
    description: "针对IoT设备设计的轻量级容器调度系统，目前正在树莓派集群上进行压力测试。",
    tags: ["Go", "K3s", "IoT"]
  },
  {
    id: "3",
    title: "AI 辅助代码审查 Agent",
    status: "Planning",
    progress: 20,
    description: "设想利用大模型自动Review PR代码，并提出安全性建议，目前处于Prompt Engineering阶段。",
    tags: ["LLM", "DevOps", "Security"]
  }
];

export const INITIAL_COMMENTS: Comment[] = [
  {
    id: 1,
    user: "Alice",
    content: "博主的项目经验非常丰富，基于Gemini的那个项目很有启发性！",
    date: "2024-05-20"
  },
  {
    id: 2,
    user: "Bob",
    content: "期待看到可视化组件库的更多更新，界面很漂亮。",
    date: "2024-05-21"
  }
];