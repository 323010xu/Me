// 这是一个模拟服务，不再依赖 @google/genai
// 这样您可以在没有 API Key 的情况下部署网站

export const generateIdeaExpansion = async (topic: string): Promise<string> => {
  // 模拟网络延迟，让体验更真实
  await new Promise(resolve => setTimeout(resolve, 1000));

  return `### 【演示模式响应】关于 "${topic}" 的分析

由于当前网站运行在**纯静态模式**（未配置 Google API Key），AI 实时生成功能已暂停。

在完整功能版本中，AI 将会为您分析：
1. **可行性评估**：基于当前技术栈的实现难度。
2. **创新方向**：结合市场趋势提出的改进建议。
3. **潜在挑战**：可能遇到的技术瓶颈或竞争压力。

您可以继续浏览网站的其他部分，如“个人经历”或“成果展示”。`;
};