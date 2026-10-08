import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:py-32">

      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-white/[0.04] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute right-[5%] top-[-120px] h-[420px] w-[420px] rounded-full border border-white/[0.05]" />

      <div className="pointer-events-none absolute right-[8%] top-[-90px] h-[360px] w-[360px] rounded-full border border-white/[0.04]" />

      <div className="relative mx-auto max-w-full">

        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.10] via-white/[0.05] to-white/[0.02] px-6 py-12 shadow-2xl backdrop-blur-xl sm:px-10 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute bottom-[-20px] right-[-20px] flex h-60 items-center gap-2 opacity-[0.08]">

            <span className="h-16 w-1 rounded-full bg-white" />
            <span className="h-28 w-1 rounded-full bg-white" />
            <span className="h-44 w-1 rounded-full bg-white" />
            <span className="h-32 w-1 rounded-full bg-white" />
            <span className="h-52 w-1 rounded-full bg-white" />
            <span className="h-36 w-1 rounded-full bg-white" />
            <span className="h-48 w-1 rounded-full bg-white" />
            <span className="h-24 w-1 rounded-full bg-white" />
            <span className="h-40 w-1 rounded-full bg-white" />
            <span className="h-20 w-1 rounded-full bg-white" />

          </div>

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold tracking-[0.25em] text-gray-400">

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />

                AURA INSIDER

              </div>

              <h2 className="mt-7 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">

                Be the first
                <br />

                <span className="text-gray-500">
                  to hear what's next.
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">

                Get early access to new AURA products,
                exclusive offers, limited editions, and
                everything happening in the world of sound.

              </p>

              {/* Small benefits */}

              <div className="mt-8 flex flex-wrap gap-3">

                <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-400">
                  ✦ Early access
                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-400">
                  ✦ Exclusive offers
                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-400">
                  ✦ New releases
                </div>

              </div>

            </div>

            <div className="relative">

              {subscribed ? (

                /* SUCCESS STATE */

                <div className="rounded-[2rem] border border-white/10 bg-black/40 p-8 text-center backdrop-blur-xl">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl text-black">
                    ✓
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    You're in.
                  </h3>

                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-400">
                    Welcome to AURA Insider. We'll keep you
                    updated with what's new.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubscribed(false)}
                    className="mt-6 rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:bg-white hover:text-black"
                  >
                    Subscribe another email
                  </button>

                </div>

              ) : (

                /* FORM */

                <div className="rounded-[2rem] border border-white/10 bg-black/40 p-6 backdrop-blur-xl sm:p-8">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs font-semibold tracking-[0.2em] text-gray-500">
                        JOIN THE LIST
                      </p>

                      <p className="mt-2 text-xl font-semibold">
                        Your inbox, upgraded.
                      </p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">

                      <div className="flex items-center gap-[3px]">

                        <span className="h-2 w-[2px] rounded-full bg-white" />
                        <span className="h-5 w-[2px] rounded-full bg-white" />
                        <span className="h-8 w-[2px] rounded-full bg-white" />
                        <span className="h-5 w-[2px] rounded-full bg-white" />
                        <span className="h-2 w-[2px] rounded-full bg-white" />

                      </div>

                    </div>

                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-7"
                  >

                    <label className="mb-2 block text-xs text-gray-500">
                      Email address
                    </label>

                    <div className="flex flex-col gap-3 sm:flex-row">

                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(event) =>
                          setEmail(event.target.value)
                        }
                        placeholder="you@example.com"
                        className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-white/40 focus:bg-white/10"
                      />

                      <button
                        type="submit"
                        className="group flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200 hover:shadow-xl"
                      >
                        Subscribe

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>

                      </button>

                    </div>

                  </form>

                  <p className="mt-4 text-[11px] leading-5 text-gray-600">
                    No spam. Just great sound, product updates,
                    and occasional AURA surprises.
                  </p>

                </div>

              )}

            </div>

          </div>

        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">

            <p className="text-2xl font-semibold">
              50K+
            </p>

            <p className="mt-1 text-xs text-gray-600">
              AURA listeners
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">

            <p className="text-2xl font-semibold">
              4.9/5
            </p>

            <p className="mt-1 text-xs text-gray-600">
              Customer rating
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">

            <p className="text-2xl font-semibold">
              24/7
            </p>

            <p className="mt-1 text-xs text-gray-600">
              AURA support
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}