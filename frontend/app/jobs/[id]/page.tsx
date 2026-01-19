import Link from "next/link";

const stages = [
  "Queued",
  "Downloading video",
  "Transcribing audio",
  "Scoring segments",
  "Rendering clips",
];

export default function JobStatusPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Job status
          </p>
          <h1 className="text-3xl font-semibold">ClipGen processing pipeline</h1>
          <p className="text-slate-300">
            We are analyzing engagement signals and preparing your clips. This view will
            update as the job progresses.
          </p>
        </header>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <ol className="space-y-4">
            {stages.map((stage, index) => (
              <li key={stage} className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-medium">{stage}</p>
                  <p className="text-sm text-slate-400">Step {index + 1} of 5</p>
                </div>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                  Pending
                </span>
              </li>
            ))}
          </ol>
        </div>
        <Link className="text-emerald-400 underline" href="/jobs/job_placeholder/clips">
          View results
        </Link>
      </section>
    </main>
  );
}
