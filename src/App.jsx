import { useMemo, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductGrid from "./components/ProductGrid";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./components/OrderConfirmation";
import Profile from "./components/Profile";
import Orders from "./components/Orders";
import Reviews from "./components/Reviews";
import About from "./components/About";
import Contact from "./components/Contact";
import AuthModal from "./components/AuthModal";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

import { products } from "./data/products";

export default function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const [page, setPage] = useState("home");
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  // =====================================================
  // FILTER PRODUCTS
  // =====================================================

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        category === "All" || product.category === category;

      const searchText = search.toLowerCase().trim();

      const searchMatch =
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText);

      return categoryMatch && searchMatch;
    });
  }, [category, search]);

  // =====================================================
  // ADD PRODUCT TO CART
  // =====================================================

  const addToCart = (product) => {
    setCart((current) => {
      const exists = current.find(
        (item) => item.id === product.id
      );

      if (exists) {
        return current.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...current,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    setCartOpen(true);
  };

  // =====================================================
  // INCREASE QUANTITY
  // =====================================================

  const increaseQuantity = (id) => {
    setCart((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // =====================================================
  // DECREASE QUANTITY
  // =====================================================

  const decreaseQuantity = (id) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // =====================================================
  // REMOVE FROM CART
  // =====================================================

  const removeFromCart = (id) => {
    setCart((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  // =====================================================
  // CART COUNT
  // =====================================================

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // =====================================================
  // GO TO PRODUCTS
  // =====================================================

  const goProducts = () => {
    setPage("home");
    setSelectedProduct(null);

    setTimeout(() => {
      document
        .getElementById("products")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  // =====================================================
  // GO HOME
  // =====================================================

  const goHome = () => {
    setPage("home");
    setSelectedProduct(null);
    setCartOpen(false);

    setTimeout(() => {
      document
        .getElementById("home")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  // =====================================================
  // COMPLETE ORDER
  // =====================================================

  const completeOrder = (paymentData = {}) => {
    if (cart.length === 0) return;

    const order = {
      id: `AURA-${Math.floor(
        100000 + Math.random() * 900000
      )}`,

      items: cart,

      date: new Date().toLocaleDateString("en-IN"),

      paymentMethod:
        paymentData.method || "card",

      paymentName:
        paymentData.methodName ||
        "Credit / Debit Card",

      total: paymentData.total || 0,

      customer: paymentData.customer || null,
    };

    setOrders((current) => [
      order,
      ...current,
    ]);

    setCart([]);

    setCartOpen(false);

    setPage("confirmation");
  };

  // =====================================================
  // PROFILE → HOME
  // =====================================================

  const goProfileHome = () => {
    setPage("home");
    setSelectedProduct(null);
    setCartOpen(false);

    setTimeout(() => {
      document
        .getElementById("home")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  // =====================================================
  // PROFILE → LOGOUT
  // =====================================================

  const handleLogout = () => {
    setPage("home");
    setSelectedProduct(null);
    setCartOpen(false);

    // Open login/signup after logout
    setTimeout(() => {
      setAuthOpen(true);
    }, 150);
  };

  // =====================================================
  // RENDER PAGES
  // =====================================================

  const renderPage = () => {

    // ===================================================
    // PROFILE PAGE
    // ===================================================

    if (page === "profile") {
      return (
        <Profile
          onBack={goProfileHome}
          onLogout={handleLogout}
        />
      );
    }

    // ===================================================
    // ORDERS PAGE
    // ===================================================

    if (page === "orders") {
      return (
        <Orders
          orders={orders}
          onBack={() => setPage("profile")}
          onContinueShopping={goProducts}
        />
      );
    }

    // ===================================================
    // CHECKOUT PAGE
    // ===================================================

    if (page === "checkout") {
      return (
        <Checkout
          cart={cart}
          onBack={() => setCartOpen(true)}
          onSuccess={completeOrder}
        />
      );
    }

    // ===================================================
    // ORDER CONFIRMATION
    // ===================================================

    if (page === "confirmation") {
      return (
        <OrderConfirmation
          orderId={orders[0]?.id}
          onOrders={() => setPage("orders")}
          onContinue={goHome}
        />
      );
    }

    // ===================================================
    // PRODUCT DETAILS
    // ===================================================

    if (selectedProduct) {
      return (
        <ProductDetails
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      );
    }

    // ===================================================
    // HOME PAGE
    // ===================================================

    return (
      <>
        <Hero onShop={goProducts} />

        <Categories
          active={category}
          setActive={setCategory}
        />

        <ProductGrid
          products={filteredProducts}
          search={search}
          setSearch={setSearch}
          onAddToCart={addToCart}
          onDetails={setSelectedProduct}
        />

        <Reviews />

        <About />

        <Contact />

        <Newsletter />
      </>
    );
  };

  // =====================================================
  // MAIN APP
  // =====================================================

  return (
    <>
      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar
        cartCount={cartCount}

        onCart={() => {
          setCartOpen(true);
        }}

        onLogin={() => {
          setAuthOpen(true);
        }}

        onProfile={() => {
          setAuthOpen(false);
          setPage("profile");
          setSelectedProduct(null);
        }}

        onSearch={goProducts}
      />

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      {renderPage()}

      {/* =================================================
          FOOTER
      ================================================= */}

      {page === "home" && !selectedProduct && (
        <Footer />
      )}

      {/* =================================================
          CART
      ================================================= */}

      <Cart
        cart={cart}
        open={cartOpen}

        onClose={() => {
          setCartOpen(false);
        }}

        onIncrease={increaseQuantity}

        onDecrease={decreaseQuantity}

        onRemove={removeFromCart}

        onCheckout={() => {
          setCartOpen(false);
          setPage("checkout");
        }}
      />

      {/* =================================================
          LOGIN / SIGN UP
      ================================================= */}

      <AuthModal
        open={authOpen}

        onClose={() => {
          setAuthOpen(false);
        }}

        onSuccess={() => {
          setAuthOpen(false);
          setPage("home");
        }}

        onBackHome={() => {
          setAuthOpen(false);
          setPage("home");

          setTimeout(() => {
            document
              .getElementById("home")
              ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
          }, 100);
        }}
      />
    </>
  );
}