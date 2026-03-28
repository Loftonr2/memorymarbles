export default function Clinicians() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-6 max-w-4xl mx-auto flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-300 drop-shadow-md">
        For Clinicians
      </h1>
      <div className="glass-card w-full p-10 text-center space-y-8">
        <p className="text-lg text-white/80 leading-relaxed">
          Memory Marbles offers an open-access toolkit for therapists and counselors. Utilize our sensory grounding techniques to help patients navigate trauma, anxiety, and memory processing.
        </p>
        <div className="flex justify-center pt-8">
          <a href="/docs/memory-marbles-clinical-guide.pdf" download className="bg-primary hover:bg-white hover:text-background text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Download Open Access PDF
          </a>
        </div>
      </div>
    </div>
  );
}
