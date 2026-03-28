"use client";

export default function Newsletter() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-6 max-w-4xl mx-auto flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-300 drop-shadow-md">
        Stay Connected
      </h1>
      <div className="glass-card w-full p-10 text-center space-y-8">
        <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
          Join our global community of memory preservers. Get updates on scientific research, new features, and community stories.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 pt-8" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary min-w-[300px]"
            required
          />
          <button type="submit" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
