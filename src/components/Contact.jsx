import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 5000);
  };

  const faqs = [
    {
      question: "How can I track my AURA order?",
      answer:
        "Once your order is shipped, you'll receive a tracking link through email and SMS. You can also check your order status from your AURA account.",
    },
    {
      question: "What is your return policy?",
      answer:
        "Eligible products can be returned within the applicable return window as long as they meet our return conditions. Contact our support team if you need help starting a return.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Most orders are delivered within 3–7 business days depending on your location. Delivery estimates are shown during checkout.",
    },
    {
      question: "Do you offer warranty support?",
      answer:
        "Yes. Eligible AURA products include warranty coverage. Keep your order confirmation or invoice available when contacting our support team.",
    },
    {
      question: "Which payment methods are supported?",
      answer:
        "We support major debit and credit cards, UPI, and Cash on Delivery for eligible orders and locations.",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f5f5f7] px-4 py-14 sm:py-12"
    >

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-white blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-[35%] h-[30rem] w-[30rem] rounded-full bg-gray-200/70 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white blur-3xl" />

      <div className="relative mx-auto max-w-full">


        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold tracking-[0.18em] text-gray-500 shadow-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black" />
            AURA SUPPORT CENTER
          </div>

          <h2 className="mt-7 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-7xl">
            We're here
            <br />
            <span className="text-gray-400">
              to help you.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            Questions about your order, headphones, payments, delivery,
            returns, or anything AURA? Our support team is ready to help
            you every step of the way.
          </p>

        </div>


        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-gray-400">
              RESPONSE
            </p>

            <p className="mt-3 text-3xl font-semibold">
              &lt; 2h
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Average response time
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-gray-400">
              SUPPORT
            </p>

            <p className="mt-3 text-3xl font-semibold">
              24/7
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Customer assistance
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-gray-400">
              CUSTOMERS
            </p>

            <p className="mt-3 text-3xl font-semibold">
              50K+
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Customers supported
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-gray-400">
              SATISFACTION
            </p>

            <p className="mt-3 text-3xl font-semibold">
              98%
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Positive support rating
            </p>
          </div>

        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">

          <div className="relative overflow-hidden rounded-[2rem] bg-black p-7 text-white sm:p-9">

            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10" />

            <div className="absolute -right-12 top-16 h-44 w-44 rounded-full border border-white/10" />

            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

            <div className="relative">

              {/* Icon */}

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black shadow-lg">

                <div className="flex items-center gap-[3px]">
                  <span className="h-2 w-[3px] rounded-full bg-black" />
                  <span className="h-5 w-[3px] rounded-full bg-black" />
                  <span className="h-8 w-[3px] rounded-full bg-black" />
                  <span className="h-5 w-[3px] rounded-full bg-black" />
                  <span className="h-2 w-[3px] rounded-full bg-black" />
                </div>

              </div>

              <p className="mt-8 text-xs font-semibold tracking-[0.25em] text-gray-500">
                AURA CARE
              </p>

              <h3 className="mt-3 text-3xl font-semibold">
                We're listening.
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
                Whether you need help choosing the right audio product,
                tracking an order, or solving a technical issue,
                our team is here for you.
              </p>

              {/* CONTACT DETAILS */}

              <div className="mt-10 space-y-6">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm">
                    @
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      hello@auraaudio.com
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      We reply within 2 hours
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                    ☎
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-medium">
                     +91 98765 34567
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      Toll-free customer care
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                    ◷
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      Support hours
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      Mon – Sun • 24/7
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      Online support available
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                    ◉
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      AURA Studio
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      Salem, TamilNadu, India
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      India
                    </p>
                  </div>

                </div>

              </div>

              {/* SOCIAL */}

              <div className="mt-10 border-t border-white/10 pt-7">

                <p className="text-xs font-semibold tracking-[0.18em] text-gray-500">
                  FOLLOW AURA
                </p>

                <div className="mt-4 flex gap-3">

                  {["IG", "X", "YT", "IN"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
                    >
                      {item}
                    </button>
                  ))}

                </div>

              </div>

            </div>

          </div>


          <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm sm:p-9">

            <div className="flex items-start justify-between gap-5">

              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-gray-400">
                  SEND A MESSAGE
                </p>

                <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                  How can we help?
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Tell us what you need and our team will take it from here.
                </p>
              </div>

              <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] text-lg sm:flex">
                ↗
              </div>

            </div>

            {sent ? (


              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-3xl text-white shadow-xl">
                  ✓
                </div>

                <h3 className="mt-6 text-3xl font-semibold">
                  Message sent!
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
                  Thanks for reaching out to AURA. Your message has
                  been received and our support team will get back
                  to you shortly.
                </p>

                <div className="mt-6 rounded-full bg-[#f5f5f7] px-5 py-2 text-xs text-gray-500">
                  Ticket created successfully
                </div>

                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-7 rounded-full border border-gray-200 px-6 py-3 text-sm font-medium transition hover:border-black hover:bg-black hover:text-white"
                >
                  Send another message
                </button>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* NAME + EMAIL */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Your name
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-gray-200 bg-[#fafafa] px-4 py-3.5 text-sm outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email address
                    </label>

                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-gray-200 bg-[#fafafa] px-4 py-3.5 text-sm outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                    />
                  </div>

                </div>

                {/* PHONE + ORDER */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Phone number
                    </label>

                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-gray-200 bg-[#fafafa] px-4 py-3.5 text-sm outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Order number
                    </label>

                    <input
                      type="text"
                      placeholder="AURA-123456"
                      className="w-full rounded-xl border border-gray-200 bg-[#fafafa] px-4 py-3.5 text-sm outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                    />
                  </div>

                </div>

                {/*  */}

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    What can we help with?
                  </label>

                  <select
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-gray-200 bg-[#fafafa] px-4 py-3.5 text-sm outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>

                    <option>Order help</option>
                    <option>Track my order</option>
                    <option>Product question</option>
                    <option>Returns & refunds</option>
                    <option>Warranty claim</option>
                    <option>Technical support</option>
                    <option>Payment issue</option>
                    <option>Shipping question</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* PRIORITY */}

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Priority
                  </label>

                  <div className="grid grid-cols-3 gap-3">

                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="priority"
                        value="normal"
                        defaultChecked
                        className="peer sr-only"
                      />

                      <span className="flex items-center justify-center rounded-xl border border-gray-200 bg-[#fafafa] px-3 py-3 text-xs font-medium transition peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                        Normal
                      </span>
                    </label>

                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="priority"
                        value="important"
                        className="peer sr-only"
                      />

                      <span className="flex items-center justify-center rounded-xl border border-gray-200 bg-[#fafafa] px-3 py-3 text-xs font-medium transition peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                        Important
                      </span>
                    </label>

                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="priority"
                        value="urgent"
                        className="peer sr-only"
                      />

                      <span className="flex items-center justify-center rounded-xl border border-gray-200 bg-[#fafafa] px-3 py-3 text-xs font-medium transition peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                        Urgent
                      </span>
                    </label>

                  </div>
                </div>

                {/* MESSAGE */}

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Your message
                  </label>

                  <textarea
                    required
                    rows="6"
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-[#fafafa] px-4 py-3.5 text-sm outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                  />
                </div>

                {/* ATTACHMENT STYLE */}

                <div className="rounded-xl border border-dashed border-gray-200 bg-[#fafafa] p-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                      +
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        Add an attachment
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        Optional • Screenshot, invoice or product issue
                      </p>
                    </div>

                  </div>

                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-black py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-xl"
                >
                  Send Message

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <p className="text-center text-xs text-gray-400">
                  Your information is secure and will only be used to
                  respond to your request.
                </p>

              </form>

            )}

          </div>

        </div>


        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="flex items-center justify-between">
              <span className="text-2xl">📦</span>

              <span className="rounded-full bg-[#f5f5f7] px-2.5 py-1 text-[10px] font-semibold text-gray-500">
                ORDERS
              </span>
            </div>

            <h4 className="mt-6 font-semibold">
              Track an Order
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Check your order status, shipment and delivery updates.
            </p>

            <button
              type="button"
              className="mt-5 text-sm font-semibold transition hover:translate-x-1"
            >
              Track Order →
            </button>

          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="flex items-center justify-between">
              <span className="text-2xl">↺</span>

              <span className="rounded-full bg-[#f5f5f7] px-2.5 py-1 text-[10px] font-semibold text-gray-500">
                RETURNS
              </span>
            </div>

            <h4 className="mt-6 font-semibold">
              Returns & Refunds
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Need to return something? We'll guide you through the process.
            </p>

            <button
              type="button"
              className="mt-5 text-sm font-semibold transition hover:translate-x-1"
            >
              Start Return →
            </button>

          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="flex items-center justify-between">
              <span className="text-2xl">⚙</span>

              <span className="rounded-full bg-[#f5f5f7] px-2.5 py-1 text-[10px] font-semibold text-gray-500">
                SUPPORT
              </span>
            </div>

            <h4 className="mt-6 font-semibold">
              Product Support
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Get help with setup, connectivity and product issues.
            </p>

            <button
              type="button"
              className="mt-5 text-sm font-semibold transition hover:translate-x-1"
            >
              Get Help →
            </button>

          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="flex items-center justify-between">
              <span className="text-2xl">💬</span>

              <span className="rounded-full bg-[#f5f5f7] px-2.5 py-1 text-[10px] font-semibold text-gray-500">
                CHAT
              </span>
            </div>

            <h4 className="mt-6 font-semibold">
              Talk to AURA
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Start a conversation with our customer care team.
            </p>

            <button
              type="button"
              className="mt-5 text-sm font-semibold transition hover:translate-x-1"
            >
              Start Chat →
            </button>

          </div>

        </div>


        <div className="mt-6 overflow-hidden rounded-[2rem] border border-gray-200 bg-black text-white">

          <div className="grid lg:grid-cols-[1fr_1.4fr]">

            <div className="p-7 sm:p-10">

              <p className="text-xs font-semibold tracking-[0.2em] text-gray-500">
                VISIT AURA
              </p>

              <h3 className="mt-3 text-3xl font-semibold">
                AURA Studio
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-gray-400">
                Experience our products in person, speak with our audio
                specialists and discover the right sound for you.
              </p>

              <div className="mt-8 space-y-4">

                <div>
                  <p className="text-xs text-gray-500">
                    ADDRESS
                  </p>

                  <p className="mt-1 text-sm">
                    Salem, TamilNadu, India
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    HOURS
                  </p>

                  <p className="mt-1 text-sm">
                    Monday – Sunday • 10:00 AM – 8:00 PM
                  </p>
                </div>

              </div>

              <button
                type="button"
                className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-gray-200"
              >
                Get Directions →
              </button>

            </div>

            {/* MAP STYLE */}

            <div className="relative min-h-[300px] overflow-hidden bg-[#111]">

              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />

              <div className="absolute left-[30%] top-[25%] h-px w-[60%] rotate-[25deg] bg-white/10" />

              <div className="absolute left-[10%] top-[60%] h-px w-[80%] -rotate-[18deg] bg-white/10" />

              <div className="absolute left-[55%] top-[42%] h-4 w-4 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.08),0_0_40px_rgba(255,255,255,0.5)]" />

              <div className="absolute left-[55%] top-[42%] -translate-x-1/2 -translate-y-full rounded-full bg-white px-4 py-2 text-xs font-semibold text-black shadow-xl">
                AURA Studio
              </div>

              <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs text-gray-400 backdrop-blur">
                Salem, TamilNadu, India
              </div>

            </div>

          </div>

        </div>


        <div className="mt-20">

          <div className="mx-auto max-w-full text-center">

            <p className="text-xs font-semibold tracking-[0.2em] text-gray-400">
              FREQUENTLY ASKED
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Quick answers.
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Find answers to some of the most common AURA questions.
            </p>

          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-3">

            {faqs.map((faq, index) => {
              const open = faqOpen === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setFaqOpen(open ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >

                    <span className="text-sm font-semibold sm:text-base">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] text-lg transition-transform duration-300 ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>

                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-7 text-gray-500 sm:px-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>


        <div className="mt-20 rounded-[2rem] bg-white p-8 text-center shadow-sm sm:p-12">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
            ✦
          </div>

          <h3 className="mt-6 text-3xl font-semibold tracking-[-0.03em]">
            Still need help?
          </h3>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500">
            No worries. Send us a message and a member of the AURA
            support team will be happy to help.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href="mailto:hello@auraaudio.com"
              className="rounded-full bg-blue-300 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-sky-350"
            >
              Email AURA
            </a>

            <a
              href="tel:+9118001234567"
              className="rounded-full border border-gray-200 px-7 py-3.5 text-sm font-semibold transition hover:-translate-y-1 hover:border-black"
            >
              Call Support
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}