"use client";

import { useState } from "react";

const ratios = ["9:16", "1:1", "16:9"];
const lengths = ["15s", "30s", "60s"];
const clipCounts = [5, 10, 20];

export function ClipGenForm() {
  const [youtubeUrl, setYoutubeUrl] = useState("");

  return (
    <form className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm text-slate-300">YouTube URL</span>
          <input
            value={youtubeUrl}
            onChange={(event) => setYoutubeUrl(event.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
            placeholder="https://youtube.com/watch?v=..."
            type="url"
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm text-slate-300">Language</span>
          <input
            className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
            placeholder="Auto-detect or en"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm text-slate-300">Aspect ratio</span>
          <select className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100">
            {ratios.map((ratio) => (
              <option key={ratio}>{ratio}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm text-slate-300">Target clip length</span>
          <select className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100">
            {lengths.map((length) => (
              <option key={length}>{length}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm text-slate-300">Number of clips</span>
          <select className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100">
            {clipCounts.map((count) => (
              <option key={count}>{count}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm text-slate-300">Caption style</span>
          <div className="grid grid-cols-2 gap-2">
            <input
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
              placeholder="Font size"
              type="number"
              min={12}
              max={120}
              defaultValue={48}
            />
            <select className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100">
              <option>Bottom</option>
              <option>Center</option>
              <option>Top</option>
            </select>
            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input type="checkbox" defaultChecked /> Highlight words
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input type="checkbox" /> Emojis
            </label>
          </div>
        </label>
      </div>
      <button
        className="mt-6 w-full rounded-lg bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-900"
        type="submit"
      >
        Start processing
      </button>
    </form>
  );
}
