export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-8 pt-32 lg:grid-cols-2">
        
        {/* LEFT */}
        <div className="flex flex-col justify-center">

          <div className="mb-6 inline-flex w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            Infrastructure • Security • AI
          </div>

          <h1 className="text-6xl font-black leading-none tracking-tight md:text-8xl">
            JAISURYA
            <br />
            BADATHALA
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-zinc-400">
            Building secure infrastructure today.
            <br />
            Engineering the future of AI Security.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
              View My Work
            </button>

            <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 backdrop-blur-lg transition hover:bg-white/10">
              Download Resume
            </button>

          </div>
        </div>

        {/* RIGHT */}

        <div className="flex items-center justify-center">

          <div className="relative h-[550px] w-[420px] rounded-[40px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl">

            <div className="absolute inset-0 flex items-center justify-center text-zinc-500">
              Portrait Coming Soon
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}