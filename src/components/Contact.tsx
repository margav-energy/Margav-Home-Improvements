import React, { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToast(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mrejqyvy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setToast({
        type: "success",
        message: "Thanks! Your message has been sent.",
      });
    } catch (error) {
      setToast({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="mb-20 h-[2px] w-full bg-gradient-to-r from-[#66cc66] via-[#33cc66] to-[#00cc99]" />
      <section
        id="contact"
        className="relative overflow-hidden bg-white px-6 py-28 text-neutral-950"
      >
        {/* Background word */}
        <h2 className="pointer-events-none absolute -top-6 left-4 text-[18vw] font-extrabold uppercase leading-none tracking-tighter text-[#3333cc]/5">
          Contact
        </h2>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left side */}
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#3333cc]">
              Get a Quote
            </p>

            <h3 className="text-6xl font-extrabold uppercase leading-none tracking-tight md:text-8xl text-[#3333cc]">
              Speak with
              <br />
              our team
            </h3>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-neutral-200 p-8 md:p-12 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <form
              action="#contact"
              method="POST"
              onSubmitCapture={handleSubmit}
              onSubmit={handleSubmit}
              className="grid gap-8 md:grid-cols-2"
            >
              <input
                type="text"
                name="firstName"
                placeholder="FIRST NAME"
                required
                className="border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]"
              />

              <input
                type="text"
                name="lastName"
                placeholder="LAST NAME"
                required
                className="border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]"
              />

              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                required
                className="border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="PHONE"
                required
                className="border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]"
              />

              <select
                name="enquiryType"
                defaultValue=""
                required
                className="border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]"
              >
                <option value="" disabled>
                  ENQUIRY TYPE
                </option>
                <option value="Roofing">Roofing</option>
                <option value="Windows">Windows</option>
                <option value="Doors">Doors</option>
                <option value="Insulation">Insulation</option>
                <option value="Groundworks">Groundworks</option>
                <option value="Landscaping">Landscaping</option>
              </select>

              <select
                name="estimatedBudget"
                defaultValue=""
                required
                className="border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]"
              >
                <option value="" disabled>
                  ESTIMATED BUDGET
                </option>
                <option value="Under £1,000">Under £1,000</option>
                <option value="£1,000 - £5,000">£1,000 - £5,000</option>
                <option value="£5,000 - £10,000">£5,000 - £10,000</option>
                <option value="£10,000+">£10,000+</option>
              </select>

              <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                rows={4}
                required
                className="md:col-span-2 border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]"
              />
              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 flex w-fit items-center gap-3 rounded-full bg-[#3333cc] px-8 py-4 text-sm font-bold uppercase text-white transition hover:bg-[#00cc99]"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
              {toast && (
                <div
                  className={`md:col-span-2 rounded-lg px-4 py-3 text-sm font-semibold ${
                    toast.type === "success"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {toast.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
