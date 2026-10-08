import { useState } from "react";

export default function OrderConfirmation({
  orderId,
  onContinue,
  onOrders,
}) {
  const [copied, setCopied] = useState(false);

  const copyOrderId = async () => {
    if (!orderId) return;

    try {
      await navigator.clipboard.writeText(orderId);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f5f7] px-5 pb-20 pt-28">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-150px] left-[-150px] h-[400px] w-[400px] rounded-full bg-gray-200/70 blur-3xl" />

      <div className="pointer-events-none absolute right-[-150px] top-1/3 h-[400px] w-[400px] rounded-full bg-white blur-3xl" />

      <div className="relative mx-auto max-w-full">

        {/* ================= SUCCESS HEADER ================= */}

        <div className="text-center">

          {/* Animated Success */}

          <div className="relative mx-auto h-32 w-32">

            <div className="absolute inset-0 animate-ping rounded-full bg-black/5" />

            <div className="absolute inset-3 rounded-full border border-gray-200 bg-white shadow-xl" />

            <div className="absolute inset-6 flex items-center justify-center rounded-full bg-black text-3xl text-white shadow-2xl transition-transform duration-500 hover:scale-110">
              ✓
            </div>

          </div>

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-[10px] font-semibold tracking-[0.25em] text-gray-500 shadow-sm">

            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

            PAYMENT SUCCESSFUL

          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
            You're all set.
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
            Your AURA order has been confirmed. Get ready
            for a new level of sound.
          </p>

        </div>


        <div className="mt-10 overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

          <div className="relative overflow-hidden bg-black px-6 py-8 text-white sm:px-10">

            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />

            <div className="absolute right-8 top-10 h-32 w-32 rounded-full border border-white/10" />

            <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

              <div>

                <p className="text-[9px] font-semibold tracking-[0.3em] text-gray-500">
                  AURA ORDER
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Order ID
                </p>

                <div className="mt-1 flex items-center gap-3">

                  <h2 className="text-xl font-semibold tracking-wide sm:text-2xl">
                    #{orderId || "N/A"}
                  </h2>

                  {orderId && (
                    <button
                      type="button"
                      onClick={copyOrderId}
                      className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-medium text-gray-300 transition hover:bg-white hover:text-black"
                    >
                      {copied ? "Copied ✓" : "Copy"}
                    </button>
                  )}

                </div>

              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/10">

                <div className="flex items-center gap-[3px]">

                  <span className="h-2 w-[2px] rounded-full bg-white" />
                  <span className="h-5 w-[2px] rounded-full bg-white" />
                  <span className="h-8 w-[2px] rounded-full bg-white" />
                  <span className="h-5 w-[2px] rounded-full bg-white" />
                  <span className="h-2 w-[2px] rounded-full bg-white" />

                </div>

              </div>

            </div>

          </div>


          <div className="p-6 sm:p-10">

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

              <div>

                <p className="text-[10px] font-semibold tracking-[0.22em] text-gray-400">
                  DELIVERY STATUS
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  Your order is on track
                </h2>

              </div>

              <div className="flex w-fit items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-xs font-semibold text-green-700">

                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

                Confirmed

              </div>

            </div>
            <div className="mt-10">

              <div className="relative">

                {/* Timeline line */}

                <div className="absolute left-5 top-5 h-[calc(100%-40px)] w-[2px] bg-gray-200" />

                <div className="absolute left-5 top-5 h-1/3 w-[2px] bg-black" />

                {/* Step 1 */}

                <div className="relative flex gap-5 pb-8">

                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-sm text-white shadow-lg">
                    ✓
                  </div>

                  <div>

                    <p className="text-sm font-semibold">
                      Order Confirmed
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-400">
                      Your payment was successful and your
                      order has been confirmed.
                    </p>

                  </div>

                </div>

                {/* Step 2 */}

                <div className="relative flex gap-5 pb-8">

                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white text-sm shadow-sm">
                    📦
                  </div>

                  <div>

                    <p className="text-sm font-semibold">
                      Preparing your order
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-400">
                      Our team is carefully packing your AURA
                      products.
                    </p>

                  </div>

                </div>

                {/* Step 3 */}

                <div className="relative flex gap-5 pb-8">

                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] text-sm text-gray-400">
                    🚚
                  </div>

                  <div>

                    <p className="text-sm font-medium text-gray-400">
                      Shipped
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-400">
                      Your package will soon be on its way.
                    </p>

                  </div>

                </div>

                {/* Step 4 */}

                <div className="relative flex gap-5">

                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] text-sm text-gray-400">
                    ⌂
                  </div>

                  <div>

                    <p className="text-sm font-medium text-gray-400">
                      Delivered
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-400">
                      Your AURA experience arrives at your
                      doorstep.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-gray-200 bg-[#fafafa]">

              <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">

                <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-400">
                  ESTIMATED DELIVERY
                </p>

                <span className="text-lg">
                  🚚
                </span>

              </div>

              <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <p className="text-2xl font-semibold">
                    3–5 days
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Your order will be delivered safely to
                    your doorstep.
                  </p>

                </div>

                <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">

                  <p className="text-[9px] font-semibold tracking-wider text-gray-400">
                    CURRENT STATUS
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    Being Prepared
                  </p>

                </div>

              </div>

            </div>


            <div className="mt-6 grid gap-3 sm:grid-cols-3">

              <div className="rounded-2xl border border-gray-100 bg-white p-4 text-center">

                <div className="text-lg">
                  🔒
                </div>

                <p className="mt-2 text-xs font-semibold">
                  Secure Payment
                </p>

                <p className="mt-1 text-[10px] text-gray-400">
                  Protected checkout
                </p>

              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-4 text-center">

                <div className="text-lg">
                  📦
                </div>

                <p className="mt-2 text-xs font-semibold">
                  Safe Packaging
                </p>

                <p className="mt-1 text-[10px] text-gray-400">
                  Carefully packed
                </p>

              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-4 text-center">

                <div className="text-lg">
                  ✓
                </div>

                <p className="mt-2 text-xs font-semibold">
                  AURA Verified
                </p>

                <p className="mt-1 text-[10px] text-gray-400">
                  Quality guaranteed
                </p>

              </div>

            </div>


            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <button
                type="button"
                onClick={onOrders}
                className="group flex items-center justify-center gap-3 rounded-2xl bg-black py-4 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800"
              >
                Track My Order

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </button>

              <button
                type="button"
                onClick={onContinue}
                className="group flex items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-md"
              >
                Continue Shopping

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </button>

            </div>

          </div>

        </div>


        <div className="mt-7 text-center">

          <p className="text-xs text-gray-400">
            Thank you for choosing
            <span className="mx-1 font-semibold text-black">
              AURA
            </span>
            — hear the difference.
          </p>

        </div>

      </div>

    </section>
  );
}