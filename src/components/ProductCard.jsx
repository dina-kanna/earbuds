
import { useState } from "react";

export default function ProductCard({
  product,
  onAddToCart,
  onDetails,
}) {
  const [liked, setLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article
      className="
        group relative overflow-hidden
        rounded-[28px]
        border border-gray-200/80
        bg-white
        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
        transition-all duration-500
        hover:-translate-y-3
        hover:border-gray-300
        hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
      "
    >

      <div className="relative aspect-[4/4.3] overflow-hidden bg-[#f5f5f7]">

        {/* Loading Background */}

        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100" />
        )}

        {/* Product Image */}

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`
            h-full
            w-full
            object-cover
            transition-all
            duration-700
            ease-out
            group-hover:scale-110
            ${imageLoaded ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* Image Overlay */}

        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-t
            from-black/30
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Image Shine */}

        <div
          className="
            pointer-events-none
            absolute
            -left-[120%]
            top-0
            h-full
            w-[70%]
            skew-x-[-20deg]
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
            transition-all
            duration-1000
            group-hover:left-[140%]
          "
        />

        {product.badge && (
          <span
            className="
              absolute
              left-4
              top-4
              rounded-full
              bg-black
              px-3.5
              py-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-white
              shadow-lg
            "
          >
            {product.badge}
          </span>
        )}

        <span
          className="
            absolute
            bottom-4
            left-4
            rounded-full
            border
            border-white/40
            bg-white/85
            px-3
            py-1.5
            text-[10px]
            font-medium
            text-gray-700
            opacity-0
            backdrop-blur-md
            translate-y-2
            transition-all
            duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          {product.category}
        </span>

        <button
          type="button"
          onClick={() => setLiked((prev) => !prev)}
          aria-label={
            liked
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          className={`
            absolute
            right-4
            top-4
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            shadow-lg
            backdrop-blur-xl
            transition-all
            duration-300
            hover:scale-110
            active:scale-95

            ${
              liked
                ? "border-black bg-black text-white"
                : "border-white/70 bg-white/90 text-black"
            }
          `}
        >
          <span
            className={`
              text-xl
              leading-none
              transition-transform
              duration-300
              ${liked ? "scale-110" : ""}
            `}
          >
            {liked ? "♥" : "♡"}
          </span>
        </button>
      </div>


      <div className="p-5 sm:p-6">

        {/* Category + Rating */}

        <div className="flex items-center justify-between gap-3">

          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
            {product.category}
          </p>

          <div className="flex items-center gap-1 rounded-full bg-[#f5f5f7] px-2.5 py-1">
            <span className="text-[11px] text-black">
              ★
            </span>

            <span className="text-[11px] font-semibold">
              {product.rating}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onDetails?.(product)}
          className="
            mt-2
            block
            w-full
            truncate
            text-left
            text-lg
            font-semibold
            tracking-tight
            text-gray-950
            transition-colors
            duration-300
            hover:text-gray-500
            sm:text-xl
          "
        >
          {product.name}
        </button>

        <div className="mt-2 flex items-center gap-2">

          <div className="flex items-center gap-0.5 text-[11px]">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span className="text-gray-300">★</span>
          </div>

          <span className="text-xs text-gray-400">
            {product.reviews} reviews
          </span>
        </div>


        <div className="mt-4 flex items-end gap-2">

          <strong className="text-2xl font-bold tracking-tight text-black">
            ₹{product.price.toLocaleString("en-IN")}
          </strong>

          {product.oldPrice && (
            <span className="mb-0.5 text-sm text-gray-400 line-through">
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </span>
          )}

          {product.oldPrice && (
            <span className="mb-0.5 rounded-full bg-gray-100 px-2 py-1 text-[9px] font-semibold uppercase tracking-wide text-gray-500">
              Save
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => onAddToCart?.(product)}
          className="
            group/button
            relative
            mt-5
            flex
            w-full
            items-center
            justify-center
            gap-2
            overflow-hidden
            rounded-full
            bg-black
            px-5
            py-3.5
            text-sm
            font-medium
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-gray-800
            hover:shadow-xl
            active:scale-[0.98]
          "
        >
          {/* Button Shine */}

          <span
            className="
              absolute
              -left-20
              top-0
              h-full
              w-16
              skew-x-[-20deg]
              bg-white/20
              transition-all
              duration-700
              group-hover/button:left-[120%]
            "
          />

          <span className="relative flex items-center gap-2">

            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-sm
                transition-transform
                duration-300
                group-hover/button:scale-110
              "
            >
              +
            </span>

            <span>
              Add to Cart
            </span>

          </span>
        </button>

        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">

          <span className="flex items-center gap-1.5 text-[10px] font-medium text-gray-400">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            In Stock
          </span>

          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-gray-300">
            AURA
          </span>

        </div>

      </div>
    </article>
  );
}
