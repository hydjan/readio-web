import React from "react";
import { Rocket, History, User, Heart } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900">
          关于 呆呆阅读 Readio
        </h1>
        <p className="mt-4 text-slate-500">连接亲子阅读的每一刻</p>
      </div>

      <div className="grid gap-12">
        {/* Update Log */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              <History size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">更新日志</h2>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-3 space-y-8">
            <div className="ml-6 relative">
              <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-brand-500 border-4 border-white shadow-sm"></span>
              <h3 className="text-lg font-bold text-slate-900">
                v0.0.5{" "}
                <span className="text-xs font-normal text-slate-400 ml-2">
                  2025-12-11
                </span>
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                <li>新增：OpenList / AList 网盘挂载支持</li>
                <li>优化：Android TV 遥控器焦点逻辑重构</li>
                <li>修复：波形编辑器在拖拽时可能出现的卡顿问题</li>
              </ul>
            </div>

            <div className="ml-6 relative">
              <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-brand-500 border-4 border-white shadow-sm"></span>
              <h3 className="text-lg font-bold text-slate-900">
                v0.0.4{" "}
                <span className="text-xs font-normal text-slate-400 ml-2">
                  2025-11-27
                </span>
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                ✨ 新增：音频分句与逐句播放
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                <li>通过 静音检测 自动生成分句时间轴</li>
                <li>设计音频播放 UI（波形条 / 进度条 / 控制栏）</li>
                <li>全部控件支持遥控器焦点高亮与方向键操作</li>
              </ul>
            </div>

            <div className="ml-6 relative">
              <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-300 border-4 border-white"></span>
              <h3 className="text-lg font-bold text-slate-900">
                v0.0.3{" "}
                <span className="text-xs font-normal text-slate-400 ml-2">
                  2025-11-20
                </span>
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                <li>✨ 新增：书籍音频同步功能</li>
              </ul>
              <p className="mt-2 text-sm text-slate-600">
                根据 `.sync.json` 实现 PDF 与音频自动翻页同步
              </p>
            </div>

            <div className="ml-6 relative">
              <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-300 border-4 border-white"></span>
              <h3 className="text-lg font-bold text-slate-900">
                v0.0.2{" "}
                <span className="text-xs font-normal text-slate-400 ml-2">
                  2025-11-18
                </span>
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                <li>✨ 新增：PDF 书籍缩略图显示</li>
              </ul>
            </div>

            <div className="ml-6 relative">
              <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-300 border-4 border-white"></span>
              <h3 className="text-lg font-bold text-slate-900">
                v0.0.1{" "}
                <span className="text-xs font-normal text-slate-400 ml-2">
                  2025-11-15
                </span>
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                🚀 最小可运行版本（MVP）发布。
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                <li>多种书库来源（本地 / SMB / WebDAV / Alist）</li>
                <li>PDF 阅读（单页/双页）、TV 遥控器优化</li>
                <li>目录导航与书库浏览</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
            <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
              <Rocket size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">未来计划</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="font-bold text-slate-800 mb-1 flex items-center gap-2">
                🔥 ASR 自动对齐
              </div>
              <p className="text-sm text-slate-500">
                无需手动编辑，利用 AI 语音识别自动生成
                sync.json，实现“导入即同步”。
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="font-bold text-slate-800 mb-1 flex items-center gap-2">
                📷 OCR 扫描生成
              </div>
              <p className="text-sm text-slate-500">
                手机拍摄纸质书，自动转为电子版并匹配音频，复活家里的旧绘本。
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="font-bold text-slate-800 mb-1 flex items-center gap-2">
                🌍 多语言 UI
              </div>
              <p className="text-sm text-slate-500">
                支持英语、日语等界面语言，服务全球家庭。
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="font-bold text-slate-800 mb-1 flex items-center gap-2">
                📖 EPUB 电子书支持
              </div>
              <p className="text-sm text-slate-500">
                引入流式文档支持，提供更好的纯文字阅读体验。
              </p>
            </div>
          </div>
        </section>

        {/* Author */}
        <section className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 border border-orange-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6 border-b border-orange-100 pb-4">
            <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
              <User size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">关于作者</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 text-slate-700 leading-relaxed space-y-4">
              <p>你好！我是 呆呆阅读 Readio 的开发者 静听海语。</p>
              <p>
                做这个 App 的初衷很简单：我家里存了大量的 PDF 绘本和对应的 MP3
                音频，但我发现市面上没有一款 App
                能够很好地在电视大屏上把它们结合起来。
              </p>
              <p>
                孩子拿着平板容易伤眼，且容易乱点；我想让他在客厅的电视上，通过遥控器简单操作，就能享受到“点读机”一样的体验。支持
                NAS 和 WebDAV 更是为了方便管理这几百 G 的资源。
              </p>
              <p className="font-medium text-orange-800">
                如果你觉得这个项目对你有帮助，请关注我的小红书账号获取最新动态。
              </p>
              <div className="pt-4 flex items-center gap-2 text-sm text-slate-500">
                Made with{" "}
                <Heart size={16} className="text-red-500 fill-current" /> by a
                Developer Dad.
              </div>
            </div>

            <div className="flex-shrink-0 mx-auto md:mx-0 text-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <div className="w-40 h-40 bg-slate-200 rounded-lg mb-3 overflow-hidden">
                {/* QR Code Placeholder using local image */}
                <img
                  src="images/qr-code.jpg"
                  alt="小红书二维码"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <p className="text-xs font-bold text-slate-500">关注小红书</p>
              <p className="text-[10px] text-slate-400">@静听海语</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
