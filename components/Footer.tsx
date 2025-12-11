import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">呆呆阅读 Readio</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              专为儿童大屏阅读场景打造的 PDF + 音频同步阅读器。
              让孩子像使用点读机一样听绘本，跟随音频学习英语阅读。
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/" className="hover:text-white transition-colors">首页</a></li>
              <li><a href="#/guide" className="hover:text-white transition-colors">使用说明</a></li>
              <li><a href="#/download" className="hover:text-white transition-colors">下载应用</a></li>
              <li><a href="#/about" className="hover:text-white transition-colors">关于我们</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">联系我们</h3>
            <div className="flex items-center gap-2 mb-2">
              <Github size={18} />
              <a href="#" className="text-sm hover:text-white transition-colors">@静听海语</a>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              Made with <Heart size={14} className="inline text-red-500" /> for kids learning.
            </p>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} 呆呆阅读 Readio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;