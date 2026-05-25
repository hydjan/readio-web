import React, { useState } from "react";
import {
  Download as DownloadIcon,
  Tv,
  Smartphone,
  Monitor,
  Cloud,
  Apple,
  AlertTriangle,
  Info,
  CheckCircle,
  ExternalLink,
  BookOpen,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";

const CURRENT_VERSION = "0.1.3";

const CloudDriveCard: React.FC<{
  name: string;
  icon: React.ReactNode;
  desc: string;
  buttonText: string;
  colorClass: string;
  link: string;
}> = ({ name, icon, desc, buttonText, colorClass, link }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
    <div
      className={`w-14 h-14 ${colorClass} text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm`}
    >
      {icon}
    </div>
    <h3 className="text-lg font-bold text-slate-800 mb-2">{name}</h3>
    <p className="text-sm text-slate-500 mb-6">{desc}</p>

    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block w-full py-3 rounded-lg font-bold text-white transition-opacity hover:opacity-90 ${colorClass}`}
    >
      {buttonText}
    </a>
  </div>
);

const Download: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("android");

  const tabs = [
    { id: "android", name: "安卓 / 电视TV", icon: <Smartphone size={18} /> },
    { id: "windows", name: "Windows 电脑", icon: <Monitor size={18} /> },
    { id: "macos", name: "macOS 电脑", icon: <Apple size={18} /> },
    { id: "ios", name: "iOS (苹果手机/iPad)", icon: <Smartphone size={18} /> },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">下载 呆呆阅读 Readio</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          请根据您的设备类型选择合适的网盘镜像进行下载
        </p>
        <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-mono">
          Current Version: v{CURRENT_VERSION}
        </div>
      </div>

      {/* Cloud Drives */}
      <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 mb-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-2">
            <Cloud size={28} className="text-brand-500" />
            网盘下载
          </h2>
          <p className="text-slate-600">
            包含所有平台版本（Android、Windows、macOS、iOS）的安装包。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <CloudDriveCard
            name="百度网盘"
            icon={<span className="font-bold text-2xl">du</span>}
            colorClass="bg-blue-600"
            desc="提取码：8888"
            buttonText="前往下载"
            link="https://pan.baidu.com/s/1dOkCeEtl1wRMEnAyacYOPA?pwd=8888"
          />
          <CloudDriveCard
            name="夸克网盘"
            icon={<span className="font-bold text-2xl">Qk</span>}
            colorClass="bg-indigo-500"
            desc="不限速下载"
            buttonText="前往下载"
            link="https://pan.quark.cn/s/26d2e080a02b"
          />
        </div>
      </div>

      {/* Installation Guide Section */}
      <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
          <div className="bg-brand-50 p-2.5 rounded-2xl text-brand-600">
            <BookOpen size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">详细安装教程</h2>
            <p className="text-sm text-slate-500 mt-1">📚 呆呆阅读 Readio 全平台保姆级安装教程</p>
          </div>
        </div>

        <p className="text-slate-600 mb-8 leading-relaxed text-sm bg-slate-50 p-4 rounded-xl border border-slate-100">
          请先确认您的设备系统（手机、电脑、苹果、安卓？），然后点击下方对应的按钮快速切换查看具体的安装步骤。
        </p>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 py-4 px-4 rounded-2xl font-bold text-sm transition-all border ${isActive
                  ? "bg-brand-600 text-white border-brand-600 shadow-md shadow-brand-100 scale-[1.02]"
                  : "bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-600 hover:bg-slate-50/50"
                  }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6 md:p-8">
          {activeTab === "android" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200/60 pb-3">
                <div className="bg-emerald-100 text-emerald-600 p-2 rounded-xl">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">🤖 1. 安卓手机 / 平板（Android）/ 电视TV 用户</h3>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">对应安装包</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl font-mono text-xs text-slate-700">
                    <span>呆呆阅读Readio{CURRENT_VERSION}-arm64-v8a-android.apk</span>
                    <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-[10px] font-sans font-semibold">推荐 / 主流手机</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl font-mono text-xs text-slate-700">
                    <span>呆呆阅读Readio{CURRENT_VERSION}-armeabi-v7a-android.apk</span>
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] font-sans font-semibold">老旧设备 / 电视TV</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl font-mono text-xs text-slate-700">
                    <span>呆呆阅读Readio{CURRENT_VERSION}-x86_64-android.apk</span>
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] font-sans font-semibold">安卓模拟器</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3">
                <Info className="text-amber-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-amber-800 text-sm">不知道选哪个？</h4>
                  <p className="text-amber-700 text-xs mt-1 leading-relaxed">
                    请优先下载第一个 <strong className="underline">arm64-v8a</strong> 版本。目前绝大多数主流新手机都使用此版本。
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">安装步骤</h4>
                <ol className="relative border-l border-slate-200 ml-3 space-y-6">
                  <li className="relative pl-6">
                    <span className="absolute -left-3 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-xs font-bold ring-8 ring-slate-50">1</span>
                    <h5 className="font-bold text-slate-800 text-sm">选择包下载 (推荐)</h5>
                    <p className="text-slate-600 text-xs mt-1">优先在网盘中下载 <code className="bg-white px-1.5 py-0.5 border border-slate-200 rounded font-mono text-slate-700">呆呆阅读Readio{CURRENT_VERSION}-arm64-v8a-android.apk</code>。</p>
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute -left-3 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-xs font-bold ring-8 ring-slate-50">2</span>
                    <h5 className="font-bold text-slate-800 text-sm">点击安装</h5>
                    <p className="text-slate-600 text-xs mt-1">下载完成后，在手机/设备上直接点击它进行安装。</p>
                  </li>
                </ol>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex gap-3">
                <AlertTriangle className="text-blue-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-blue-800 text-sm">注意：</h4>
                  <p className="text-blue-700 text-xs mt-1 leading-relaxed">
                    如果安装时手机提示“未知来源风险”或“高风险提示”，请选择 <strong>“允许安装”</strong> 或 <strong>“继续安装”</strong> 即可。这是安卓系统对非应用商店包的常规提示。
                  </p>
                </div>
              </div>

              <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4 flex gap-3">
                <Tv className="text-slate-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-slate-700 text-sm">备用情况：</h4>
                  <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                    如果第一个版本安装完提示失败或打不开，老旧手机/平板/TV请尝试下载 <strong>armeabi-v7a</strong> 版本；如果是电脑上的安卓模拟器，请选择 <strong>x86_64</strong> 版本。
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "windows" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200/60 pb-3">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-xl">
                  <Monitor size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">💻 2. 微软电脑（Windows）用户</h3>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">对应安装包</h4>
                <div className="p-3 bg-white border border-slate-200 rounded-xl font-mono text-xs text-slate-700 flex justify-between items-center">
                  <span>呆呆阅读Readio{CURRENT_VERSION}-windows.zip</span>
                  <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-[10px] font-sans font-semibold">绿色免安装版</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">安装步骤</h4>
                <ol className="relative border-l border-slate-200 ml-3 space-y-6">
                  <li className="relative pl-6">
                    <span className="absolute -left-3 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-xs font-bold ring-8 ring-slate-50">1</span>
                    <h5 className="font-bold text-slate-800 text-sm">解压文件 (关键)</h5>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      下载这个 <code className="bg-white px-1.5 py-0.5 border border-slate-200 rounded font-mono text-slate-700">.zip</code> 压缩包。下载后<strong>不要</strong>直接双击打开它。请右键点击这个文件，选择 <strong>“解压到当前文件夹”</strong> 或 <strong>“全部解压”</strong>。
                    </p>
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute -left-3 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-xs font-bold ring-8 ring-slate-50">2</span>
                    <h5 className="font-bold text-slate-800 text-sm">运行软件</h5>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      解压后会出来一个同名的普通文件夹，点进去，找到里面名字叫 <strong>呆呆阅读.exe</strong>（或 <strong>Readio.exe</strong>）的文件，双击它就能打开软件了！
                    </p>
                  </li>
                </ol>
              </div>

              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 flex gap-4">
                <ShieldAlert className="text-rose-600 shrink-0 mt-0.5" size={24} />
                <div>
                  <h4 className="font-bold text-rose-800 text-sm flex items-center gap-1.5">
                    ⚠️ 重要补充（关于 FFmpeg 报错）：
                  </h4>
                  <p className="text-rose-700 text-xs mt-1.5 leading-relaxed">
                    如果打开软件后发现部分音视频、听书功能无法使用，说明您的电脑缺少一个叫 <strong>ffmpeg</strong> 的运行组件。
                  </p>
                  <div className="mt-3">
                    <a
                      href="#/guide#ffmpeg-windows"
                      className="inline-flex items-center gap-1 text-xs font-bold text-rose-750 bg-rose-100 hover:bg-rose-200 px-3 py-1.5 rounded-lg transition-colors border border-rose-300 shadow-sm"
                    >
                      <span>前往查看 Windows 配置 FFmpeg 教程</span>
                      <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "macos" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200/60 pb-3">
                <div className="bg-slate-200 text-slate-800 p-2 rounded-xl">
                  <Apple size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">💻 3. 苹果电脑（Mac / macOS）用户</h3>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">对应安装包</h4>
                <div className="p-3 bg-white border border-slate-200 rounded-xl font-mono text-xs text-slate-700 flex justify-between items-center">
                  <span>呆呆阅读Readio{CURRENT_VERSION}-mac.zip</span>
                  <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-sans font-semibold">Mac 专用包</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">安装步骤</h4>
                <ol className="relative border-l border-slate-200 ml-3 space-y-6">
                  <li className="relative pl-6">
                    <span className="absolute -left-3 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-xs font-bold ring-8 ring-slate-50">1</span>
                    <h5 className="font-bold text-slate-800 text-sm">解压文件</h5>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      下载该文件后直接 <strong>双击</strong> 它。系统会自动帮你解压，解压后会得到 <strong>呆呆阅读Readio.app</strong> 的应用程序文件。
                    </p>
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute -left-3 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-xs font-bold ring-8 ring-slate-50">2</span>
                    <h5 className="font-bold text-slate-800 text-sm">寻找Mac系统“应用程序（Applications）”文件夹</h5>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      如果您在电脑 Finder 窗口左侧找不到该文件夹，请使用以下<strong>任意一种</strong>最简单的方法打开它：
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                      <div className="bg-white p-3 rounded-xl border border-slate-200">
                        <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider">方法一 (快捷键)</span>
                        <p className="text-slate-700 text-xs font-semibold mt-1">Shift + Command(⌘) + A</p>
                        <p className="text-slate-500 text-[10px] mt-1">先点击桌面的空白处，然后按下这三个键即可弹出。</p>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-200">
                        <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider">方法二 (顶部菜单)</span>
                        <p className="text-slate-700 text-xs font-semibold mt-1">“前往” -&gt; “应用程序”</p>
                        <p className="text-slate-500 text-[10px] mt-1">抬头看屏幕最左上角的菜单栏，点击即可。</p>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-200">
                        <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider">方法三 (访达边栏)</span>
                        <p className="text-slate-700 text-xs font-semibold mt-1">点击蓝白笑脸图标</p>
                        <p className="text-slate-500 text-[10px] mt-1">打开 Finder 窗口后在窗口左侧边栏找到“应用程序”。</p>
                      </div>
                    </div>
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute -left-3 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-xs font-bold ring-8 ring-slate-50">3</span>
                    <h5 className="font-bold text-slate-800 text-sm">拖动安装</h5>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      把您在第 1 步解压出来的 <strong>“呆呆阅读Readio.app”</strong> 图标，用鼠标 <strong>按住不放，直接拖拽</strong> 到刚才打开的“应用程序”文件夹窗口里。松开鼠标，软件就安装好了！以后去“启动台（Launchpad）”里直接点击就能运行。
                    </p>
                  </li>
                </ol>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
                <ShieldAlert className="text-amber-600 shrink-0 mt-0.5" size={24} />
                <div>
                  <h4 className="font-bold text-amber-800 text-sm flex items-center gap-1.5">
                    🚨 Mac 第一次打开提示报错的解决办法（必看）：
                  </h4>
                  <p className="text-amber-700 text-xs mt-1.5 leading-relaxed">
                    第一次双击打开时，Mac 系统可能会弹窗提示 <em>“无法打开，因为苹果无法检查其是否包含恶意软件”</em> 或 <em>“身份不明的开发者”</em>。请按以下步骤解锁：
                  </p>
                  <ol className="list-decimal ml-4 text-amber-700 text-xs mt-2 space-y-1">
                    <li>点击弹窗上的“取消”或“好”。</li>
                    <li>点击屏幕左上角 <strong>“ 苹果图标”</strong> -&gt; 选择 <strong>“系统设置”</strong>。</li>
                    <li>在左侧找到并点击 <strong>“隐私与安全性”</strong>，然后在右侧区域向下滑动。</li>
                    <li>找到提示：<em>“已阻止使用‘呆呆阅读’，因为他不是来自著名的开发者”</em>。直接点击它旁边的 <strong>“仍要打开”</strong> 按钮。</li>
                    <li>输入您的电脑开机密码（或按指纹）即可解锁。以后再打开就不会弹窗了。</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {activeTab === "ios" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200/60 pb-3">
                <div className="bg-indigo-100 text-indigo-600 p-2 rounded-xl">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">📱 4. 苹果手机 / iPad（iOS）用户</h3>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">对应安装包</h4>
                <div className="p-3 bg-white border border-slate-200 rounded-xl font-mono text-xs text-slate-700 flex justify-between items-center">
                  <span>呆呆阅读Readio{CURRENT_VERSION}-ios.ipa</span>
                  <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded text-[10px] font-sans font-semibold">iOS 专用包</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3">
                <Info className="text-amber-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-amber-800 text-sm">查看版本：</h4>
                  <p className="text-amber-700 text-xs mt-1 leading-relaxed">
                    苹果设备安装相对复杂，<strong>请先打开手机的“设置” -&gt; “通用” -&gt; “关于本机”，查看您的“iOS 版本”是多少</strong>，然后根据版本选择下面的方法。
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Situation A */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <span className="inline-block bg-emerald-100 text-emerald-850 text-xs font-bold px-2.5 py-1 rounded-full mb-3">
                    🟢 情况 A：如果您的系统在 iOS 17.0 以下 (强烈推荐“巨魔”安装)
                  </span>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4 font-semibold text-slate-800">
                    如果您的手机支持并已经安装了 <strong>TrollStore（巨魔商店）</strong>，这是最完美的安装方式，永久有效，不需要电脑。
                  </p>
                  <ol className="list-decimal ml-4 text-slate-600 text-xs space-y-1.5">
                    <li>在苹果手机上用浏览器直接下载 <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">呆呆阅读Readio{CURRENT_VERSION}-ios.ipa</code> 文件。</li>
                    <li>下载完成后，点击该文件，选择“共享/发送到...”，在弹出的软件列表中选择 <strong>TrollStore（巨魔）</strong>。</li>
                    <li>巨魔商店会自动弹窗，点击 <strong>“Install（安装）”</strong>，只需几秒钟桌面就会出现软件，安装完成！</li>
                  </ol>
                </div>

                {/* Situation B */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <div>
                    <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full">
                      🟡 情况 B：如果您的系统在 iOS 17.0 及以上 (需要“自签名”安装)
                    </span>
                    <p className="text-slate-600 text-xs leading-relaxed mt-2">
                      由于新系统限制，必须使用电脑辅助进行“自签名”（缺点是个人免费账号每 7 天需要重新签一次名/刷新一次）。这里提供 <strong>3 种最常用的签名工具</strong>，任选一种操作：
                    </p>
                  </div>

                  <div className="space-y-4 pt-2 border-t border-slate-100">
                    {/* Method 1 */}
                    <div className="pl-3 border-l-2 border-brand-500">
                      <h5 className="font-bold text-slate-800 text-sm">🛠️ 方法 1：使用【爱思助手】安装 (适合国内小白，全中文)</h5>
                      <ol className="list-decimal ml-4 text-slate-600 text-xs mt-1.5 space-y-1.5">
                        <li>电脑上下载并安装“爱思助手”客户端。把 <code className="bg-slate-50 px-1 py-0.5 rounded font-mono">.ipa</code> 包下载到电脑上。</li>
                        <li>用数据线把手机连接到电脑，并在手机上弹出提示时点击“信任此电脑”。</li>
                        <li>在电脑端爱思助手顶部点击 <strong>“工具箱”</strong> -&gt; 找到并点击 <strong>“IPA签名”</strong>。</li>
                        <li>点击“添加 IPA 文件”，把刚才下载的 呆呆阅读 .ipa 文件选进来。</li>
                        <li>勾选该文件，在右侧选择 <strong>“使用 Apple ID 签名”</strong> -&gt; 点击“添加 Apple ID”，输入您的苹果账号和密码（此过程是向苹果官方申请个人测试证书，请放心输入）。</li>
                        <li>账号添加好后，勾选它，点击 <strong>“开始签名”</strong>。</li>
                        <li>状态显示“签名成功”后，直接在爱思助手里将这个已签名的包 <strong>“安装”</strong> 到手机上。</li>
                      </ol>
                    </div>

                    {/* Method 2 */}
                    <div className="pl-3 border-l-2 border-brand-500 pt-2">
                      <h5 className="font-bold text-slate-800 text-sm">🛠️ 方法 2：使用【AltStore】安装 (适合电脑手机在同一 Wi-Fi 下自动续签)</h5>
                      <ol className="list-decimal ml-4 text-slate-600 text-xs mt-1.5 space-y-1.5">
                        <li>在电脑（Windows/Mac）上下载并安装 AltServer，并根据提示在手机上安装好 <strong>AltStore</strong> 手机客户端。</li>
                        <li>在手机上打开浏览器，下载 <code className="bg-slate-50 px-1 py-0.5 rounded font-mono">呆呆阅读Readio{CURRENT_VERSION}-ios.ipa</code>。</li>
                        <li>打开手机上的 AltStore，点击左上角的 <strong>“+”</strong> 号，选择您刚下载 of .ipa 文件。</li>
                        <li>此时会提示输入您的 Apple ID 和密码，登录后工具会自动帮你安装到手机桌面。</li>
                      </ol>
                    </div>

                    {/* Method 3 */}
                    <div className="pl-3 border-l-2 border-brand-500 pt-2">
                      <h5 className="font-bold text-slate-800 text-sm">🛠️ 方法 3：使用【Sideloadly】安装 (最稳定的英文单次签名工具)</h5>
                      <ol className="list-decimal ml-4 text-slate-600 text-xs mt-1.5 space-y-1.5">
                        <li>电脑上下载并安装 <strong>Sideloadly</strong> 软件（需要电脑上同时安装好官方版 iTunes）。</li>
                        <li>用数据线连接手机 and 电脑。打开 Sideloadly，它会自动识别到您的设备。</li>
                        <li>把电脑上的 呆呆阅读 .ipa 文件直接 <strong>用鼠标拖进</strong> Sideloadly 左侧的那个大 IPA 图标框里。</li>
                        <li>在“Apple Account”框里输入您的苹果邮箱账号，点击下方的 <strong>“Start（开始）”</strong>。</li>
                        <li>期间会弹窗提示输入苹果密码（如果开启了双重验证，还需要在手机上点允许并输入验证码）。看到底部进度条显示 <strong>“Done.”</strong> 即安装成功。</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Important Final Step */}
                <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 flex gap-4">
                  <ShieldAlert className="text-rose-600 shrink-0 mt-0.5" size={24} />
                  <div>
                    <h4 className="font-bold text-rose-800 text-sm flex items-center gap-1">
                      🚨 ⚠️ 签名安装后的“最后一步”（非常重要！）：
                    </h4>
                    <p className="text-rose-700 text-xs mt-1 leading-relaxed">
                      通过方法 1、2、3 自签名安装成功后，点击图标会提示“未受信任的开发者”，请按以下步骤操作：
                    </p>
                    <ol className="list-decimal ml-4 text-rose-700 text-xs mt-2 space-y-1.5">
                      <li>打开手机的 <strong>“设置” -&gt; “通用” -&gt; “VPN 与设备管理”</strong>。</li>
                      <li>在“开发者 App”下方，找到您刚才输入的 <strong>Apple ID（您的苹果邮箱）</strong> 并点进去。</li>
                      <li>点击蓝色的 <strong>“信任 xxx@xxx.com”</strong>，在弹出的提示里再次点击 <strong>“信任”</strong>。</li>
                      <li>
                        <span className="text-rose-700 font-semibold">
                          *(如果您是 iOS 16 及以上系统，可能还需要去“设置” -&gt; “隐私与安全性” -&gt; 滑到最底部打开“开发者模式”，并根据提示重启手机)*
                        </span>
                      </li>
                    </ol>
                    <p className="text-rose-800 font-bold text-xs mt-2">
                      现在，您就可以返回桌面，正常打开呆呆阅读了！
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Download;
