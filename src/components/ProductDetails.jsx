import { motion } from "framer-motion";
import {ArrowLeft,Check,ShoppingBag,Star,} from "lucide-react";

export default function ProductDetails({
  product,
  onBack,
  onAddToCart,
}) {
  return (
    <section className="min-h-screen bg-[#f5f5f7] px-5 pb-20 pt-32">
      <div className="mx-auto max-w-full">
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-sm text-gray-600"
        >
          <ArrowLeft size={17} />
          Back to products
        </button>

        <div className="grid overflow-hidden rounded-[2.5rem] bg-white lg:grid-cols-2">
          <div className="bg-[#f5f5f7] p-8">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={product.image}
              alt={product.name}
              className="h-full max-h-[600px] w-full rounded-3xl object-cover"
            />
          </div>

          <div className="p-8 lg:p-14">
            <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs">
              {product.category}
            </span>

            <h1 className="mt-5 text-4xl font-semibold">
              {product.name}
            </h1>

            <div className="mt-4 flex gap-2">
              <Star size={17} fill="black" />
              {product.rating}
              <span className="text-gray-400">
                ({product.reviews} reviews)
              </span>
            </div>

            <div className="mt-7 text-3xl font-semibold">
              ₹{product.price.toLocaleString("en-IN")}
            </div>

            <p className="mt-6 leading-7 text-gray-600">
              {product.description}
            </p>

            <div className="mt-8 space-y-4">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100">
                    <Check size={15} />
                  </span>

                  {feature}
                </div>
              ))}
            </div>

            <button
              onClick={() => onAddToCart(product)}
              className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-black py-4 text-white"
            >
              <ShoppingBag size={18} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}