export default function Footer() {
  const scrollTo = (id) => {
    const element = document.querySelector(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#050505] px-5 pb-6 pt-0 text-white">

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-white/[0.04] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-white/[0.05] blur-3xl" />

      <div className="pointer-events-none absolute right-[15%] top-10 h-40 w-40 rounded-full border border-white/[0.05]" />

      <div className="pointer-events-none absolute right-[17%] top-12 h-32 w-32 rounded-full border border-white/[0.04]" />

      <div className="relative mx-auto max-w-full">

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.10] to-white/[0.03] p-7 backdrop-blur-xl sm:p-10">

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

            <div className="max-w-xl">

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-400">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                AURA AUDIO
              </div>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Sound that moves
                <br />
                <span className="text-gray-500">
                  with you.
                </span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-6 text-gray-400 sm:text-base">
                Discover premium wireless earbuds built for
                music, movement, work, and everything in between.
              </p>

            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={() => scrollTo("#products")}
              className="group flex w-fit items-center gap-4 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-gray-200"
            >
              Explore Collection

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>

          {/* Decorative wave */}
          <div className="pointer-events-none absolute -bottom-20 right-10 flex items-center gap-2 opacity-10">

            <span className="h-20 w-1 rounded-full bg-white" />
            <span className="h-32 w-1 rounded-full bg-white" />
            <span className="h-48 w-1 rounded-full bg-white" />
            <span className="h-28 w-1 rounded-full bg-white" />
            <span className="h-16 w-1 rounded-full bg-white" />
            <span className="h-36 w-1 rounded-full bg-white" />
            <span className="h-24 w-1 rounded-full bg-white" />

          </div>

        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* BRAND */}
          <div>

            <button
              type="button"
              onClick={() => scrollTo("#home")}
              className="group flex items-center gap-3"
            >

              {/* Sound Logo */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white text-black transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">

                <div className="flex items-center gap-[3px]">

                  <span className="h-2 w-[3px] rounded-full bg-black" />
                  <span className="h-5 w-[3px] rounded-full bg-black" />
                  <span className="h-8 w-[3px] rounded-full bg-black" />
                  <span className="h-5 w-[3px] rounded-full bg-black" />
                  <span className="h-2 w-[3px] rounded-full bg-black" />

                </div>

              </div>

              <div className="text-left">

                <p className="text-xl font-black tracking-[0.22em]">
                  AURA
                </p>

                <p className="mt-1 text-[8px] tracking-[0.3em] text-gray-500">
                  SOUND • SIMPLIFIED
                </p>

              </div>

            </button>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-500">
              Premium wireless audio designed around you.
              Powerful sound, intelligent technology, and
              effortless comfort.
            </p>

            {/* Social */}
            <div className="mt-7 flex gap-3">

              {["IG", "X", "YT"].map((social) => (
                <button
                  key={social}
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-semibold text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
                >
                  {social}
                </button>
              ))}

            </div>

          </div>

          {/* SHOP */}
          <div>

            <h3 className="text-sm font-semibold">
              Shop
            </h3>

            <div className="mt-6 space-y-4">

              {[
                "All Products",
                "Wireless",
                "Noise Cancelling",
                "Sports",
                "Premium",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => scrollTo("#products")}
                  className="block text-sm text-gray-500 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          {/* COMPANY */}
          <div>

            <h3 className="text-sm font-semibold">
              Company
            </h3>

            <div className="mt-6 space-y-4">

              <button
                type="button"
                onClick={() => scrollTo("#about")}
                className="block text-sm text-gray-500 transition hover:translate-x-1 hover:text-white"
              >
                About AURA
              </button>

              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="block text-sm text-gray-500 transition hover:translate-x-1 hover:text-white"
              >
                Contact
              </button>

              <button
                type="button"
                onClick={() => scrollTo("#products")}
                className="block text-sm text-gray-500 transition hover:translate-x-1 hover:text-white"
              >
                Customer Reviews
              </button>

              <button
                type="button"
                className="block text-sm text-gray-500 transition hover:translate-x-1 hover:text-white"
              >
                Privacy Policy
              </button>

            </div>

          </div>

          {/* SUPPORT */}
          <div>

            <h3 className="text-sm font-semibold">
              Support
            </h3>

            <div className="mt-6 space-y-4">

              <p className="text-sm text-gray-500">
                Need help with your order?
              </p>

              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="group flex items-center gap-2 text-sm font-medium text-white"
              >
                Get in touch

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <div className="pt-2">
                <p className="text-xs text-gray-600">
                  Customer Support
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Available 24/7
                </p>
              </div>

            </div>

          </div>

        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} AURA. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-gray-600">

            <span>
              Premium Audio
            </span>

            <span className="h-1 w-1 rounded-full bg-gray-700" />

            <span>
              Made for Music
            </span>

            <span className="h-1 w-1 rounded-full bg-gray-700" />

            <span>
              India
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}