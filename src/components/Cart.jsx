export default function Cart({
  cart = [],
  open,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
}) {
  if (!open) return null;

  const GST_RATE = 18;
  const FREE_DELIVERY_LIMIT = 2000;
  const DELIVERY_CHARGE = 99;

  const itemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = cart.reduce((sum, item) => {
    if (!item.oldPrice) return sum;

    return (
      sum +
      (item.oldPrice - item.price) * item.quantity
    );
  }, 0);

  const gst = Math.round(
    subtotal * (GST_RATE / 100)
  );

  const delivery =
    subtotal >= FREE_DELIVERY_LIMIT
      ? 0
      : DELIVERY_CHARGE;

  const total = subtotal + gst + delivery;

  const deliveryProgress = Math.min(
    (subtotal / FREE_DELIVERY_LIMIT) * 100,
    100
  );

  const remainingForFreeDelivery = Math.max(
    FREE_DELIVERY_LIMIT - subtotal,
    0
  );

  return (
    <div className="fixed inset-0 z-[70]">

      {/* =====================================================
          BACKDROP
      ====================================================== */}

      <button
        type="button"
        aria-label="Close cart"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/50 backdrop-blur-md"
      />

      {/* =====================================================
          CART DRAWER
      ====================================================== */}

      <aside className="absolute right-2 top-2 flex h-[calc(100%-16px)] w-[calc(100%-16px)] max-w-[520px] flex-col overflow-hidden rounded-[2rem] border border-white/20 bg-[#f5f5f7] shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:right-3 sm:top-3 sm:h-[calc(100%-24px)] sm:w-[calc(100%-24px)]">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <header className="relative shrink-0 overflow-hidden bg-black px-5 pb-6 pt-5 text-white sm:px-7">

          {/* Decorative rings */}

          <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full border border-white/[0.08]" />

          <div className="pointer-events-none absolute -right-4 -top-8 h-32 w-32 rounded-full border border-white/[0.08]" />

          <div className="pointer-events-none absolute bottom-[-70px] left-[-50px] h-40 w-40 rounded-full bg-white/[0.025]" />

          {/* BACK TO SHOPPING ACTION */}
          <div className="relative mb-4 flex items-center">
            <button
              type="button"
              onClick={onClose}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-gray-300 transition-all duration-300 hover:bg-white hover:text-black"
            >
              <span className="text-sm transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              <span>Continue Shopping</span>
            </button>
          </div>

          <div className="relative flex items-center justify-between">

            {/* BRAND */}

            <div className="flex items-center gap-3">

              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-xl">

                <div className="flex h-7 items-center gap-[3px]">

                  <span className="h-2 w-[2px] rounded-full bg-black transition-all duration-500" />

                  <span className="h-5 w-[2px] rounded-full bg-black transition-all duration-500" />

                  <span className="h-7 w-[2px] rounded-full bg-black transition-all duration-500" />

                  <span className="h-5 w-[2px] rounded-full bg-black transition-all duration-500" />

                  <span className="h-2 w-[2px] rounded-full bg-black transition-all duration-500" />

                </div>

              </div>

              <div>

                <p className="text-[8px] font-bold tracking-[0.35em] text-gray-500">
                  AURA STORE
                </p>

                <h2 className="mt-1 text-xl font-semibold tracking-tight">
                  Shopping Bag
                </h2>

              </div>

            </div>

            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close cart"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xl text-gray-400 transition-all duration-300 hover:rotate-90 hover:bg-white hover:text-black"
            >
              ×
            </button>

          </div>

          {/* CART STATUS */}

          <div className="relative mt-6 flex items-center justify-between">

            <div>

              <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500">
                YOUR SELECTION
              </p>

              <p className="mt-1 text-sm text-gray-300">
                {itemCount}{" "}
                {itemCount === 1 ? "item" : "items"} in your bag
              </p>

            </div>

            {itemCount > 0 && (
              <div className="flex h-9 min-w-9 items-center justify-center rounded-full bg-white px-3 text-xs font-bold text-black shadow-lg">
                {itemCount}
              </div>
            )}

          </div>

        </header>

        {/* ===================================================
            CONTENT
        ==================================================== */}

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5">

          {cart.length === 0 ? (

            /* =================================================
               EMPTY CART
            ================================================== */

            <div className="flex min-h-full flex-col items-center justify-center px-5 py-10 text-center">

              <div className="relative">

                <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] bg-white text-5xl shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                  🎧
                </div>

                <div className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black text-xs font-bold text-white shadow-lg">
                  0
                </div>

              </div>

              <p className="mt-7 text-2xl font-semibold tracking-tight">
                Your bag is empty
              </p>

              <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500">
                Your next listening experience is waiting.
                Discover AURA and find your perfect sound.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="group mt-7 flex items-center gap-3 rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                <span>Explore AURA Shop</span>
              </button>

            </div>

          ) : (

            <div className="space-y-4">

              {/* =================================================
                  FREE DELIVERY CARD
              ================================================== */}

              <div className="overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white p-4 shadow-sm">

                <div className="flex items-center gap-4">

                  {/* PROGRESS CIRCLE */}

                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">

                    <svg
                      viewBox="0 0 42 42"
                      className="h-14 w-14 -rotate-90"
                    >
                      <circle
                        cx="21"
                        cy="21"
                        r="17"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-gray-100"
                      />

                      <circle
                        cx="21"
                        cy="21"
                        r="17"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="106.8"
                        strokeDashoffset={
                          106.8 -
                          (106.8 *
                            deliveryProgress) /
                            100
                        }
                        className="text-black transition-all duration-700"
                      />
                    </svg>

                    <span className="absolute text-sm">
                      {delivery === 0 ? "✓" : "🚚"}
                    </span>

                  </div>

                  <div className="min-w-0 flex-1">

                    <p className="text-sm font-semibold">

                      {delivery === 0
                        ? "Free delivery unlocked"
                        : `₹${remainingForFreeDelivery.toLocaleString(
                            "en-IN"
                          )} away from free delivery`}

                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-gray-400">

                      {delivery === 0
                        ? "Nice! Your order qualifies for free shipping."
                        : "Spend ₹2,000 or more and we'll deliver for free."}

                    </p>

                  </div>

                </div>

                {delivery > 0 && (
                  <div className="mt-4">

                    <div className="h-1 overflow-hidden rounded-full bg-gray-100">

                      <div
                        className="h-full rounded-full bg-black transition-all duration-700"
                        style={{
                          width: `${deliveryProgress}%`,
                        }}
                      />

                    </div>

                    <div className="mt-2 flex justify-between text-[9px] text-gray-400">

                      <span>
                        ₹{subtotal.toLocaleString("en-IN")}
                      </span>

                      <span>
                        ₹2,000
                      </span>

                    </div>

                  </div>
                )}

              </div>

              {/* =================================================
                  CART PRODUCTS
              ================================================== */}

              {cart.map((item) => (

                <article
                  key={item.id}
                  className="group relative overflow-hidden rounded-[1.6rem] border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* PRODUCT */}

                  <div className="flex gap-4">

                    {/* IMAGE */}

                    <div className="relative h-[105px] w-[105px] shrink-0 overflow-hidden rounded-[1.4rem] bg-[#f5f5f7]">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* IMAGE SHINE */}

                      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                      {item.badge && (
                        <span className="absolute left-2 top-2 rounded-full bg-black px-2.5 py-1 text-[7px] font-bold tracking-wider text-white">
                          {item.badge}
                        </span>
                      )}

                    </div>

                    {/* INFO */}

                    <div className="min-w-0 flex-1">

                      <div className="flex items-start justify-between gap-2">

                        <div className="min-w-0">

                          <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">
                            {item.category}
                          </p>

                          <h3 className="mt-1 truncate text-sm font-semibold tracking-tight">
                            {item.name}
                          </h3>

                        </div>

                        {/* REMOVE */}

                        <button
                          type="button"
                          onClick={() =>
                            onRemove(item.id)
                          }
                          aria-label={`Remove ${item.name}`}
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] text-sm text-gray-400 transition-all duration-300 hover:rotate-90 hover:bg-black hover:text-white"
                        >
                          ×
                        </button>

                      </div>

                      {/* PRICE */}

                      <div className="mt-2 flex items-center gap-2">

                        <span className="text-base font-semibold">
                          ₹{item.price.toLocaleString("en-IN")}
                        </span>

                        {item.oldPrice && (
                          <span className="text-[10px] text-gray-400 line-through">
                            ₹{item.oldPrice.toLocaleString("en-IN")}
                          </span>
                        )}

                      </div>

                      {/* QUANTITY */}

                      <div className="mt-3 flex items-center justify-between">

                        <div className="flex items-center rounded-full border border-gray-200 bg-[#f7f7f8] p-1">

                          <button
                            type="button"
                            onClick={() =>
                              onDecrease(item.id)
                            }
                            aria-label={`Decrease ${item.name} quantity`}
                            className="flex h-7 w-7 items-center justify-center rounded-full text-base text-gray-500 transition-all duration-200 hover:bg-black hover:text-white"
                          >
                            −
                          </button>

                          <span className="flex h-7 min-w-8 items-center justify-center text-[11px] font-bold">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              onIncrease(item.id)
                            }
                            aria-label={`Increase ${item.name} quantity`}
                            className="flex h-7 w-7 items-center justify-center rounded-full text-base text-gray-500 transition-all duration-200 hover:bg-black hover:text-white"
                          >
                            +
                          </button>

                        </div>

                        <span className="text-xs font-semibold text-gray-500">
                          ₹{(
                            item.price *
                            item.quantity
                          ).toLocaleString("en-IN")}
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* SAVING */}

                  {item.oldPrice &&
                    item.oldPrice > item.price && (
                      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">

                        <span className="text-[9px] font-medium text-gray-400">
                          You're saving
                        </span>

                        <span className="rounded-full bg-green-50 px-2.5 py-1 text-[9px] font-bold text-green-600">
                          ₹{(
                            (item.oldPrice -
                              item.price) *
                            item.quantity
                          ).toLocaleString("en-IN")}{" "}
                          saved
                        </span>

                      </div>
                    )}

                </article>

              ))}

            </div>

          )}

        </div>

        {/* =====================================================
            CHECKOUT FOOTER
        ====================================================== */}

        {cart.length > 0 && (

          <div className="shrink-0 border-t border-gray-200 bg-white px-5 pb-5 pt-4 shadow-[0_-15px_40px_rgba(0,0,0,0.05)]">

            {/* SAVINGS */}

            {discount > 0 && (
              <div className="mb-4 flex items-center justify-between rounded-2xl bg-black px-4 py-3.5 text-white">

                <div className="flex items-center gap-2">

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs">
                    ✦
                  </span>

                  <span className="text-xs text-gray-300">
                    Total savings
                  </span>

                </div>

                <span className="text-sm font-bold">
                  ₹{discount.toLocaleString("en-IN")}
                </span>

              </div>
            )}

            {/* PRICE BREAKDOWN */}

            <div className="space-y-2.5 text-sm">

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Subtotal
                </span>

                <span className="font-medium">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  GST ({GST_RATE}%)
                </span>

                <span className="font-medium">
                  ₹{gst.toLocaleString("en-IN")}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Delivery
                </span>

                <span
                  className={
                    delivery === 0
                      ? "font-semibold text-green-600"
                      : "font-medium"
                  }
                >
                  {delivery === 0
                    ? "FREE"
                    : `₹${delivery}`}
                </span>

              </div>

            </div>

            {/* TOTAL */}

            <div className="my-4 border-t border-dashed border-gray-200 pt-4">

              <div className="flex items-end justify-between">

                <div>

                  <p className="text-[9px] font-bold tracking-[0.2em] text-gray-400">
                    TOTAL PAYABLE
                  </p>

                  <p className="mt-1 text-3xl font-semibold tracking-tight">
                    ₹{total.toLocaleString("en-IN")}
                  </p>

                </div>

                <div className="rounded-full bg-[#f5f5f7] px-3 py-1.5 text-[8px] font-bold tracking-wider text-gray-400">
                  INR • GST INCLUDED
                </div>

              </div>

            </div>

            {/* CHECKOUT BUTTON */}

            <button
              type="button"
              onClick={onCheckout}
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-black py-4 text-sm font-semibold text-white shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-2xl"
            >

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative">
                Proceed to Checkout
              </span>

              <span className="relative text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </button>

            {/* TRUST */}

            <div className="mt-3 flex items-center justify-center gap-2 text-[9px] text-gray-400">

              <span>🔒 Secure checkout</span>

              <span className="h-1 w-1 rounded-full bg-gray-300" />

              <span>✓ Trusted payment</span>

              <span className="h-1 w-1 rounded-full bg-gray-300" />

              <span>↩ Easy returns</span>

            </div>

          </div>

        )}

      </aside>

    </div>
  );
}