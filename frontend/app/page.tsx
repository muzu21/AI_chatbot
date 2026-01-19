import Link from "next/link";

import { ClipGenForm } from "./components/ClipGenForm";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            ClipGen
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Turn long YouTube videos into viral-ready shorts in minutes.
          </h1>
          <p className="text-lg text-slate-300">
            AI-estimated most engaging moments, auto captions, and export-ready clips.
          </p>
        </header>
        <ClipGenForm />
        <div className="text-sm text-slate-400">
          Already have a job?{" "}
          <Link className="text-emerald-400 underline" href="/jobs/job_placeholder">
            View demo job
          </Link>
        </div>
      </section>
    </main>
  );
}
