import React from 'react';
import { FileJson, HardDrive, Wifi, Edit3, HelpCircle } from 'lucide-react';

const CodeBlock: React.FC<{ title?: string; code: string; language?: string }> = ({ title, code, language = 'json' }) => (
  <div className="bg-slate-800 rounded-lg overflow-hidden shadow-md my-4">
    {title && <div className="bg-slate-900 px-4 py-2 text-xs text-slate-400 font-mono border-b border-slate-700">{title}</div>}
    <div className="p-4 overflow-x-auto">
      <pre className="text-sm font-mono text-green-400">
        <code>{code}</code>
      </pre>
    </div>
  </div>
);

const Guide: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 border-b border-slate-200 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">📘 使用说明与进阶指南</h1>
        <p className="text-xl text-slate-600">深入了解如何配置同步文件、连接网盘以及常见问题解答。</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Section 1: Sync Logic */}
          <section id="sync-logic">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-brand-100 p-2 rounded-lg text-brand-600"><FileJson size={24} /></div>
              <h2 className="text-2xl font-bold text-slate-800">核心机制：sync.json</h2>
            </div>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Readio 的核心在于 <code>.sync.json</code> 文件。它定义了每一页 PDF 对应音频的哪个时间段。
              当你拥有 PDF 和 MP3 文件后，你可以进入应用内的编辑器自动生成或手动创建此文件。
            </p>
            
            <CodeBlock 
              title="book.sync.json 结构示例" 
              code={`{
  "sync": {
    "pages": [
      { "index": 1, "startMs": 0, "endMs": 4824 },
      { "index": 2, "startMs": 4825, "endMs": 5849 }
      // ... 更多页面
    ]
  }
}`} 
            />
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
              <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2"><Edit3 size={16}/> 如何编辑？</h4>
              <p className="text-amber-700 text-sm">
                无需手动写代码！在阅读界面右上角点击“菜单” -{'>'} “编辑同步文件”，进入可视化编辑器 <strong>SyncManagerPage</strong>。
                你可以看到波形图，拖动竖线即可调整页面翻页时间点，支持本地和远程源直接保存。
              </p>
            </div>
          </section>

          {/* Section 2: File Sources */}
          <section id="sources" className="pt-8 border-t border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600"><HardDrive size={24} /></div>
              <h2 className="text-2xl font-bold text-slate-800">文件源配置</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">1. 本地路径</h3>
                <p className="text-slate-600 text-sm mb-3">直接读取设备存储中的文件夹。</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-slate-600 border rounded-lg">
                    <thead className="bg-slate-50 text-slate-700 uppercase">
                      <tr>
                        <th className="px-4 py-3">平台</th>
                        <th className="px-4 py-3">示例路径</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr><td className="px-4 py-2 font-medium">Windows</td><td className="px-4 py-2 font-mono text-xs">C:\Users\Name\Documents\Readio</td></tr>
                      <tr><td className="px-4 py-2 font-medium">Android</td><td className="px-4 py-2 font-mono text-xs">/storage/emulated/0/Readio</td></tr>
                      <tr><td className="px-4 py-2 font-medium">macOS</td><td className="px-4 py-2 font-mono text-xs">/Users/Name/Documents/Readio</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">2. WebDAV <span className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded">推荐</span></h3>
                <p className="text-slate-600 text-sm mb-3">支持 Nextcloud, 坚果云, AList, OpenList 等。</p>
                <CodeBlock 
                  title="WebDAV 配置示例"
                  code={`地址: http://192.168.1.10/dav
账号: admin
密码: your_password`} 
                  language="text"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">3. SMB / Windows 共享</h3>
                <p className="text-slate-600 text-sm mb-3">支持群晖、威联通、Windows 文件夹共享。</p>
                <CodeBlock 
                  title="SMB 配置示例"
                  code={`地址: smb://192.168.1.10/books
用户名: reader
密码: 123456`} 
                  language="text"
                />
              </div>
            </div>
          </section>

          {/* Section 3: FAQ */}
          <section id="faq" className="pt-8 border-t border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-pink-100 p-2 rounded-lg text-pink-600"><HelpCircle size={24} /></div>
              <h2 className="text-2xl font-bold text-slate-800">常见问题 FAQ</h2>
            </div>
            
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-5 hover:bg-slate-50 transition-colors">
                <h4 className="font-bold text-slate-900 mb-2">Q: 为什么播放音频时会卡顿？</h4>
                <p className="text-slate-600 text-sm">A: 如果使用远程源（WebDAV/SMB），请确保网络稳定。Readio 会尝试缓存音频，但在初次加载大文件时可能会有缓冲。</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 hover:bg-slate-50 transition-colors">
                <h4 className="font-bold text-slate-900 mb-2">Q: 安卓平板上部分 PDF 页面空白？</h4>
                <p className="text-slate-600 text-sm">A: 高清 PDF 占用内存较大。最新版本已对并发渲染做了限制（最多 2-3 页），请尝试更新到最新版。</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 hover:bg-slate-50 transition-colors">
                <h4 className="font-bold text-slate-900 mb-2">Q: 必须要有 sync.json 吗？</h4>
                <p className="text-slate-600 text-sm">A: 不是必须的。如果没有 sync.json，App 会以“听绘本模式”运行（手动翻页）。如果需要自动翻页，则必须创建同步文件。</p>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar Navigation */}
        <div className="hidden lg:block">
          <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">目录导览</h3>
            <ul className="space-y-3">
              <li>
                <a href="#sync-logic" className="flex items-center gap-2 text-slate-700 hover:text-brand-600 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                  同步原理与编辑
                </a>
              </li>
              <li>
                <a href="#sources" className="flex items-center gap-2 text-slate-700 hover:text-brand-600 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 hover:bg-brand-400"></span>
                  支持的文件源
                </a>
              </li>
              <li>
                <a href="#faq" className="flex items-center gap-2 text-slate-700 hover:text-brand-600 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 hover:bg-brand-400"></span>
                  常见问题
                </a>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-100">
               <div className="bg-slate-50 p-4 rounded-lg">
                 <p className="text-xs text-slate-500 mb-3">需要更多帮助？</p>
                 <button className="w-full py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded hover:bg-slate-50 hover:text-brand-600 transition-colors shadow-sm">
                   查看 GitHub Wiki
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;