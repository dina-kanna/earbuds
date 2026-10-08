import { useState } from "react";

export default function Profile({ onBack, onLogout }) {
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "AURA Customer",
    email: "customer@aura.com",
    phone: "+91 98765 34567",
    city: "Salem",
    state: "TamilNadu",
  });

  const [form, setForm] = useState(profile);

  const handleChange = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSave = () => {
    setProfile(form);
    setEditing(false);
  };

  const handleCancel = () => {
    setForm(profile);
    setEditing(false);
  };

  const handleBackHome = () => {
    setEditing(false);

    onBack?.();

    setTimeout(() => {
      document.querySelector("#home")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <section className="min-h-screen bg-[#f5f5f7] px-4 pb-20 pt-28 sm:px-6 lg:px-8">

      <div className="pointer-events-none fixed -left-40 top-20 h-96 w-96 rounded-full bg-white blur-3xl" />

      <div className="pointer-events-none fixed -right-40 bottom-10 h-96 w-96 rounded-full bg-gray-200/70 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* BACK TO HOME */}

          <button
            type="button"
            onClick={handleBackHome}
            className="group flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-black hover:shadow-md"
          >
            <span className="text-base transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            <span>Back to Home</span>
          </button>

          <div className="text-left sm:text-right">
            <p className="text-[10px] font-semibold tracking-[0.25em] text-gray-400">
              AURA ACCOUNT
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Manage your profile and preferences
            </p>
          </div>

        </div>


        <div className="relative mt-6 overflow-hidden rounded-[2rem] bg-black p-7 text-white shadow-xl sm:p-10">

          {/* Decorations */}

          <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/10" />

          <div className="absolute -right-10 top-12 h-44 w-44 rounded-full border border-white/10" />

          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            {/* User */}

            <div className="flex items-center gap-5">

              {/* Avatar */}

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white text-2xl font-bold text-black shadow-xl sm:h-24 sm:w-24 sm:text-3xl">
                {profile.name
                  .split(" ")
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase()}
              </div>

              <div>

                <p className="text-xs font-semibold tracking-[0.25em] text-gray-500">
                  WELCOME BACK
                </p>

                <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  {profile.name}
                </h1>

                <p className="mt-2 text-sm text-gray-400">
                  {profile.email}
                </p>

              </div>

            </div>

            {/* Status */}

            <div className="w-fit rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
              <div className="flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-green-400" />

                <span className="text-xs font-medium text-gray-300">
                  Account Active
                </span>

              </div>
            </div>

          </div>

        </div>


        <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">


          <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

              <div>

                <p className="text-xs font-semibold tracking-[0.2em] text-gray-400">
                  PERSONAL INFORMATION
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  Your profile
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Keep your account information up to date.
                </p>

              </div>

              {!editing && (
                <button
                  type="button"
                  onClick={() => setEditing(true)}
                  className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
                >
                  Edit Profile
                </button>
              )}

            </div>


            <div className="mt-8 grid gap-5 sm:grid-cols-2">

              {/* Name */}

              <div>
                <label className="mb-2 block text-xs font-semibold tracking-wide text-gray-500">
                  FULL NAME
                </label>

                <input
                  type="text"
                  value={form.name}
                  disabled={!editing}
                  onChange={(event) =>
                    handleChange("name", event.target.value)
                  }
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
                    editing
                      ? "border-gray-200 bg-white focus:border-black"
                      : "border-gray-100 bg-[#f7f7f8] text-gray-600"
                  }`}
                />
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block text-xs font-semibold tracking-wide text-gray-500">
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  value={form.email}
                  disabled={!editing}
                  onChange={(event) =>
                    handleChange("email", event.target.value)
                  }
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
                    editing
                      ? "border-gray-200 bg-white focus:border-black"
                      : "border-gray-100 bg-[#f7f7f8] text-gray-600"
                  }`}
                />
              </div>

              {/* Phone */}

              <div>
                <label className="mb-2 block text-xs font-semibold tracking-wide text-gray-500">
                  PHONE NUMBER
                </label>

                <input
                  type="tel"
                  value={form.phone}
                  disabled={!editing}
                  onChange={(event) =>
                    handleChange("phone", event.target.value)
                  }
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
                    editing
                      ? "border-gray-200 bg-white focus:border-black"
                      : "border-gray-100 bg-[#f7f7f8] text-gray-600"
                  }`}
                />
              </div>

              {/* City */}

              <div>
                <label className="mb-2 block text-xs font-semibold tracking-wide text-gray-500">
                  CITY
                </label>

                <input
                  type="text"
                  value={form.city}
                  disabled={!editing}
                  onChange={(event) =>
                    handleChange("city", event.target.value)
                  }
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
                    editing
                      ? "border-gray-200 bg-white focus:border-black"
                      : "border-gray-100 bg-[#f7f7f8] text-gray-600"
                  }`}
                />
              </div>

              {/* State */}

              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-semibold tracking-wide text-gray-500">
                  STATE
                </label>

                <input
                  type="text"
                  value={form.state}
                  disabled={!editing}
                  onChange={(event) =>
                    handleChange("state", event.target.value)
                  }
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
                    editing
                      ? "border-gray-200 bg-white focus:border-black"
                      : "border-gray-100 bg-[#f7f7f8] text-gray-600"
                  }`}
                />
              </div>

            </div>


            {editing && (
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">

                <button
                  type="button"
                  onClick={handleCancel}
                  className="rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold transition hover:border-black"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSave}
                  className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gray-800"
                >
                  Save Changes
                </button>

              </div>
            )}

          </div>


          <div className="space-y-6">

            {/* Account */}

            <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">

              <p className="text-xs font-semibold tracking-[0.2em] text-gray-400">
                ACCOUNT
              </p>

              <div className="mt-5 space-y-2">

                <button
                  type="button"
                  className="group flex w-full items-center justify-between rounded-xl bg-[#f7f7f8] px-4 py-4 text-left transition hover:bg-black hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <span>📦</span>

                    <span className="text-sm font-medium">
                      My Orders
                    </span>
                  </span>

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  className="group flex w-full items-center justify-between rounded-xl bg-[#f7f7f8] px-4 py-4 text-left transition hover:bg-black hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <span>♡</span>

                    <span className="text-sm font-medium">
                      Wishlist
                    </span>
                  </span>

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  className="group flex w-full items-center justify-between rounded-xl bg-[#f7f7f8] px-4 py-4 text-left transition hover:bg-black hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <span>📍</span>

                    <span className="text-sm font-medium">
                      Addresses
                    </span>
                  </span>

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>

              </div>

            </div>


            <div className="rounded-[2rem] bg-black p-6 text-white">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
                ✓
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Your account is secure
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Your personal information is protected with
                secure AURA account technology.
              </p>

              <button
                type="button"
                className="mt-5 text-sm font-semibold text-white transition hover:translate-x-1"
              >
                Security Settings →
              </button>

            </div>

          </div>

        </div>


        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          {/* Orders */}

          <div className="rounded-2xl border border-gray-200 bg-white p-6">

            <p className="text-xs font-semibold tracking-[0.15em] text-gray-400">
              ORDERS
            </p>

            <p className="mt-3 text-3xl font-semibold">
              0
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Total orders
            </p>

          </div>

          {/* Wishlist */}

          <div className="rounded-2xl border border-gray-200 bg-white p-6">

            <p className="text-xs font-semibold tracking-[0.15em] text-gray-400">
              WISHLIST
            </p>

            <p className="mt-3 text-3xl font-semibold">
              0
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Saved products
            </p>

          </div>

          {/* Member */}

          <div className="rounded-2xl border border-gray-200 bg-white p-6">

            <p className="text-xs font-semibold tracking-[0.15em] text-gray-400">
              MEMBER
            </p>

            <p className="mt-3 text-3xl font-semibold">
              AURA
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Customer account
            </p>

          </div>

        </div>

        {/* ================= LOGOUT ================= */}

        <div className="mt-8 flex justify-center">

          <button
            type="button"
            onClick={onLogout}
            className="rounded-full border border-red-200 px-7 py-3 text-sm font-semibold text-red-500 transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white"
          >
            Log Out
          </button>

        </div>

      </div>
    </section>
  );
}