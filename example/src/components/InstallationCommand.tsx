"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

const command = "npm i @emmgfx/activity-tabs";

export const InstallationCommand = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mx-auto max-w-sm rounded-full bg-slate-600 px-4 py-3 text-sm">
      <code className="text-white">{command}</code>
      <button
        onClick={copyToClipboard}
        className={twMerge(
          "absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-purple-400 px-3 py-2 font-semibold text-purple-950 transition-all disabled:bg-emerald-300 disabled:text-emerald-950",
          copied && "animate-rubber-band",
        )}
        disabled={copied}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};
