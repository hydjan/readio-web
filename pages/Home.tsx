import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Volume2, Layers, Repeat, MousePointer2, Settings, Wifi, Download } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; color?: string }> = ({ icon, title, desc, color = "bg-white" }) => (
  <div className={`p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all ${color}`}>
    <div className="mb-4 text-brand-600">{icon}</div>
    <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

const ModeCard: React.FC<{ title: string; subtitle: string; features: string[]; highlight?: boolean }> = ({ title, subtitle, features, highlight }) => (
  <div className={`relative p-6 rounded-2xl border ${highlight ? 'border-brand-500 bg-brand-50 shadow-lg scale-105 z-10' : 'border-slate-200 bg-white shadow-sm'}`}>
    {highlight && <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg font-bold">推荐</div>}
    <h4 className="text-xl font-bold text-slate-900">{title}</h4>
    <p className="text-sm text-slate-500 mb-4 font-medium">{subtitle}</p>
    <ul className="space-y-2">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
          <span className="text-brand-500 mt-0.5">•</span>
          {f}
        </li>
      ))}
    </ul>
  </div>
);

// 新增：轮播图组件
const HeroCarousel: React.FC = () => {
  // 使用本地图片路径，请在 images 文件夹下放入对应的 jpg/png 图片
  const images = [
    "images/screenshot-1.png",
    "images/screenshot-2.png",
    "images/screenshot-3.png",
    "images/screenshot-4.png"
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4秒切换
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700/50 bg-slate-800 group">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={img} alt={`App Screenshot ${index + 1}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-brand-400' : 'w-1.5 bg-white/40 hover:bg-white/80'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-16 pb-24 lg:pt-32 lg:pb-32">
        {/* Background Image also local placeholder */}
        <div className="absolute inset-0 opacity-20 bg-slate-800 bg-[url('images/hero-bg.svg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Column (Carousel) - Order 2 on Mobile, Order 1 on Desktop */}
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-brand-500/20 rounded-full blur-3xl opacity-40 -z-10 animate-pulse"></div>
              <HeroCarousel />
              <div className="mt-4 text-center">
                <p className="text-xs text-slate-500 font-mono">App 界面预览 (TV / Tablet / PC)</p>
              </div>
            </div>

            {/* Right Column (Text) - Order 1 on Mobile, Order 2 on Desktop */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-300 border border-brand-500/20 text-sm font-semibold tracking-wide uppercase">
                <span className="flex items-center text-white gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                  </span>
                  v0.0.7 正式发布
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                呆呆阅读 <span className="text-brand-400">Readio</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                专为儿童大屏阅读打造的 <strong className="text-white">PDF + 音频同步阅读器</strong>。<br className="hidden lg:block" />
                让每一本绘本都能“播放音频 + 自动翻页”。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link to="/download" className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2">
                  <Layers size={20} />
                  立即下载
                </Link>
                <Link to="/guide" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
                  <Monitor size={20} />
                  使用说明
                </Link>
              </div>

              <div className="text-slate-400 text-sm font-medium flex items-center justify-center lg:justify-start gap-6">
                <span className="flex items-center gap-2"><Monitor size={16} /> TV/PC</span>
                <span className="flex items-center gap-2"><Wifi size={16} /> NAS/WebDAV</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Intro Stats/Summary */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Monitor size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">大屏优化</h3>
              <p className="text-slate-500">专为电视和遥控器设计，孩子无需近距离操作，保护视力。</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Repeat size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">音画同步</h3>
              <p className="text-slate-500">通过 sync.json 实现毫秒级精准对齐，音频播放时自动翻页。</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Wifi size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">网盘直连</h3>
              <p className="text-slate-500">支持 WebDAV / SMB / NAS，全家设备共享同一个绘本库。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modes Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">四种阅读模式</h2>
            <p className="text-slate-600">满足从“纯阅读”到“强力跟读”的所有需求</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ModeCard
              title="普通阅读"
              subtitle="仅 PDF"
              features={["显示 PDF 画面", "无音频干扰", "手动翻页", "适合：安静阅读教材"]}
            />
            <ModeCard
              title="听绘本模式"
              subtitle="PDF + 音频"
              features={["播放音频", "手动翻页", "可升级为同步模式", "适合：未做同步的绘本"]}
            />
            <ModeCard
              title="自动同步模式"
              subtitle="PDF + 音频 + Sync"
              features={["音频自动带动翻页", "点击页面跳音频", "波形可视化", "适合：英语磨耳朵、跟读"]}
              highlight={true}
            />
            <ModeCard
              title="音频播放模式"
              subtitle="仅音频"
              features={["显示音频波形", "支持自动分句", "无画面干扰", "适合：睡前听故事"]}
            />
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">为什么它是儿童学英语的神器？</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-green-100 p-2 rounded-lg text-green-600 h-fit"><MousePointer2 size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-800">像点读机一样简单</h4>
                    <p className="text-slate-600 text-sm mt-1">孩子不用操作也能跟读，解放家长双手。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-100 p-2 rounded-lg text-blue-600 h-fit"><Settings size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-800">自定义同步编辑器</h4>
                    <p className="text-slate-600 text-sm mt-1">内置 SyncManager，家长可精确调整每一页的起止时间。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-orange-100 p-2 rounded-lg text-orange-600 h-fit"><Layers size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-800">支持无限扩展资源</h4>
                    <p className="text-slate-600 text-sm mt-1">不是封闭生态！支持导入任何 PDF 和 MP3，支持 OpenList/AList 挂载。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              {/* Use local image for feature preview */}
              <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-slate-200">
                <img src="images/screenshot-2.png" alt="App Screenshot Interface" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg">
                  <p className="font-mono text-xs text-slate-500">ReaderPage 界面预览：全屏 PDF，底部控制栏</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好开始家庭大屏阅读了吗？</h2>
          <p className="text-brand-100 text-lg mb-10">无论是本地文件，还是家庭 NAS 云盘，呆呆阅读都能完美适配。</p>
          <Link to="/download" className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-50 transition-colors shadow-lg">
            <Download size={20} />
            下载最新版本
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;