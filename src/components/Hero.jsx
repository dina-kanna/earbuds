import { useState } from "react";

export default function Hero({ onShop }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f3f3f5] pt-28"
    >
      <div className="pointer-events-none absolute left-[-160px] top-10 h-70 w-87 rounded-full bg-gray-300/30 blur-3xl" />

      <div className="pointer-events-none absolute right-[-120px] top-10 h-[500px] w-[500px] rounded-full bg-white blur-3xl" />

      <div className="mx-auto grid min-h-[760px] max-w-full items-center gap-12 px-3 pb-10 pt-0 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">


        <div className="relative z-20">

          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold tracking-wider shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-black" />
            A NEW ERA OF SOUND
          </div>

          <h1 className="mt-7 text-5xl font-semibold leading-[0.94] tracking-[-0.07em] sm:text-6xl lg:text-[76px]">
            Hear
            <br />

            <span className="relative inline-block">
              Everything.

              <span className="absolute -bottom-3 left-1 h-1 w-24 rounded-full bg-black sm:w-32" />
            </span>
          </h1>

          <p className="mt-9 max-w-lg text-base leading-7 text-gray-500 sm:text-lg">
            Experience immersive sound, intelligent noise
            cancellation and effortless comfort with the new
            generation of AURA wireless earbuds.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">

            <button
              type="button"
              onClick={onShop}
              className="group flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-gray-800"
            >
              Shop AURA

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <a
              href="#products"
              className="group flex items-center gap-3 rounded-full border border-gray-200 bg-white px-7 py-4 text-sm font-medium transition duration-300 hover:-translate-y-1 hover:border-black"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[9px] text-white">
                ▶
              </span>

              Explore Collection
            </a>

          </div>


          <div className="mt-12 grid max-w-lg grid-cols-3 gap-3">

            {[
              ["30h", "Battery"],
              ["42dBc", "Active ANC"],
              ["4.9/5", "Rating"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-gray-200 bg-white/80 p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xl font-semibold sm:text-2xl">
                  {value}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {label}
                </p>
              </div>
            ))}

          </div>

        </div>


        <div className="relative flex min-h-[520px] items-center justify-center lg:min-h-[650px]">

          {/* Glow */}
          <div className="absolute h-[360px] w-[360px] rounded-full bg-gray-300/50 blur-[100px] sm:h-[500px] sm:w-[500px]" />

          {/* Rings */}
          <div className="absolute h-[350px] w-[350px] rounded-full border border-gray-300/60 sm:h-[500px] sm:w-[500px]" />

          <div className="absolute h-[270px] w-[270px] rounded-full border border-gray-200 sm:h-[390px] sm:w-[390px]" />

          <div className="absolute h-[420px] w-[420px] animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-gray-300 sm:h-[570px] sm:w-[570px]" />

          <div className="group relative z-10 w-full max-w-[540px]">

            <div className="relative overflow-hidden rounded-[3rem] border border-white bg-white/70 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-700 hover:-translate-y-4 hover:rotate-[1deg]">

              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#dedee1]">

                <img
                  src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1400&q=95"
                  alt="Premium AURA wireless earbuds"
                  onLoad={() => setImageLoaded(true)}
                  className={`h-[430px] w-full object-cover object-center transition-all duration-1000 group-hover:scale-110 sm:h-[540px] ${
                    imageLoaded
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />

                {/* Image gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* Top product badge */}
                <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-[10px] font-semibold tracking-widest text-white backdrop-blur-xl">

                  <span className="h-1.5 w-1.5 rounded-full bg-white" />

                  AURA PRO MAX

                </div>

                {/* Product information */}
                <div className="absolute bottom-6 left-6 right-6 text-white">

                  <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/60">
                    PREMIUM WIRELESS AUDIO
                  </p>

                  <div className="mt-2 flex items-end justify-between gap-4">

                    <div>
                      <h2 className="text-3xl font-semibold tracking-tight">
                        Pure Sound.
                      </h2>

                      <p className="mt-1 text-sm text-white/60">
                        Designed for every moment.
                      </p>
                    </div>

                    <div className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black shadow-xl">
                      ₹2,999
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          <div className="absolute left-0 top-16 z-20 hidden rounded-2xl border border-white bg-white/90 p-4 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 sm:block">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                ANC
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Active Noise
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Up to 42dB
                </p>
              </div>

            </div>

          </div>

          <div className="absolute bottom-16 right-0 z-20 rounded-2xl border border-white bg-white/90 p-4 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 sm:right-3">

            <div className="flex items-center justify-between gap-8">

              <div>

                <p className="text-[10px] font-semibold tracking-wider text-gray-400">
                  BATTERY
                </p>

                <div className="mt-1 flex items-end gap-1">
                  <span className="text-3xl font-semibold">
                    30
                  </span>

                  <span className="mb-1 text-xs text-gray-500">
                    HRS
                  </span>
                </div>

              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-xs text-white">
                ⚡
              </div>

            </div>

            <div className="mt-3 h-1.5 w-28 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-[88%] rounded-full bg-black" />
            </div>

          </div>

          <div className="absolute right-5 top-8 z-20 hidden rounded-full border border-white bg-black px-5 py-3 text-[10px] font-semibold tracking-wider text-white shadow-xl sm:block">

            <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white" />

            NOW PLAYING

          </div>

          <div className="absolute bottom-4 left-2 z-20 hidden rounded-full border border-gray-200 bg-white px-4 py-2 text-[10px] font-semibold tracking-widest text-gray-500 shadow-lg sm:block">
            ENGINEERED FOR SOUND
          </div>

        </div>

      </div>

      <div className="flex justify-center pb-8">

        <a
          href="#products"
          className="group flex flex-col items-center gap-2 text-xs text-gray-400"
        >
          <span>Discover AURA</span>

          <span className="transition-transform duration-300 group-hover:translate-y-1">
            ↓
          </span>
        </a>

      </div>

    </section>
  );
}