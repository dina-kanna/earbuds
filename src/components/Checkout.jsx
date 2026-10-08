import { useMemo, useState } from "react";

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const HomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const BuildingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Payment({
  cart = [],
  onBack,
  onSuccess,
}) {
  const [method, setMethod] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const [errors, setErrors] = useState({});

  const subtotal = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cart]);

  const GST_RATE = 18;
  const gst = Math.round(subtotal * (GST_RATE / 100));
  const delivery = subtotal >= 2000 ? 0 : 99;
  const total = subtotal + gst + delivery;

  const methods = [
    {
      id: "card",
      icon: "💳",
      number: "01",
      title: "Credit / Debit Card",
      shortTitle: "CARD",
      description: "Visa • Mastercard • RuPay",
      detail: "Secure card payment",
    },
    {
      id: "upi",
      icon: "📱",
      number: "02",
      title: "UPI Payment",
      shortTitle: "UPI",
      description: "Google Pay • PhonePe • Paytm",
      detail: "Instant UPI payment",
    },
    {
      id: "cod",
      icon: "💵",
      number: "03",
      title: "Cash on Delivery",
      shortTitle: "COD",
      description: "Pay when your order arrives",
      detail: "Cash at your doorstep",
    },
  ];

  const selectedMethod = methods.find(
    (item) => item.id === method
  );

  const updateForm = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!form.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!form.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!form.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!form.pinCode.trim()) {
      newErrors.pinCode = "PIN code is required";
    } else if (!/^\d{6}$/.test(form.pinCode)) {
      newErrors.pinCode = "Enter a valid 6-digit PIN code";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (!method) {
      alert("Please select a payment method.");
      return;
    }

    if (!validateForm()) {
      return;
    }

    onSuccess?.({
      method: selectedMethod.id,
      methodName: selectedMethod.title,
      total,
      customer: {
        name: form.name,
        email: form.email,
        phone: form.phone,
        address: form.address,
        city: form.city,
        state: form.state,
        pinCode: form.pinCode,
      },
    });
  };

  if (!cart.length) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#f5f5f7] px-5 pt-24">
        <div className="w-full max-w-lg rounded-[2.5rem] border border-gray-200 bg-white p-10 text-center shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
          <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-black text-4xl text-white shadow-2xl">
            🛒
            <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-black shadow-lg">
              0
            </span>
          </div>

          <p className="mt-8 text-[10px] font-bold tracking-[0.3em] text-gray-400">
            AURA CHECKOUT
          </p>

          <h1 className="mt-3 text-3xl font-semibold">
            No items to pay for
          </h1>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500">
            Your cart is currently empty. Add something from the AURA collection to continue.
          </p>

          <button
            type="button"
            onClick={onBack}
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-gray-800"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back to Cart
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#f5f5f7] px-4 pb-24 pt-28 sm:px-6 lg:pt-32">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-8">
          <button
            type="button"
            onClick={onBack}
            className="group mb-6 flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-black"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back to Checkout
          </button>

          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
                </span>

                <span className="text-[10px] font-bold tracking-[0.22em] text-gray-500">
                  AURA SECURE CHECKOUT
                </span>
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                Almost
                <br />
                <span className="text-gray-400">yours.</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
                Enter your delivery details and choose your preferred payment method to complete your AURA order.
              </p>
            </div>

            {/* STEPS */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-[10px] font-bold text-white shadow-lg">
                <span>✓</span>
                DELIVERY
              </div>

              <span className="text-gray-300">→</span>

              <div className="rounded-full bg-black px-4 py-2 text-[10px] font-bold text-white shadow-lg">
                02 PAYMENT
              </div>

              <span className="text-gray-300">→</span>

              <div className="rounded-full bg-white px-4 py-2 text-[10px] font-bold text-gray-400 shadow-sm">
                03 DONE
              </div>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT COLUMN */}
          <div className="space-y-6">

            {/* DELIVERY DETAILS */}
            <section className="rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,0.06)] sm:p-9">

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.25em] text-gray-400">
                    STEP 01
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                    Delivery details
                  </h2>
                  <p className="mt-1.5 text-xs text-gray-500">
                    Enter the address where you want your order delivered.
                  </p>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-black text-xl text-white shadow-lg sm:flex">
                  📦
                </div>
              </div>

              {/* FORM FIELDS */}
              <div className="mt-8 grid gap-5 sm:grid-cols-2">

                {/* FULL NAME */}
                <div className="sm:col-span-2">
                  <div className={`relative rounded-2xl border transition-all ${
                    errors.name
                      ? "border-red-400 bg-red-50/20"
                      : "border-gray-200 focus-within:border-black focus-within:bg-white bg-[#fafafa]"
                  }`}>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <UserIcon />
                    </div>

                    <input
                      type="text"
                      id="fullName"
                      value={form.name}
                      onChange={(e) => updateForm("name", e.target.value)}
                      placeholder=" "
                      className="peer w-full bg-transparent pl-12 pr-4 pt-6 pb-2 text-sm text-gray-900 outline-none focus:outline-none focus:ring-0"
                    />

                    <label htmlFor="fullName" className="pointer-events-none absolute left-12 top-2 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.14em]">
                      Full Name
                    </label>
                  </div>

                  {errors.name && (
                    <p className="mt-1.5 pl-2 text-[10px] font-medium text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* EMAIL ADDRESS */}
                <div>
                  <div className={`relative rounded-2xl border transition-all ${
                    errors.email
                      ? "border-red-400 bg-red-50/20"
                      : "border-gray-200 focus-within:border-black focus-within:bg-white bg-[#fafafa]"
                  }`}>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <MailIcon />
                    </div>

                    <input
                      type="email"
                      id="emailAddr"
                      value={form.email}
                      onChange={(e) => updateForm("email", e.target.value)}
                      placeholder=" "
                      className="peer w-full bg-transparent pl-12 pr-4 pt-6 pb-2 text-sm text-gray-900 outline-none focus:outline-none focus:ring-0"
                    />

                    <label htmlFor="emailAddr" className="pointer-events-none absolute left-12 top-2 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.14em]">
                      Email Address
                    </label>
                  </div>

                  {errors.email && (
                    <p className="mt-1.5 pl-2 text-[10px] font-medium text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* PHONE NUMBER */}
                <div>
                  <div className={`relative rounded-2xl border transition-all ${
                    errors.phone
                      ? "border-red-400 bg-red-50/20"
                      : "border-gray-200 focus-within:border-black focus-within:bg-white bg-[#fafafa]"
                  }`}>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 flex items-center gap-1.5">
                      <PhoneIcon />
                      <span className="text-xs font-bold text-gray-500">+91</span>
                    </div>

                    <input
                      type="tel"
                      id="phoneNum"
                      maxLength={10}
                      value={form.phone}
                      onChange={(e) =>
                        updateForm("phone", e.target.value.replace(/\D/g, ""))
                      }
                      placeholder=" "
                      className="peer w-full bg-transparent pl-20 pr-4 pt-6 pb-2 text-sm text-gray-900 outline-none focus:outline-none focus:ring-0"
                    />

                    <label htmlFor="phoneNum" className="pointer-events-none absolute left-20 top-2 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.14em]">
                      Phone Number
                    </label>
                  </div>

                  {errors.phone && (
                    <p className="mt-1.5 pl-2 text-[10px] font-medium text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* COMPLETE ADDRESS */}
                <div className="sm:col-span-2">
                  <div className={`relative rounded-2xl border transition-all ${
                    errors.address
                      ? "border-red-400 bg-red-50/20"
                      : "border-gray-200 focus-within:border-black focus-within:bg-white bg-[#fafafa]"
                  }`}>
                    <div className="absolute left-4 top-5 text-gray-400">
                      <HomeIcon />
                    </div>

                    <textarea
                      id="streetAddr"
                      rows={3}
                      value={form.address}
                      onChange={(e) => updateForm("address", e.target.value)}
                      placeholder=" "
                      className="peer w-full resize-none bg-transparent pl-12 pr-4 pt-6 pb-2 text-sm text-gray-900 outline-none focus:outline-none focus:ring-0"
                    />

                    <label htmlFor="streetAddr" className="pointer-events-none absolute left-12 top-2 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.14em]">
                      Complete Address
                    </label>
                  </div>

                  {errors.address && (
                    <p className="mt-1.5 pl-2 text-[10px] font-medium text-red-500">
                      {errors.address}
                    </p>
                  )}
                </div>

                {/* CITY */}
                <div>
                  <div className={`relative rounded-2xl border transition-all ${
                    errors.city
                      ? "border-red-400 bg-red-50/20"
                      : "border-gray-200 focus-within:border-black focus-within:bg-white bg-[#fafafa]"
                  }`}>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <BuildingIcon />
                    </div>

                    <input
                      type="text"
                      id="cityName"
                      value={form.city}
                      onChange={(e) => updateForm("city", e.target.value)}
                      placeholder=" "
                      className="peer w-full bg-transparent pl-12 pr-4 pt-6 pb-2 text-sm text-gray-900 outline-none focus:outline-none focus:ring-0"
                    />

                    <label htmlFor="cityName" className="pointer-events-none absolute left-12 top-2 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.14em]">
                      City
                    </label>
                  </div>

                  {errors.city && (
                    <p className="mt-1.5 pl-2 text-[10px] font-medium text-red-500">
                      {errors.city}
                    </p>
                  )}
                </div>

                {/* STATE */}
                <div>
                  <div className={`relative rounded-2xl border transition-all ${
                    errors.state
                      ? "border-red-400 bg-red-50/20"
                      : "border-gray-200 focus-within:border-black focus-within:bg-white bg-[#fafafa]"
                  }`}>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <MapPinIcon />
                    </div>

                    <input
                      type="text"
                      id="stateName"
                      value={form.state}
                      onChange={(e) => updateForm("state", e.target.value)}
                      placeholder=" "
                      className="peer w-full bg-transparent pl-12 pr-4 pt-6 pb-2 text-sm text-gray-900 outline-none focus:outline-none focus:ring-0"
                    />

                    <label htmlFor="stateName" className="pointer-events-none absolute left-12 top-2 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.14em]">
                      State
                    </label>
                  </div>

                  {errors.state && (
                    <p className="mt-1.5 pl-2 text-[10px] font-medium text-red-500">
                      {errors.state}
                    </p>
                  )}
                </div>

                {/* PIN CODE */}
                <div className="sm:col-span-2">
                  <div className={`relative rounded-2xl border transition-all ${
                    errors.pinCode
                      ? "border-red-400 bg-red-50/20"
                      : "border-gray-200 focus-within:border-black focus-within:bg-white bg-[#fafafa]"
                  }`}>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <MapPinIcon />
                    </div>

                    <input
                      type="tel"
                      id="pinCodeVal"
                      maxLength={6}
                      value={form.pinCode}
                      onChange={(e) =>
                        updateForm("pinCode", e.target.value.replace(/\D/g, ""))
                      }
                      placeholder=" "
                      className="peer w-full bg-transparent pl-12 pr-4 pt-6 pb-2 text-sm text-gray-900 outline-none focus:outline-none focus:ring-0"
                    />

                    <label htmlFor="pinCodeVal" className="pointer-events-none absolute left-12 top-2 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.14em]">
                      PIN Code
                    </label>
                  </div>

                  {errors.pinCode && (
                    <p className="mt-1.5 pl-2 text-[10px] font-medium text-red-500">
                      {errors.pinCode}
                    </p>
                  )}
                </div>

              </div>

              {/* SECURITY NOTE */}
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-[#f5f5f7] p-4">
                <span className="text-lg">🔒</span>
                <div>
                  <p className="text-xs font-semibold text-gray-700">
                    Your information is protected
                  </p>
                  <p className="mt-0.5 text-[10px] leading-relaxed text-gray-500">
                    Your contact and delivery information is encrypted and used solely to process and deliver your order.
                  </p>
                </div>
              </div>
            </section>

            {/* PAYMENT METHOD */}
            <div className="rounded-[2.5rem] border border-gray-200 bg-white p-5 shadow-[0_20px_70px_rgba(0,0,0,0.06)] sm:p-8">

              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.25em] text-gray-400">
                    STEP 02
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                    Payment method
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Select how you'd like to pay.
                  </p>
                </div>

                {selectedMethod && (
                  <div className="rounded-full bg-black px-4 py-2 text-[9px] font-bold tracking-widest text-white">
                    {selectedMethod.shortTitle}
                  </div>
                )}
              </div>

              {/* PAYMENT SELECTION */}
              <div className="mt-7 space-y-4">
                {methods.map((item) => {
                  const selected = method === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setMethod(item.id)}
                      className={`group relative w-full overflow-hidden rounded-[1.8rem] border-2 p-5 text-left transition-all duration-500 sm:p-6 ${
                        selected
                          ? "border-black bg-black text-white shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                          : "border-gray-200 bg-white hover:-translate-y-1 hover:border-black hover:shadow-lg"
                      }`}
                    >
                      {selected && (
                        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-white/10" />
                      )}

                      <div className="absolute left-5 top-5 text-[9px] font-bold tracking-widest text-gray-400">
                        {item.number}
                      </div>

                      <div
                        className={`absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-bold ${
                          selected
                            ? "border-white bg-white text-black"
                            : "border-gray-200 text-transparent group-hover:border-black"
                        }`}
                      >
                        ✓
                      </div>

                      <div className="mt-5 flex items-center gap-4">
                        <div
                          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.25rem] text-2xl transition duration-500 ${
                            selected
                              ? "bg-white/10"
                              : "bg-[#f5f5f7] group-hover:bg-black group-hover:text-white"
                          }`}
                        >
                          {item.icon}
                        </div>

                        <div className="min-w-0 flex-1 pr-8">
                          <p className="text-base font-semibold sm:text-lg">
                            {item.title}
                          </p>
                          <p
                            className={`mt-1 text-xs ${
                              selected ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {item.description}
                          </p>
                          <p
                            className={`mt-2 text-[10px] ${
                              selected ? "text-gray-500" : "text-gray-400"
                            }`}
                          >
                            {item.detail}
                          </p>
                        </div>
                      </div>

                      {selected && (
                        <div className="mt-5 border-t border-white/10 pt-4">
                          <div className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[9px] font-bold text-black">
                              ✓
                            </span>
                            <span className="text-[10px] font-semibold text-gray-400">
                              Payment method selected
                            </span>
                          </div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* CONTINUE BUTTON */}
              <button
                type="button"
                onClick={handleContinue}
                disabled={!method}
                className={`group relative mt-7 flex w-full items-center justify-center gap-3 overflow-hidden rounded-[1.3rem] py-4 text-sm font-bold transition-all duration-500 ${
                  method
                    ? "bg-black text-white shadow-xl hover:-translate-y-1 hover:bg-gray-800"
                    : "cursor-not-allowed bg-gray-200 text-gray-400"
                }`}
              >
                {method && (
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                )}

                <span className="relative">
                  {!method
                    ? "Select a Payment Method"
                    : method === "cod"
                    ? "Place Order"
                    : "Continue to Payment"}
                </span>

                {method && (
                  <span className="relative text-lg transition-transform group-hover:translate-x-1">
                    →
                  </span>
                )}
              </button>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-[10px] text-gray-400">
                <span>🔒 Secure</span>
                <span className="h-1 w-1 rounded-full bg-gray-300" />
                <span>✓ Protected</span>
                <span className="h-1 w-1 rounded-full bg-gray-300" />
                <span>⚡ Fast Checkout</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — ORDER SUMMARY */}
          <aside className="h-fit overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.06)] lg:sticky lg:top-28">

            <div className="relative overflow-hidden bg-black p-7 text-white">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-white/10" />
              <div className="absolute -right-5 top-10 h-24 w-24 rounded-full border border-white/10" />

              <div className="relative">
                <p className="text-[9px] font-bold tracking-[0.3em] text-gray-500">
                  AURA ORDER
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Order Summary
                </h2>
                <p className="mt-3 text-xs text-gray-500">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)} items in your order
                </p>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="group flex gap-3 rounded-2xl p-2 transition hover:bg-[#f5f5f7]"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#f5f5f7]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />
                      <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[9px] font-bold text-white">
                        {item.quantity}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1 py-1">
                      <p className="truncate text-sm font-semibold">
                        {item.name}
                      </p>
                      <p className="mt-1 truncate text-[10px] text-gray-400">
                        {item.category}
                      </p>
                    </div>

                    <p className="py-1 text-sm font-semibold">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                  </div>
                ))}
              </div>

              <div className="my-6 border-t border-dashed border-gray-200" />

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span>₹{subtotal.toLocaleString("en-IN")}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">GST ({GST_RATE}%)</span>
                  <span>₹{gst.toLocaleString("en-IN")}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Delivery</span>
                  <span className={delivery === 0 ? "font-semibold text-green-600" : ""}>
                    {delivery === 0 ? "FREE" : `₹${delivery}`}
                  </span>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] bg-[#f5f5f7] p-5">
                <p className="text-[9px] font-bold tracking-[0.2em] text-gray-400">
                  TOTAL PAYABLE
                </p>
                <p className="mt-2 text-3xl font-semibold tracking-tight">
                  ₹{total.toLocaleString("en-IN")}
                </p>
              </div>

              <div className="mt-4 rounded-[1.5rem] border border-gray-100 p-4">
                <p className="text-[9px] font-bold tracking-[0.2em] text-gray-400">
                  DELIVERY TO
                </p>

                {form.name || form.email || form.phone || form.city || form.pinCode ? (
                  <div className="mt-3 space-y-2">
                    {form.name && <p className="text-xs font-semibold">👤 {form.name}</p>}
                    {form.email && <p className="truncate text-[10px] text-gray-500">✉️ {form.email}</p>}
                    {form.phone && <p className="text-[10px] text-gray-500">📱 +91 {form.phone}</p>}
                    {(form.city || form.state || form.pinCode) && (
                      <p className="text-[10px] text-gray-500">
                        📍 {[form.city, form.state, form.pinCode].filter(Boolean).join(", ")}
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="mt-3 text-[10px] text-gray-400">
                    Enter your delivery details
                  </p>
                )}
              </div>

              <div className="mt-4 rounded-[1.5rem] border border-gray-100 bg-[#fafafa] p-4">
                <p className="text-[9px] font-bold tracking-[0.2em] text-gray-400">
                  PAYMENT
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-xl text-white">
                    {selectedMethod?.icon || "💳"}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold">
                      {selectedMethod?.title || "Not selected"}
                    </p>
                    <p className="mt-1 text-[10px] text-gray-400">
                      {selectedMethod ? "Selected" : "Choose an option"}
                    </p>
                  </div>

                  {selectedMethod && (
                    <span className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-xs text-white">
                      ✓
                    </span>
                  )}
                </div>
              </div>

              {delivery > 0 ? (
                <div className="mt-4 rounded-xl bg-gray-50 p-3 text-center">
                  <p className="text-[10px] text-gray-500">
                    Add <span className="font-bold text-black">₹{(2000 - subtotal).toLocaleString("en-IN")}</span> more for FREE delivery
                  </p>
                </div>
              ) : (
                <div className="mt-4 rounded-xl bg-green-50 p-3 text-center">
                  <p className="text-[10px] font-bold text-green-700">
                    ✓ FREE DELIVERY UNLOCKED
                  </p>
                </div>
              )}

              <div className="mt-5 flex items-center justify-center gap-2 text-[9px] text-gray-400">
                <span>🔒</span>
                Secure AURA checkout
                <span className="h-1 w-1 rounded-full bg-gray-300" />
                <span>✓</span>
                Trusted payment
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}