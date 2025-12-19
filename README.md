# 个人网站部署指南

本文档将指导您如何将此个人网站项目部署到 GitHub Pages，使其成为一个永久可访问的在线站点。

---

## 🌐 如何访问主页

当您完成下方的部署步骤后，您的网站就可以通过浏览器访问了。

**访问地址格式：**
```text
https://<您的GitHub用户名>.github.io/<仓库名>/
```

**示例：**
如果您在 `package.json` 中配置的 `homepage` 是 `https://323010xu.github.io/Me`：
- **用户名**：323010xu
- **仓库名**：Me
- **您的主页链接即为**：👉 **https://323010xu.github.io/Me/**

> **注意**：首次部署后，GitHub 可能需要 1-5 分钟的时间来构建页面，如果打开是 404，请稍等片刻刷新即可。

---

## 🚀 部署步骤 (保姆级教程)

### 第一步：准备 GitHub 仓库

1.  登录 [GitHub](https://github.com)。
2.  点击右上角的 `+` 号，选择 **New repository** (新建仓库)。
3.  **仓库名称 (Repository name)**：建议填写 `Me` (与您的 homepage 链接后缀保持一致)。
4.  确保选择 **Public** (公开)。
5.  点击 **Create repository**。

### 第二步：本地环境准备

确保您的电脑上已安装 [Node.js](https://nodejs.org/) (建议版本 v18 或更高)。

1.  打开终端 (Terminal) 或命令提示符。
2.  进入您的项目文件夹。
3.  **安装依赖**：
    执行以下命令安装项目所需的库（React, Vite 等）：
    ```bash
    npm install
    ```

### 第三步：检查配置信息

打开项目中的 `package.json` 文件，确认 `homepage` 字段与您第一步创建的仓库地址匹配：

```json
"homepage": "https://323010xu.github.io/Me",
```
*如果您的 GitHub 用户名不是 `323010xu` 或者仓库名不是 `Me`，请务必修改此行。*

### 第四步：推送代码到 GitHub

在终端中依次执行以下命令，将本地代码上传到 GitHub：

```bash
# 初始化 Git 仓库 (如果尚未初始化)
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 关联远程仓库 (请替换 <您的用户名> 和 <仓库名>)
# 例如：git remote add origin https://github.com/323010xu/Me.git
git remote add origin https://github.com/<您的用户名>/<仓库名>.git

# 推送到主分支
git push -u origin main
```

### 第五步：一键部署

在终端执行部署命令：

```bash
npm run deploy
```

**发生了什么？**
1.  这个命令会自动运行 `npm run build`，将您的 TypeScript 代码打包成浏览器可读的静态文件（存放在 `dist` 文件夹）。
2.  然后利用 `gh-pages` 工具，将 `dist` 文件夹的内容推送到仓库的 `gh-pages` 分支。

### 第六步：开启 GitHub Pages (最后一步！)

1.  回到 GitHub 仓库页面。
2.  点击 **Settings** (设置) -> 左侧边栏的 **Pages**。
3.  在 **Build and deployment** 下：
    *   **Source**: 选择 `Deploy from a branch`。
    *   **Branch**: 这里的选择至关重要！请选择 **`gh-pages`** 分支，文件夹选择 `/ (root)`。
4.  点击 **Save**。

等待页面顶部出现绿色的提示框，里面会包含您的网站链接。

---

## 🔄 如何更新内容？

以后每次修改了 `constants.ts` 里的内容或调整了代码后，只需执行两步：

1.  提交代码（可选，但建议养成好习惯）：
    ```bash
    git add .
    git commit -m "更新了项目经历"
    git push
    ```

2.  **重新部署**（必须执行此步才能更新线上网站）：
    ```bash
    npm run deploy
    ```

---

## 📂 核心文件结构说明

- **`constants.ts`**: **核心数据库**。所有的个人信息、项目成果数据都存储在这里。修改此文件即可更新网站内容。
- **`types.ts`**: 数据类型定义。
- **`App.tsx`**: 网站主入口及路由配置。
- **`vite.config.ts`**: 构建工具配置，已预设好适配 GitHub Pages。
