import ProductCard from "./ProductCard";

export default function ProductGrid({
  products = [],
  search = "",
  setSearch,
  onAddToCart,
  onDetails,
}) {
  return (
    <section
      id="products"
      className="scroll-mt-24 bg-[#f5f5f7] px-2 py-10 sm:px-3 sm:py-0"
    >
      <div className="mx-auto w-full max-w-[1500px]">

        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 sm:text-sm">
              Our Collection
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
              Choose your earbuds
            </h2>

            <p className="mt-3 text-sm text-gray-500 sm:text-base">
              Premium sound. Beautifully designed.
            </p>
          </div>

          {/* =========================
              SEARCH
          ========================= */}
          <div className="relative w-full md:w-72 lg:w-80">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              🔍
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch?.(e.target.value)}
              placeholder="Search earbuds..."
              aria-label="Search earbuds"
              className="
                w-full
                rounded-full
                border border-gray-200
                bg-white
                py-3
                pl-11
                pr-11
                text-sm
                text-black
                outline-none
                transition-all
                duration-300
                placeholder:text-gray-400
                hover:border-gray-300
                focus:border-black
                focus:ring-2
                focus:ring-black/5
              "
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch?.("")}
                aria-label="Clear search"
                className="
                  absolute
                  right-3
                  top-1/2
                  flex
                  h-7
                  w-7
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-gray-100
                  text-xs
                  text-gray-500
                  transition-all
                  duration-200
                  hover:bg-black
                  hover:text-white
                "
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* =========================
            PRODUCT COUNT
        ========================= */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-xs text-gray-400 sm:text-sm">
            Showing{" "}
            <span className="font-semibold text-black">
              {products.length}
            </span>{" "}
            {products.length === 1 ? "product" : "products"}
          </p>
        </div>

        {/* =========================
            PRODUCT GRID
        ========================= */}
        {products.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              sm:gap-6
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onDetails={onDetails}
              />
            ))}
          </div>
        ) : (
          /* =========================
             EMPTY STATE
          ========================= */
          <div className="rounded-[28px] border border-gray-200 bg-white px-6 py-20 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f5f5f7] text-2xl">
              🔎
            </div>

            <p className="mt-5 text-lg font-semibold text-black">
              No products found
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Try a different search.
            </p>

            {search && (
              <button
                type="button"
                onClick={() => setSearch?.("")}
                className="
                  mt-5
                  rounded-full
                  bg-black
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-gray-800
                "
              >
                Clear Search
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}