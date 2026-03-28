export default function Science() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-6 max-w-4xl mx-auto flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-300 drop-shadow-md">
        The Science
      </h1>
      <div className="grid gap-8 w-full">
        <div className="glass-card p-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Neurological Anchoring</h2>
          <p className="text-white/70 leading-relaxed">
            Research shows that attaching a visual and weighted metaphor to a memory significantly strengthens its neural pathway. The "marble dropping" animation mimics physical weight, triggering the brain's anchoring mechanisms.
          </p>
        </div>
        <div className="glass-card p-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Cognitive Behavioral Synergy</h2>
          <p className="text-white/70 leading-relaxed">
            In cognitive behavioral therapy (CBT), externalizing intangible emotional states into quantifiable objects (marbles) allows for better emotional regulation and reflection.
          </p>
        </div>
      </div>
    </div>
  );
}
