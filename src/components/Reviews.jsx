const reviews = [
  {
    name: "Rahul Sharma",
    role: "Verified Listener",
    rating: "5.0",
    text: "The sound quality is incredible. The ANC is seriously impressive, especially when I'm travelling or working in busy places.",
    initials: "RS",
  },
  {
    name: "Priya Nair",
    role: "Verified Listener",
    rating: "4.9",
    text: "Beautiful design and extremely comfortable. I can wear them for hours without feeling any discomfort.",
    initials: "PN",
  },
  {
    name: "Arjun Mehta",
    role: "Verified Listener",
    rating: "4.9",
    text: "Battery life is excellent and the audio feels genuinely premium. AURA has become my everyday pair.",
    initials: "AM",
  },
  {
    name: "Sneha Kapoor",
    role: "Verified Listener",
    rating: "5.0",
    text: "The bass is powerful without losing clarity. Easily one of the best earbuds I've used in this price range.",
    initials: "SK",
  },
];

export default function Reviews() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f7] px-5 py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-white blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-gray-200/70 blur-3xl" />

      <div className="relative mx-auto max-w-full">

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold tracking-widest text-gray-500 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              CUSTOMER LOVE
            </div>

            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Loved by
              <br />
              <span className="text-gray-400">
                people who listen.
              </span>
            </h2>

          </div>

          <p className="max-w-md text-sm leading-7 text-gray-500 lg:pb-2">
            Real experiences from AURA listeners who choose
            better sound, thoughtful design, and everyday comfort.
          </p>

        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.65fr_1.35fr]">

          {/* Rating card */}

          <div className="relative overflow-hidden rounded-[2rem] bg-black p-7 text-white sm:p-9">

            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-white/10" />

            <div className="absolute -right-5 top-10 h-24 w-24 rounded-full border border-white/10" />

            <div className="relative">

              <p className="text-xs font-semibold tracking-[0.25em] text-gray-500">
                AURA RATING
              </p>

              <div className="mt-7 flex items-end gap-3">

                <span className="text-6xl font-semibold tracking-tight">
                  4.9
                </span>

                <span className="mb-2 text-sm text-gray-500">
                  / 5
                </span>

              </div>

              <div className="mt-4 flex gap-1 text-xl">
                ★ ★ ★ ★ ★
              </div>

              <p className="mt-5 text-sm leading-6 text-gray-400">
                Based on thousands of verified AURA
                listening experiences.
              </p>

              {/* Rating bars */}

              <div className="mt-8 space-y-3">

                {[
                  ["5", "94%"],
                  ["4", "4%"],
                  ["3", "1%"],
                  ["2", "0.5%"],
                  ["1", "0.5%"],
                ].map(([star, width]) => (
                  <div
                    key={star}
                    className="flex items-center gap-3"
                  >

                    <span className="w-3 text-xs text-gray-500">
                      {star}
                    </span>

                    <span className="text-xs text-gray-500">
                      ★
                    </span>

                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-white"
                        style={{ width }}
                      />
                    </div>

                    <span className="w-8 text-right text-[10px] text-gray-600">
                      {width}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* Featured review */}

          <div className="group relative overflow-hidden rounded-[2rem] bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-9">

            <div className="absolute right-8 top-6 text-7xl font-serif leading-none text-gray-100">
              “
            </div>

            <div className="relative">

              <div className="flex items-center justify-between">

                <div className="flex gap-1 text-lg">
                  ★★★★★
                </div>

                <span className="rounded-full bg-[#f5f5f7] px-3 py-1.5 text-[10px] font-semibold tracking-wider text-gray-500">
                  VERIFIED
                </span>

              </div>

              <p className="mt-9 max-w-2xl text-2xl font-medium leading-relaxed tracking-tight sm:text-3xl">
                “AURA has completely changed how I listen
                to music. The sound feels immersive without
                being overwhelming.”
              </p>

              <div className="mt-9 flex items-center justify-between border-t border-gray-100 pt-6">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
                    VK
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Vikram Kapoor
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Verified AURA listener
                    </p>
                  </div>

                </div>

                <div className="text-right">
                  <p className="text-lg font-semibold">
                    5.0
                  </p>

                  <p className="text-[10px] text-gray-400">
                    RATING
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {reviews.map((review, index) => (
            <article
              key={review.name}
              className={`group relative overflow-hidden rounded-[2rem] p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                index === 0
                  ? "bg-white"
                  : index === 1
                  ? "bg-white"
                  : index === 2
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >

              {/* Decorative number */}

              <span
                className={`absolute right-5 top-4 text-5xl font-semibold transition duration-500 group-hover:scale-110 ${
                  index === 2
                    ? "text-white/[0.05]"
                    : "text-black/[0.04]"
                }`}
              >
                0{index + 1}
              </span>

              <div className="relative">

                {/* Rating */}

                <div className="flex items-center justify-between">

                  <div
                    className={`text-sm ${
                      index === 2
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    ★★★★★
                  </div>

                  <span
                    className={`text-xs font-semibold ${
                      index === 2
                        ? "text-gray-500"
                        : "text-gray-400"
                    }`}
                  >
                    {review.rating}
                  </span>

                </div>

                {/* Review */}

                <p
                  className={`mt-7 text-sm leading-7 ${
                    index === 2
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  “{review.text}”
                </p>

                {/* User */}

                <div className="mt-7 flex items-center gap-3">

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold ${
                      index === 2
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    }`}
                  >
                    {review.initials}
                  </div>

                  <div>

                    <p className="text-sm font-semibold">
                      {review.name}
                    </p>

                    <p
                      className={`mt-0.5 text-[10px] ${
                        index === 2
                          ? "text-gray-600"
                          : "text-gray-400"
                      }`}
                    >
                      {review.role}
                    </p>

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

        <div className="mt-6 flex flex-col justify-between gap-5 rounded-[2rem] border border-gray-200 bg-white p-6 sm:flex-row sm:items-center sm:p-7">

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
              ✓
            </div>

            <div>
              <p className="text-sm font-semibold">
                Trusted by 50K+ listeners
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Authentic reviews from verified AURA customers
              </p>
            </div>

          </div>

          <div className="flex items-center gap-2 text-sm font-medium">

            <span>See why people choose AURA</span>

            <span className="transition-transform duration-300 hover:translate-x-1">
              →
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}