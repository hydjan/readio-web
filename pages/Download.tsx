import React from "react";
import {
  Download as DownloadIcon,
  Tv,
  Smartphone,
  Monitor,
  Cloud,
  HardDrive,
} from "lucide-react";

interface VersionButtonProps {
  platform: string;
  arch: string;
  icon: React.ReactNode;
  filename: string;
  badge?: string;
  link: string;
}

const VersionButton: React.FC<VersionButtonProps> = ({
  platform,
  arch,
  icon,
  filename,
  badge,
  link,
}) => (
  <a
    href={link}
    className="block"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-brand-400 hover:shadow-md transition-all group">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
          {icon}
        </div>
        <div className="text-left">
          <div className="font-bold text-slate-800 flex items-center gap-2">
            {platform}
            {badge && (
              <span className="bg-brand-100 text-brand-700 text-[10px] px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                {badge}
              </span>
            )}
          </div>
          <div className="text-xs text-slate-500 font-mono mt-0.5">{arch}</div>
        </div>
      </div>
      <div className="text-right">
        <button
          className="text-brand-600 hover:bg-brand-50 p-2 rounded-full transition-colors"
          title="下载直链"
        >
          <DownloadIcon size={20} />
        </button>
      </div>
    </div>
  </a>
);

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
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">下载 呆呆阅读 Readio</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          请根据您的设备类型选择合适的安装包
        </p>
        <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-mono">
          Current Version: v0.0.7
        </div>
      </div>

      {/* Direct Downloads Grid */}
      <div className="mb-20">
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <HardDrive size={24} className="text-brand-500" />
          直链下载
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Android Versions */}
          <VersionButton
            platform="Android"
            arch="arm64-v8a"
            filename="呆呆阅读Readio0.0.7-arm64-v8a-android.apk"
            icon={<Smartphone size={22} />}
            badge="推荐"
            link="https://hydjan.github.io/dd/呆呆阅读Readio0.0.7-arm64-v8a-android.apk"
          />
          <VersionButton
            platform="Android"
            arch="armeabi-v7a"
            filename="呆呆阅读Readio0.0.7-armeabi-v7a-android.apk"
            icon={<Smartphone size={22} />}
            badge="老旧设备"
            link="https://hydjan.github.io/dd/呆呆阅读Readio0.0.7-armeabi-v7a-android.apk"
          />
          <VersionButton
            platform="Android"
            arch="x86_64"
            filename="呆呆阅读Readio0.0.7-x86_64-android.apk"
            icon={<Tv size={22} />}
            badge="模拟器"
            link="https://hydjan.github.io/dd/呆呆阅读Readio0.0.7-x86_64-android.apk"
          />

          {/* Desktop Versions */}
          <VersionButton
            platform="Windows"
            arch="x64 / exe"
            filename="呆呆阅读Readio0.0.7-windows.zip"
            icon={<Monitor size={22} />}
            link="https://hydjan.github.io/dd/呆呆阅读Readio0.0.7-windows.zip"
          />
          <VersionButton
            platform="macOS"
            arch="Universal / app"
            filename="呆呆阅读Readio0.0.7-mac.zip"
            icon={<Monitor size={22} />}
            link="https://hydjan.github.io/dd/呆呆阅读Readio0.0.7-mac.zip"
          />
          <VersionButton
            platform="ios"
            arch="iphone/ipad / ipa"
            filename="呆呆阅读Readio0.0.7-ios.ipa"
            icon={<Monitor size={22} />}
            link="https://hydjan.github.io/dd/呆呆阅读Readio0.0.7-ios.ipa"
          />
        </div>

        <p className="mt-4 text-xs text-slate-400 text-center">
          注：Android 电视请通常选择 arm64-v8a 或 armeabi-v7a，如果不确定请下载
          v7a 版本兼容性最好。
        </p>
      </div>

      {/* Cloud Drives */}
      <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-2">
            <Cloud size={28} className="text-brand-500" />
            网盘下载
          </h2>
          <p className="text-slate-600">
            如果下载速度较慢，请使用以下网盘镜像（包含上述所有版本）。
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
    </div>
  );
};

export default Download;
