"use client";

import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";

export const PartnerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    state: "",
    type: "installer",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        state: "",
        type: "installer",
        message: "",
      });
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="flex animate-fade-in flex-col items-center justify-center gap-4 rounded-2xl border border-brand-green/20 bg-brand-green/5 p-8 text-center">
        <CheckCircle2 className="size-16 text-brand-green" />
        <h3 className="text-xl font-bold text-brand-dark">Application Submitted!</h3>
        <p className="max-w-sm text-sm text-brand-dark-gray">
          Thank you for reaching out to Solrato Power. Our dealer success team will contact you
          within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-purple px-6 py-2.5 text-xs font-semibold text-white hover:bg-brand-purple-hover"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-2xl border border-brand-medium-gray/10 bg-white p-8 shadow-xl"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-xs font-bold tracking-wider text-brand-dark uppercase"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="rounded-lg border border-brand-medium-gray/30 bg-brand-light-gray px-4 py-3 text-sm transition-colors focus:border-brand-purple focus:outline-none"
            placeholder="John Doe"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="company"
            className="text-xs font-bold tracking-wider text-brand-dark uppercase"
          >
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="rounded-lg border border-brand-medium-gray/30 bg-brand-light-gray px-4 py-3 text-sm transition-colors focus:border-brand-purple focus:outline-none"
            placeholder="Solar EPC Ltd"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xs font-bold tracking-wider text-brand-dark uppercase"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="rounded-lg border border-brand-medium-gray/30 bg-brand-light-gray px-4 py-3 text-sm transition-colors focus:border-brand-purple focus:outline-none"
            placeholder="john@example.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-xs font-bold tracking-wider text-brand-dark uppercase"
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="rounded-lg border border-brand-medium-gray/30 bg-brand-light-gray px-4 py-3 text-sm transition-colors focus:border-brand-purple focus:outline-none"
            placeholder="+91 99999 99999"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="state"
            className="text-xs font-bold tracking-wider text-brand-dark uppercase"
          >
            State / Region *
          </label>
          <input
            type="text"
            id="state"
            name="state"
            required
            value={formData.state}
            onChange={handleChange}
            className="rounded-lg border border-brand-medium-gray/30 bg-brand-light-gray px-4 py-3 text-sm transition-colors focus:border-brand-purple focus:outline-none"
            placeholder="Uttar Pradesh"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="type"
            className="text-xs font-bold tracking-wider text-brand-dark uppercase"
          >
            Partnership Type *
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="h-11 rounded-lg border border-brand-medium-gray/30 bg-brand-light-gray px-4 py-3 text-sm transition-colors focus:border-brand-purple focus:outline-none"
          >
            <option value="distributor">Distributor / Dealer</option>
            <option value="installer">Solar Installer / EPC</option>
            <option value="commercial">Commercial / Industrial Client</option>
            <option value="utility">Utility Grid Representative</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-xs font-bold tracking-wider text-brand-dark uppercase"
        >
          Message / Requirement Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="resize-none rounded-lg border border-brand-medium-gray/30 bg-brand-light-gray px-4 py-3 text-sm transition-colors focus:border-brand-purple focus:outline-none"
          placeholder="Describe your grid or distribution capacity requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-purple py-3 text-sm font-semibold text-white shadow-md shadow-brand-purple/10 transition-colors hover:bg-brand-purple-hover disabled:cursor-not-allowed disabled:bg-brand-purple/50"
      >
        {status === "submitting" ? (
          "Submitting application..."
        ) : (
          <>
            Submit Inquiry
            <Send className="size-4" />
          </>
        )}
      </button>
    </form>
  );
};
