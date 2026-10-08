import { useState } from "react";

export default function Navbar({
  cartCount = 0,
  onCart,
  onLogin,
  onProfile,
  onSearch,
}) {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Shop", "#products"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  const closeMenu = () => {
    setOpen(false);
  };

  const scrollToSection = (href) => {
    closeMenu();

    const element = document.querySelector(href);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };

  const handleHome = () => {
    closeMenu();

    const element = document.querySelector("#home");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleProfile = () => {
    closeMenu();
    onProfile?.();
  };

  const handleLogin = () => {
    closeMenu();
    onLogin?.();
  };

  const handleCart = () => {
    closeMenu();
    onCart?.();
  };

  const handleSearch = () => {
    closeMenu();
    onSearch?.();
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-2.5 pt-2.5 sm:px-3 sm:pt-3 md:px-4 lg:px-5">
      <nav className="mx-auto w-full max-w-[1500px] overflow-visible rounded-[20px] border border-gray-200/80 bg-white/95 shadow-[0_12px_45px_rgba(0,0,0,0.08)] backdrop-blur-2xl md:rounded-[22px]">


        <div className="relative flex min-h-[64px] items-center gap-2 px-3 sm:min-h-[68px] sm:px-4 md:h-[72px] md:min-h-0 md:px-5 lg:h-[76px] lg:px-6">

      

          <button
            type="button"
            onClick={handleHome}
            aria-label="AURA Home"
            className="group flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5 md:gap-2.5 lg:gap-3"
          >
            

            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:rotate-6 sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-11 lg:w-11">

              <span className="absolute inset-[5px] rounded-full border border-white/30" />

              <div className="flex h-6 items-center gap-[2px]">
                <span className="h-2.5 w-[3px] rounded-full bg-white transition-all duration-300 group-hover:h-4" />
                <span className="h-5 w-[3px] rounded-full bg-white transition-all duration-300 group-hover:h-6" />
                <span className="h-3.5 w-[3px] rounded-full bg-white transition-all duration-300 group-hover:h-5" />
                <span className="h-6 w-[3px] rounded-full bg-white transition-all duration-300 group-hover:h-4" />
                <span className="h-3 w-[3px] rounded-full bg-white transition-all duration-300 group-hover:h-5" />
              </div>
            </div>

            {/* Brand */}

            <div className="min-w-0 text-left">
              <div className="flex items-center">
                <span className="text-base font-black tracking-[0.15em] sm:text-lg md:text-lg lg:text-xl lg:tracking-[0.22em]">
                  AURA
                </span>

                <span className="ml-1.5 hidden h-1.5 w-1.5 rounded-full bg-black sm:block" />
              </div>

              <p className="mt-0.5 hidden text-[7px] font-semibold tracking-[0.25em] text-gray-400 sm:block lg:text-[8px]">
                SOUND • SIMPLIFIED
              </p>
            </div>
          </button>


          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border border-gray-200 bg-[#f7f7f8] p-1 md:flex">

            {links.map(([name, href]) => (
              <button
                key={name}
                type="button"
                onClick={() => scrollToSection(href)}
                className="
                  whitespace-nowrap
                  rounded-full
                  px-2.5
                  py-2
                  text-[11px]
                  font-medium
                  text-gray-500
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white

                  sm:px-3
                  sm:text-xs

                  lg:px-5
                  lg:py-2.5
                  lg:text-sm
                "
              >
                {name}
              </button>
            ))}

          </div>


          <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-1.5 md:gap-1.5 lg:gap-2">

            {/* SEARCH */}

            <button
              type="button"
              onClick={handleSearch}
              aria-label="Search products"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-[#f5f5f7]
                text-[18px]
                leading-none
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-black
                hover:text-white

                sm:h-9
                sm:w-9

                md:h-9
                md:w-9

                lg:h-10
                lg:w-10
              "
            >
              ⌕
            </button>

            {/* PROFILE */}

            <button
              type="button"
              onClick={handleProfile}
              aria-label="Profile"
              className="
                group
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-[#f5f5f7]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-black

                sm:h-9
                sm:w-9

                md:h-9
                md:w-9

                lg:h-10
                lg:w-10
              "
            >
              <span className="relative flex h-5 w-5 items-center justify-center transition-transform duration-300 group-hover:scale-110 md:h-5 md:w-5 lg:h-6 lg:w-6">

                <span className="absolute top-0 h-[7px] w-[7px] rounded-full bg-black transition-colors duration-300 group-hover:bg-white md:h-[8px] md:w-[8px]" />

                <span className="absolute bottom-0 h-[9px] w-[14px] rounded-t-full bg-black transition-colors duration-300 group-hover:bg-white md:h-[10px] md:w-[16px]" />

              </span>
            </button>

            {/* CART */}

            <button
              type="button"
              onClick={handleCart}
              aria-label={`Shopping cart with ${cartCount} items`}
              className="
                relative
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-black
                text-sm
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:bg-gray-800

                sm:h-9
                sm:w-9
                sm:text-base

                md:h-9
                md:w-9

                lg:h-10
                lg:w-10
                lg:text-lg
              "
            >
              🛒

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[8px] font-bold text-black shadow-md ring-2 ring-black sm:h-5 sm:min-w-5 sm:text-[9px]">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </button>

            {/* LOGIN */}

            <button
              type="button"
              onClick={handleLogin}
              className="
                ml-0.5
                hidden
                rounded-full
                border
                border-black
                px-2.5
                py-2
                text-[11px]
                font-semibold
                transition-all
                duration-300
                hover:bg-black
                hover:text-white

                md:block
                md:px-3
                md:text-xs

                lg:ml-1
                lg:px-5
                lg:py-2.5
                lg:text-sm
              "
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={`
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-[#f5f5f7]
                text-lg
                transition-all
                duration-300
                hover:bg-black
                hover:text-white

                sm:h-9
                sm:w-9

                md:hidden

                ${open ? "bg-black text-white" : ""}
              `}
            >
              {open ? "×" : "☰"}
            </button>

          </div>
        </div>

        {open && (
          <div className="border-t border-gray-100 px-3 pb-4 pt-3 sm:px-4 sm:pb-5 md:hidden">

            <div className="rounded-2xl bg-[#f5f5f7] p-1.5 sm:p-2">

              {links.map(([name, href]) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => scrollToSection(href)}
                  className="group flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-white hover:text-black sm:py-3.5"
                >
                  <span>{name}</span>

                  <span className="text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black">
                    →
                  </span>
                </button>
              ))}

            </div>

            <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:gap-3">

              <button
                type="button"
                onClick={handleProfile}
                className="group flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm font-medium transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
              >
                <span className="relative flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <span className="absolute top-0 h-[8px] w-[8px] rounded-full bg-black transition-colors duration-300 group-hover:bg-white" />
                  <span className="absolute bottom-0 h-[10px] w-[16px] rounded-t-full bg-black transition-colors duration-300 group-hover:bg-white" />
                </span>

                <span>My Profile</span>
              </button>

              <button
                type="button"
                onClick={handleLogin}
                className="min-h-[48px] rounded-xl bg-black px-3 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800"
              >
                Login / Sign Up
              </button>

            </div>

            <div className="relative mt-3 overflow-hidden rounded-2xl bg-black p-4 text-white sm:mt-4 sm:p-5">

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/10" />

              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full border border-white/10" />

              <div className="absolute -bottom-12 left-1/2 h-24 w-24 rounded-full bg-white/5 blur-2xl" />

              <div className="relative flex items-center justify-between gap-4">

                <div className="min-w-0">

                  <p className="text-[9px] font-semibold tracking-[0.3em] text-gray-400">
                    AURA AUDIO
                  </p>

                  <p className="mt-1.5 text-base font-semibold sm:text-lg">
                    Hear the difference.
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-gray-400 sm:text-xs">
                    Pure sound. Zero distraction.
                  </p>

                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 sm:h-14 sm:w-14">

                  <div className="flex items-center gap-[3px]">
                    <span className="h-2 w-[2px] rounded-full bg-white" />
                    <span className="h-5 w-[2px] rounded-full bg-white" />
                    <span className="h-7 w-[2px] rounded-full bg-white" />
                    <span className="h-4 w-[2px] rounded-full bg-white" />
                    <span className="h-2 w-[2px] rounded-full bg-white" />
                  </div>

                </div>

              </div>
            </div>

          </div>
        )}

      </nav>
    </header>
  );
}