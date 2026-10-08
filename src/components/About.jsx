export default function About() {
  const stats = [
    {
      value: "50K+",
      label: "Happy listeners",
    },
    {
      value: "4.9",
      label: "Average rating",
    },
    {
      value: "30H",
      label: "Battery life",
    },
    {
      value: "24/7",
      label: "Customer support",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-5 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-gray-100 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-gray-100 blur-3xl" />

      <div className="relative mx-auto max-w-full">

        <div className="max-w-full">

          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-[#f5f5f7] px-4 py-2 text-xs font-semibold tracking-widest text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            ABOUT AURA
          </div>

          <h2 className="mt-7 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Technology you can
            <br />
            <span className="text-gray-400">
              feel, not see.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
            We believe great audio should disappear into your
            everyday life. AURA combines intelligent technology,
            thoughtful design, and immersive sound into one
            effortless experience.
          </p>

        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          <div className="group relative">

            {/* Main image */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#e8e8ea] p-2 shadow-2xl shadow-black/10">

              <div className="relative overflow-hidden rounded-[2rem]">

                <img
                  src="https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=90"
                  alt="AURA premium wireless earbuds"
                  className="h-[480px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[560px]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5" />

                {/* Product label */}
                <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl">
                  AURA DESIGN LAB
                </div>

                {/* Bottom text */}
                <div className="absolute bottom-7 left-7 right-7 text-white">

                  <p className="text-xs font-medium tracking-[0.25em] text-white/60">
                    ENGINEERED FOR YOU
                  </p>

                  <h3 className="mt-2 text-3xl font-semibold sm:text-4xl">
                    Pure. Powerful. Personal.
                  </h3>

                </div>

              </div>
            </div>

            {/* Floating ANC Card */}
            <div className="absolute -right-3 top-12 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 sm:-right-6">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm text-white">
                  ANC
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Active Noise
                  </p>

                  <p className="text-xs text-gray-500">
                    Cancellation
                  </p>
                </div>

              </div>

            </div>

            {/* Floating rating */}
            <div className="absolute -bottom-5 left-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl transition duration-300 hover:-translate-y-2 sm:left-8">

              <div className="flex items-center gap-3">

                <div className="text-xl">
                  ★
                </div>

                <div>
                  <p className="font-semibold">
                    4.9 / 5
                  </p>

                  <p className="text-xs text-gray-500">
                    Loved by 50K+ listeners
                  </p>
                </div>

              </div>

            </div>

          </div>

          <div>

            {/* Feature cards */}
            <div className="grid gap-4 sm:grid-cols-2">

              <div className="group rounded-3xl bg-[#f5f5f7] p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-black hover:text-white hover:shadow-xl">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl shadow-sm transition group-hover:bg-white/10">
                  ♪
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  Immersive Sound
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 transition group-hover:text-gray-400">
                  Rich bass, detailed highs, and balanced audio
                  tuned for every genre.
                </p>

              </div>

              <div className="group rounded-3xl bg-[#f5f5f7] p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-black hover:text-white hover:shadow-xl">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl shadow-sm transition group-hover:bg-white/10">
                  ◉
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  Smart ANC
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 transition group-hover:text-gray-400">
                  Block distractions and stay focused with
                  intelligent noise cancellation.
                </p>

              </div>

              <div className="group rounded-3xl bg-[#f5f5f7] p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-black hover:text-white hover:shadow-xl">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl shadow-sm transition group-hover:bg-white/10">
                  ◇
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  All-Day Comfort
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 transition group-hover:text-gray-400">
                  Lightweight ergonomic designs made for
                  long listening sessions.
                </p>

              </div>

              <div className="group rounded-3xl bg-[#f5f5f7] p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-black hover:text-white hover:shadow-xl">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl shadow-sm transition group-hover:bg-white/10">
                  ⚡
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  Fast Charging
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 transition group-hover:text-gray-400">
                  Spend less time charging and more time
                  listening to what you love.
                </p>

              </div>

            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">

              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-black"
                >
                  <p className="text-2xl font-semibold">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

        <div className="mt-20 border-t border-gray-200 pt-10">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <p className="max-w-2xl text-2xl font-medium tracking-tight sm:text-3xl">
              “Great sound shouldn't compete
              <span className="text-gray-400">
                {" "}with your life.
              </span>
              It should become part of it.”
            </p>

            <button
              type="button"
              onClick={() =>
                document
                  .querySelector("#products")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="group flex w-fit shrink-0 items-center gap-3 rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-gray-800"
            >
              Discover AURA

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}