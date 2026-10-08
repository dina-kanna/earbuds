const categories = [
  {
    name: "Wireless",
    number: "01",
    label: "EVERYDAY AUDIO",
    description: "Freedom to move. Sound without limits.",
    symbol: "〰",
  },
  {
    name: "Noise Cancelling",
    number: "02",
    label: "DEEP FOCUS",
    description: "Silence the world. Hear what matters.",
    symbol: "◉",
  },
  {
    name: "Sports",
    number: "03",
    label: "ACTIVE AUDIO",
    description: "Built to move with your lifestyle.",
    symbol: "↗",
  },
  {
    name: "Premium",
    number: "04",
    label: "SIGNATURE SOUND",
    description: "Our most refined listening experience.",
    symbol: "◇",
  },
  {
    name: "Budget",
    number: "05",
    label: "SMART VALUE",
    description: "Premium AURA sound made accessible.",
    symbol: "＋",
  },
];

export default function Categories({
  active,
  setActive,
}) {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f7] px-5 py-24 sm:py-32">

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-white blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gray-200/60 blur-3xl" />

      <div className="relative mx-auto max-w-full">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold tracking-widest text-gray-500 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              EXPLORE AURA
            </div>

            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Find your
              <br />
              <span className="text-gray-400">
                perfect sound.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-gray-500 md:pb-2">
            From everyday listening to intense workouts,
            discover the AURA experience made for your
            lifestyle.
          </p>

        </div>

        {/* ================= CATEGORY GRID ================= */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category, index) => {
            const selected = active === category.name;

            const featured = index === 0;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() =>
                  setActive(
                    selected ? "All" : category.name
                  )
                }
                className={`group relative overflow-hidden rounded-[2rem] border text-left transition-all duration-500 ${
                  featured
                    ? "min-h-[360px] bg-black text-white md:col-span-2 lg:col-span-2"
                    : "min-h-[280px] border-gray-200 bg-white text-black hover:-translate-y-2 hover:shadow-2xl"
                } ${
                  selected && !featured
                    ? "border-black ring-2 ring-black/10"
                    : ""
                }`}
              >

                {/* Decorative circles */}
                <div
                  className={`absolute -right-20 -top-20 h-48 w-48 rounded-full border transition duration-700 group-hover:scale-125 ${
                    featured
                      ? "border-white/10"
                      : "border-gray-100"
                  }`}
                />

                <div
                  className={`absolute -right-10 -top-10 h-28 w-28 rounded-full border transition duration-700 group-hover:scale-125 ${
                    featured
                      ? "border-white/10"
                      : "border-gray-100"
                  }`}
                />

                {/* Glow */}
                <div
                  className={`absolute right-10 top-10 h-32 w-32 rounded-full blur-3xl transition duration-500 group-hover:scale-150 ${
                    featured
                      ? "bg-white/10"
                      : "bg-gray-100"
                  }`}
                />

                <div className="relative flex h-full min-h-[280px] flex-col justify-between p-7 sm:p-8">

                  {/* Top */}
                  <div className="flex items-start justify-between">

                    <span
                      className={`text-xs font-semibold tracking-[0.25em] ${
                        featured
                          ? "text-gray-500"
                          : "text-gray-400"
                      }`}
                    >
                      {category.number}
                    </span>

                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-full text-xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 ${
                        featured
                          ? "bg-white text-black"
                          : "bg-[#f5f5f7] text-black"
                      }`}
                    >
                      {category.symbol}
                    </span>

                  </div>

                  {/* Middle */}
                  <div>

                    <p
                      className={`text-[10px] font-semibold tracking-[0.25em] ${
                        featured
                          ? "text-gray-500"
                          : "text-gray-400"
                      }`}
                    >
                      {category.label}
                    </p>

                    <h3
                      className={`mt-3 font-semibold tracking-tight ${
                        featured
                          ? "text-3xl sm:text-4xl"
                          : "text-2xl"
                      }`}
                    >
                      {category.name}
                    </h3>

                    <p
                      className={`mt-3 max-w-sm text-sm leading-6 ${
                        featured
                          ? "text-gray-400"
                          : "text-gray-500"
                      }`}
                    >
                      {category.description}
                    </p>

                  </div>

                  {/* Bottom */}
                  <div className="mt-8 flex items-center justify-between">

                    <span
                      className={`text-xs font-medium ${
                        featured
                          ? "text-gray-400"
                          : "text-gray-500"
                      }`}
                    >
                      {selected
                        ? "Currently selected"
                        : "Explore collection"}
                    </span>

                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1 ${
                        featured
                          ? "bg-white/10 text-white group-hover:bg-white group-hover:text-black"
                          : "bg-black text-white"
                      }`}
                    >
                      →
                    </span>

                  </div>

                </div>

              </button>
            );
          })}

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-6 flex flex-col justify-between gap-5 rounded-[2rem] border border-gray-200 bg-white p-6 sm:flex-row sm:items-center sm:p-7">

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
              {active === "All" ? "A" : "✓"}
            </div>

            <div>
              <p className="text-sm font-semibold">
                {active === "All"
                  ? "All AURA products"
                  : active}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                {active === "All"
                  ? "Explore the complete collection"
                  : "Showing products from this category"}
              </p>
            </div>

          </div>

          <button
            type="button"
            onClick={() => setActive("All")}
            className="group flex items-center gap-3 text-sm font-medium"
          >
            View all products

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

        </div>

      </div>
    </section>
  );
}