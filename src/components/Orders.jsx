export default function Orders({ orders = [], onBack, onContinueShopping }) {
  const getOrderTotal = (order) => {
    return order.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  };

  const getItemCount = (order) => {
    return order.items.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  };

  const formatTime = (order) => {
    if (order.time) return order.time;
    return "Just now";
  };

  const statuses = [
    {
      title: "Order Confirmed",
      description: "Your order has been received",
      icon: "✓",
    },
    {
      title: "Preparing",
      description: "Your AURA products are being packed",
      icon: "📦",
    },
    {
      title: "Shipped",
      description: "Your package is on the way",
      icon: "→",
    },
    {
      title: "Delivered",
      description: "Arriving at your doorstep",
      icon: "⌂",
    },
  ];

  return (
    <section className="min-h-screen overflow-hidden bg-[#f5f5f7] px-5 pb-24 pt-32">


      <div className="pointer-events-none fixed left-[-180px] top-40 h-96 w-96 rounded-full bg-white blur-3xl" />

      <div className="pointer-events-none fixed bottom-0 right-[-180px] h-96 w-96 rounded-full bg-gray-200/60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">


        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

          <div>

            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="group mb-6 flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
              >
                <span className="transition-transform group-hover:-translate-x-1">
                  ←
                </span>

                Back to Profile
              </button>
            )}

            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-[10px] font-semibold tracking-[0.25em] text-gray-500 shadow-sm">

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black" />

              AURA ACCOUNT

            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              My Orders
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
              Track your AURA purchases and see your delivery
              progress in real time.
            </p>

          </div>

          {/* Order count */}

          <div className="flex w-fit items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
              {orders.length}
            </div>

            <div>
              <p className="text-xs font-semibold">
                Total Orders
              </p>

              <p className="mt-1 text-[10px] text-gray-400">
                AURA purchase history
              </p>
            </div>

          </div>

        </div>

        {orders.length === 0 ? (

          <div className="mt-10 overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm">

            <div className="relative flex min-h-[500px] flex-col items-center justify-center px-6 text-center">

              {/* Decorative circles */}

              <div className="absolute h-64 w-64 rounded-full border border-gray-100" />

              <div className="absolute h-44 w-44 rounded-full border border-gray-100" />

              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-black text-4xl text-white shadow-2xl">
                📦
              </div>

              <p className="mt-8 text-2xl font-semibold">
                No orders yet
              </p>

              <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
                Your AURA journey starts here. Explore our
                collection and find your perfect sound.
              </p>

              {onContinueShopping && (
                <button
                  type="button"
                  onClick={onContinueShopping}
                  className="group mt-7 flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800"
                >
                  Explore AURA

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              )}

            </div>

          </div>

        ) : (

          <div className="mt-10 space-y-6">

            {orders.map((order, orderIndex) => {

              const total = getOrderTotal(order);
              const itemCount = getItemCount(order);

              return (
                <article
                  key={order.id}
                  className="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="relative overflow-hidden bg-black p-6 text-white sm:p-8">

                    {/* Decoration */}

                    <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-white/10" />

                    <div className="absolute -right-5 top-10 h-28 w-28 rounded-full border border-white/10" />

                    <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

                      <div>

                        <div className="flex items-center gap-3">

                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                            <div className="flex items-center gap-[2px]">
                              <span className="h-2 w-[2px] rounded-full bg-black" />
                              <span className="h-5 w-[2px] rounded-full bg-black" />
                              <span className="h-7 w-[2px] rounded-full bg-black" />
                              <span className="h-5 w-[2px] rounded-full bg-black" />
                              <span className="h-2 w-[2px] rounded-full bg-black" />
                            </div>
                          </span>

                          <div>

                            <p className="text-[9px] font-semibold tracking-[0.25em] text-gray-500">
                              AURA ORDER
                            </p>

                            <p className="mt-1 text-sm font-semibold">
                              #{order.id}
                            </p>

                          </div>

                        </div>

                      </div>

                      <div className="flex flex-wrap items-center gap-3">

                        <div className="rounded-full bg-white/10 px-4 py-2 text-xs text-gray-300">
                          {order.date || "Today"}
                        </div>

                        <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black">
                          ✓ Confirmed
                        </div>

                      </div>

                    </div>

                  </div>


                  <div className="grid gap-4 border-b border-gray-100 p-6 sm:grid-cols-3 sm:p-8">

                    <div className="rounded-2xl bg-[#f5f5f7] p-4">

                      <p className="text-[10px] font-semibold tracking-wider text-gray-400">
                        ORDER TIME
                      </p>

                      <p className="mt-2 text-sm font-semibold">
                        {formatTime(order)}
                      </p>

                    </div>

                    <div className="rounded-2xl bg-[#f5f5f7] p-4">

                      <p className="text-[10px] font-semibold tracking-wider text-gray-400">
                        PRODUCTS
                      </p>

                      <p className="mt-2 text-sm font-semibold">
                        {itemCount}{" "}
                        {itemCount === 1 ? "item" : "items"}
                      </p>

                    </div>

                    <div className="rounded-2xl bg-[#f5f5f7] p-4">

                      <p className="text-[10px] font-semibold tracking-wider text-gray-400">
                        ORDER TOTAL
                      </p>

                      <p className="mt-2 text-sm font-semibold">
                        ₹{total.toLocaleString("en-IN")}
                      </p>

                    </div>

                  </div>


                  <div className="p-6 sm:p-8">

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-400">
                          DELIVERY TRACKING
                        </p>

                        <h3 className="mt-2 text-xl font-semibold">
                          Your order is on its way
                        </h3>

                      </div>

                      <span className="hidden rounded-full bg-green-50 px-4 py-2 text-xs font-semibold text-green-700 sm:block">
                        ● In Progress
                      </span>

                    </div>

                    {/* Progress */}

                    <div className="relative mt-10">

                      {/* Line */}

                      <div className="absolute left-5 right-5 top-5 h-1 rounded-full bg-gray-200" />

                      <div className="absolute left-5 top-5 h-1 w-[18%] rounded-full bg-black sm:w-[30%]" />

                      {/* Steps */}

                      <div className="relative grid grid-cols-4">

                        {statuses.map((status, index) => {

                          const active = index === 0;
                          const completed = index === 0;

                          return (
                            <div
                              key={status.title}
                              className="flex flex-col items-center text-center"
                            >

                              <div
                                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white text-xs shadow-md transition-all duration-500 ${
                                  completed
                                    ? "bg-black text-white"
                                    : "bg-gray-200 text-gray-400"
                                } ${
                                  active
                                    ? "ring-4 ring-black/10"
                                    : ""
                                }`}
                              >
                                {status.icon}
                              </div>

                              <p
                                className={`mt-4 text-[10px] font-semibold sm:text-xs ${
                                  completed
                                    ? "text-black"
                                    : "text-gray-400"
                                }`}
                              >
                                {status.title}
                              </p>

                              <p className="mt-1 hidden max-w-[130px] text-[9px] leading-4 text-gray-400 sm:block">
                                {status.description}
                              </p>

                            </div>
                          );
                        })}

                      </div>

                    </div>

                    {/* Delivery time */}

                    <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border border-gray-200 bg-[#fafafa] p-5 sm:flex-row sm:items-center">

                      <div className="flex items-center gap-4">

                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                          🚚
                        </div>

                        <div>

                          <p className="text-sm font-semibold">
                            Estimated delivery
                          </p>

                          <p className="mt-1 text-xs text-gray-500">
                            3–5 business days
                          </p>

                        </div>

                      </div>

                      <div className="text-left sm:text-right">

                        <p className="text-[10px] font-semibold tracking-wider text-gray-400">
                          STATUS UPDATED
                        </p>

                        <p className="mt-1 text-xs font-medium">
                          {formatTime(order)}
                        </p>

                      </div>

                    </div>

                  </div>


                  <div className="border-t border-gray-100 bg-[#fafafa] p-6 sm:p-8">

                    <div className="mb-5 flex items-center justify-between">

                      <div>

                        <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-400">
                          ORDER ITEMS
                        </p>

                        <h3 className="mt-1 text-lg font-semibold">
                          Your AURA products
                        </h3>

                      </div>

                      <span className="text-xs text-gray-400">
                        {itemCount} items
                      </span>

                    </div>

                    <div className="space-y-3">

                      {order.items.map((item) => (

                        <div
                          key={item.id}
                          className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-3 transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
                        >

                          {/* Image */}

                          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#f5f5f7]">

                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                            />

                          </div>

                          {/* Info */}

                          <div className="min-w-0 flex-1">

                            <p className="truncate text-sm font-semibold">
                              {item.name}
                            </p>

                            <p className="mt-1 text-xs text-gray-400">
                              {item.category}
                            </p>

                          </div>

                          {/* Quantity */}

                          <div className="hidden rounded-full bg-[#f5f5f7] px-3 py-1.5 text-[10px] font-semibold sm:block">
                            × {item.quantity}
                          </div>

                          {/* Price */}

                          <p className="text-sm font-semibold">
                            ₹{(
                              item.price *
                              item.quantity
                            ).toLocaleString("en-IN")}
                          </p>

                        </div>

                      ))}

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        )}

        {orders.length > 0 && onContinueShopping && (

          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-[2rem] border border-gray-200 bg-white p-6 sm:flex-row sm:p-7">

            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                ♪
              </div>

              <div>

                <p className="text-sm font-semibold">
                  Looking for something new?
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Discover the latest AURA sound.
                </p>

              </div>

            </div>

            <button
              type="button"
              onClick={onContinueShopping}
              className="group flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800"
            >
              Continue Shopping

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>

        )}

      </div>

    </section>
  );
}