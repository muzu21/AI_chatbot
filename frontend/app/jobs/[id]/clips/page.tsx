const clips = [
  {
    id: "clip_1",
    title: "The trick that saved 3 hours per edit",
    score: 0.91,
    duration: "00:30",
  },
  {
    id: "clip_2",
    title: "Most important growth hack",
    score: 0.88,
    duration: "00:15",
  },
];

export default function ClipsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Clip results
          </p>
          <h1 className="text-3xl font-semibold">Top AI-estimated engaging clips</h1>
          <p className="text-slate-300">
            Edit clips, tweak captions, and export ready-to-post shorts.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {clips.map((clip) => (
            <article
              key={clip.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <div className="aspect-[9/16] w-full rounded-xl bg-slate-800" />
              <div className="mt-4 space-y-2">
                <h2 className="text-xl font-semibold">{clip.title}</h2>
                <p className="text-sm text-slate-400">
                  Score {clip.score} • {clip.duration}
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="rounded-lg border border-slate-700 px-3 py-2 text-sm">
                    Edit
                  </button>
                  <button className="rounded-lg border border-slate-700 px-3 py-2 text-sm">
                    Export MP4
                  </button>
                  <button className="rounded-lg border border-slate-700 px-3 py-2 text-sm">
                    Export captions
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
