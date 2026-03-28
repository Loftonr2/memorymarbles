export default function Donate() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-6 max-w-4xl mx-auto flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-300 drop-shadow-md">
        Support Our Mission
      </h1>
      <div className="glass-card w-full p-10 text-center space-y-8">
        <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
          Memory Marbles relies entirely on community support to remain free and accessible globally.
          Every contribution helps us maintain servers and improve neural matching algorithms.
        </p>
        <div className="flex justify-center pt-8">
          <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(147,51,234,0.5)]">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}
