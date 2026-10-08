import { useState } from "react";

export default function AuthModal({
  open,
  onClose,
  onSuccess,
}) {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  if (!open) return null;

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setShowPassword(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mode === "signup" && !form.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!form.email.trim() || !form.password.trim()) {
      alert("Please enter your email and password.");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must contain at least 6 characters.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      // Close authentication modal
      onClose?.();

      // Go to payment page
      onSuccess?.({
        mode,
        name: form.name,
        email: form.email,
      });
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto px-4 py-6">

      {/* BACKDROP */}
      <button
        type="button"
        aria-label="Close authentication"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-xl"
      />

      {/* MODAL */}
      <div className="relative z-10 w-full max-w-[460px] overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)]">

        {/* PREMIUM HEADER */}
        <div className="relative overflow-hidden bg-black px-6 pb-8 pt-6 text-white sm:px-8">

          {/* Decorative rings */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute bottom-[-70px] left-[-50px] h-40 w-40 rounded-full bg-white/[0.03]" />

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lg text-gray-400 transition duration-300 hover:rotate-90 hover:bg-white hover:text-black"
          >
            ×
          </button>

          {/* BRAND */}
          <div className="relative flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg">
              <div className="flex items-center gap-[3px]">
                <span className="h-2 w-[3px] rounded-full bg-black" />
                <span className="h-5 w-[3px] rounded-full bg-black" />
                <span className="h-8 w-[3px] rounded-full bg-black" />
                <span className="h-5 w-[3px] rounded-full bg-black" />
                <span className="h-2 w-[3px] rounded-full bg-black" />
              </div>
            </div>

            <div>
              <p className="text-lg font-black tracking-[0.25em]">
                AURA
              </p>
              <p className="text-[8px] tracking-[0.3em] text-gray-500">
                SOUND • SIMPLIFIED
              </p>
            </div>

          </div>

          {/* HEADING */}
          <div className="relative mt-7">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] text-gray-400">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              AURA ACCOUNT
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.04em]">
              {mode === "login"
                ? "Welcome back."
                : "Welcome to AURA."}
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-400">
              {mode === "login"
                ? "Sign in and continue your premium listening experience."
                : "Create your account and unlock the full AURA experience."}
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 sm:p-8">

          {/* MODE SWITCH */}
          <div className="relative flex rounded-2xl bg-[#f5f5f7] p-1.5">

            <button
              type="button"
              onClick={() => switchMode("login")}
              className={`relative z-10 flex-1 rounded-xl py-3 text-sm font-semibold transition-all duration-300 ${
                mode === "login"
                  ? "bg-black text-white shadow-lg"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => switchMode("signup")}
              className={`relative z-10 flex-1 rounded-xl py-3 text-sm font-semibold transition-all duration-300 ${
                mode === "signup"
                  ? "bg-black text-white shadow-lg"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Create Account
            </button>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-7 space-y-5"
          >

            {/* NAME */}
            {mode === "signup" && (
              <div className="animate-[fadeIn_0.3s_ease-out]">
                <label className="mb-2 block text-xs font-bold tracking-wide text-gray-600">
                  FULL NAME
                </label>

                <div className="group flex items-center rounded-2xl border border-gray-200 bg-[#fafafa] px-4 transition-all duration-300 focus-within:border-black focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(0,0,0,0.04)]">
                  <span className="mr-3 text-lg">👤</span>

                  <input
                    type="text"
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    placeholder="Your name"
                    className="w-full bg-transparent py-4 text-sm outline-none"
                  />
                </div>
              </div>
            )}

            {/* EMAIL */}
            <div>
              <label className="mb-2 block text-xs font-bold tracking-wide text-gray-600">
                EMAIL ADDRESS
              </label>

              <div className="flex items-center rounded-2xl border border-gray-200 bg-[#fafafa] px-4 transition-all duration-300 focus-within:border-black focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(0,0,0,0.04)]">
                <span className="mr-3 text-lg">✉️</span>

                <input
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    updateField("email", event.target.value)
                  }
                  placeholder="you@example.com"
                  className="w-full bg-transparent py-4 text-sm outline-none"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-xs font-bold tracking-wide text-gray-600">
                  PASSWORD
                </label>

                {mode === "login" && (
                  <button
                    type="button"
                    onClick={() =>
                      alert("Password reset link would be sent here.")
                    }
                    className="text-xs font-medium text-gray-400 transition hover:text-black"
                  >
                    Forgot password?
                  </button>
                )}
              </div>

              <div className="flex items-center rounded-2xl border border-gray-200 bg-[#fafafa] px-4 transition-all duration-300 focus-within:border-black focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(0,0,0,0.04)]">

                <span className="mr-3 text-lg">🔐</span>

                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(event) =>
                    updateField("password", event.target.value)
                  }
                  placeholder="••••••••"
                  className="min-w-0 flex-1 bg-transparent py-4 text-sm outline-none"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((value) => !value)
                  }
                  className="ml-2 rounded-lg px-2 py-1 text-[10px] font-bold text-gray-400 transition hover:bg-black hover:text-white"
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>

              </div>
            </div>

            {/* REMEMBER */}
            {mode === "login" && (
              <label className="flex cursor-pointer items-center gap-2 text-xs text-gray-500">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 accent-black"
                />
                Remember me
              </label>
            )}

            {/* MAIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-black py-4 text-sm font-bold text-white shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-2xl disabled:cursor-wait disabled:opacity-70"
            >
              {/* Shine */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative">
                {loading
                  ? "Please wait..."
                  : mode === "login"
                  ? "Login to AURA"
                  : "Create AURA Account"}
              </span>

              {!loading && (
                <span className="relative text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              )}

              {loading && (
                <span className="relative h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              )}
            </button>

          </form>

          {/* DIVIDER */}
          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-[9px] font-bold tracking-[0.15em] text-gray-400">
              OR CONTINUE WITH
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* SOCIAL */}
          <div className="grid grid-cols-2 gap-3">

            <button
              type="button"
              onClick={() => {
                onClose?.();
                onSuccess?.({
                  mode: "google",
                  email: form.email,
                });
              }}
              className="group flex items-center justify-center gap-2 rounded-2xl border border-gray-200 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white"
            >
              <span className="text-base font-black">G</span>
              Google
            </button>

            <button
              type="button"
              onClick={() => {
                onClose?.();
                onSuccess?.({
                  mode: "apple",
                  email: form.email,
                });
              }}
              className="group flex items-center justify-center gap-2 rounded-2xl border border-gray-200 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white"
            >
              <span className="text-base">●</span>
              Apple
            </button>

          </div>

          {/* SECURITY */}
          <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-gray-400">
            <span>🔒</span>
            Secure AURA account authentication
          </div>

          <p className="mt-4 text-center text-[10px] leading-5 text-gray-400">
            By continuing, you agree to AURA's
            <br />
            Terms of Service and Privacy Policy.
          </p>

        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}