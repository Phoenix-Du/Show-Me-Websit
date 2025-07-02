import React, { useState } from 'react';
import { AuroraBackground } from './components/aceternity/aurora-background';
import { CardContainer, CardBody, CardItem } from './components/aceternity/3d-card';
import { FloatingDock } from './components/aceternity/floating-dock';
import { PinContainer } from './components/aceternity/3d-pin';
import { Timeline } from './components/aceternity/timeline';
import { FileUpload } from './components/aceternity/file-upload';
import { GithubGlobe } from './components/aceternity/github-globe';
import { Button } from './components/aceternity/moving-border';
import { IconBrandGithub, IconBrandTiktok, IconMail, IconUser, IconCode, IconHeart } from '@tabler/icons-react';
import './App.css';

function App() {
  const [files, setFiles] = useState<File[]>([]);

  const timelineData = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            开始新的职业征程，专注于前端开发和用户体验设计
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/workspace.png"
              alt="工作空间"
              width="500"
              height="500"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/images/tech-bg.jpg"
              alt="技术背景"
              width="500"
              height="500"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            完成了多个全栈项目，掌握了现代Web开发技术栈
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ React & TypeScript
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Node.js & Express
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Three.js & 3D 开发
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            开始学习前端开发，从零基础到能够独立开发项目
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            这一年是转折的一年，决定投身于技术领域，追求创新与突破。
          </p>
        </div>
      ),
    },
  ];

  const dockItems = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com",
    },
    {
      title: "TikTok",
      icon: <IconBrandTiktok className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://tiktok.com",
    },
    {
      title: "邮箱",
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "mailto:contact@example.com",
    },
    {
      title: "关于我",
      icon: <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#about",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* 固定的3D Pin按钮 */}
      <div className="fixed top-8 right-8 z-50">
        <PinContainer title="联系我" href="mailto:contact@example.com">
          <div className="flex items-center justify-center w-20 h-20">
            <IconMail className="h-8 w-8 text-white" />
          </div>
        </PinContainer>
      </div>

      {/* 固定的浮动导航 */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock items={dockItems} />
      </div>

      {/* 封面区域 - Aurora Background */}
      <section className="relative">
        <AuroraBackground>
          <div className="relative flex flex-col gap-4 items-center justify-center px-4 h-screen">
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              欢迎来到我的世界
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              一个充满创意和技术的空间
            </div>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <span className="flex items-center gap-2">
                <IconCode className="h-4 w-4" />
                开始探索
              </span>
            </Button>
          </div>
        </AuroraBackground>
      </section>

      {/* 第一区域 - 3D Card 个人信息 */}
      <section className="py-20 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">关于我</h2>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                张三 - 全栈开发者
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                热爱技术，专注于现代Web开发，致力于创造优秀的用户体验
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/images/avatar.jpg"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="个人头像"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  <Button borderRadius="0.75rem" className="text-sm h-auto w-auto">
                    <span className="flex items-center gap-2">
                      <IconHeart className="h-4 w-4" />
                      关注我
                    </span>
                  </Button>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  查看作品
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>

      {/* 第二区域 - Timeline */}
      <section className="bg-neutral-900">
        <Timeline data={timelineData} />
      </section>

      {/* 第三区域 - GitHub Globe */}
      <section className="py-20 bg-gradient-to-b from-neutral-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <GithubGlobe />
        </div>
      </section>

      {/* 联系区域 - File Upload */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">联系我</h2>
            <p className="text-gray-300 text-lg">
              有项目合作或想法交流？请随时联系
            </p>
          </div>
          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-8">
            <FileUpload onChange={setFiles} />
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button borderRadius="1rem" className="w-full sm:w-auto">
                <span className="flex items-center gap-2">
                  <IconMail className="h-4 w-4" />
                  发送邮件
                </span>
              </Button>
              <Button borderRadius="1rem" className="w-full sm:w-auto">
                <span className="flex items-center gap-2">
                  <IconBrandGithub className="h-4 w-4" />
                  GitHub 联系
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-8 bg-black border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 张三. 保留所有权利。用 ❤️ 和 React 构建
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
