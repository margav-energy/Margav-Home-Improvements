import React, { useState } from "react";

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  enquiryType: string;
  estimatedBudget: string;
  message: string;
};

const initialValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  enquiryType: "",
  estimatedBudget: "",
  message: "",
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>(
    {}
  );
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const validateForm = (formValues: ContactFormValues) => {
    const nextErrors: Partial<Record<keyof ContactFormValues, string>> = {};

    if (!/^[a-z ,.'-]{2,}$/i.test(formValues.firstName.trim())) {
      nextErrors.firstName = "Enter a valid first name.";
    }

    if (!/^[a-z ,.'-]{2,}$/i.test(formValues.lastName.trim())) {
      nextErrors.lastName = "Enter a valid last name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!/^[+\d][\d\s()-]{7,}$/.test(formValues.phone.trim())) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    if (!formValues.enquiryType) {
      nextErrors.enquiryType = "Select an enquiry type.";
    }

    if (!formValues.estimatedBudget) {
      nextErrors.estimatedBudget = "Select an estimated budget.";
    }

    if (formValues.message.trim().length < 20) {
      nextErrors.message = "Message must be at least 20 characters.";
    }

    return nextErrors;
  };

  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToast(null);
    const validationErrors = validateForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

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

      setValues(initialValues);
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
              onSubmit={handleSubmit}
              className="grid gap-8 md:grid-cols-2"
            >
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleFieldChange}
                  placeholder="FIRST NAME"
                  className="w-full border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]"
                />
                {errors.firstName && (
                  <p className="mt-2 text-xs font-semibold text-red-600">{errors.firstName}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleFieldChange}
                  placeholder="LAST NAME"
                  className="w-full border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]"
                />
                {errors.lastName && (
                  <p className="mt-2 text-xs font-semibold text-red-600">{errors.lastName}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleFieldChange}
                  placeholder="EMAIL"
                  className="w-full border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]"
                />
                {errors.email && (
                  <p className="mt-2 text-xs font-semibold text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleFieldChange}
                  placeholder="PHONE"
                  className="w-full border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]"
                />
                {errors.phone && (
                  <p className="mt-2 text-xs font-semibold text-red-600">{errors.phone}</p>
                )}
              </div>

              <div>
                <select
                  name="enquiryType"
                  value={values.enquiryType}
                  onChange={handleFieldChange}
                  className="w-full border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]"
                >
                  <option value="">ENQUIRY TYPE</option>
                  <option value="Roofing">Roofing</option>
                  <option value="Windows">Windows</option>
                  <option value="Doors">Doors</option>
                  <option value="Insulation">Insulation</option>
                  <option value="Groundworks">Groundworks</option>
                  <option value="Landscaping">Landscaping</option>
                </select>
                {errors.enquiryType && (
                  <p className="mt-2 text-xs font-semibold text-red-600">{errors.enquiryType}</p>
                )}
              </div>

              <div>
                <select
                  name="estimatedBudget"
                  value={values.estimatedBudget}
                  onChange={handleFieldChange}
                  className="w-full border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]"
                >
                  <option value="">ESTIMATED BUDGET</option>
                  <option value="Under £1,000">Under £1,000</option>
                  <option value="£1,000 - £5,000">£1,000 - £5,000</option>
                  <option value="£5,000 - £10,000">£5,000 - £10,000</option>
                  <option value="£10,000+">£10,000+</option>
                </select>
                {errors.estimatedBudget && (
                  <p className="mt-2 text-xs font-semibold text-red-600">
                    {errors.estimatedBudget}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <textarea
                  name="message"
                  value={values.message}
                  onChange={handleFieldChange}
                  placeholder="YOUR MESSAGE"
                  rows={4}
                  className="w-full border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]"
                />
                {errors.message && (
                  <p className="mt-2 text-xs font-semibold text-red-600">{errors.message}</p>
                )}
              </div>
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
