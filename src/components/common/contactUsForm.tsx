import React from "react";

function ContactUsForm() {
  return (
    <form
      action="https://formspree.io/f/mvgqjgpp"
      method="POST"
      className="grid sm:grid-cols-2 gap-4"
    >
      <input
        name="name"
        placeholder="Full name"
        className="border rounded-xl px-4 py-3"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="border rounded-xl px-4 py-3"
        required
      />
      <input
        name="phone"
        placeholder="Phone"
        className="border rounded-xl px-4 py-3"
      />
      <input
        name="company"
        placeholder="Company / Department"
        className="border rounded-xl px-4 py-3"
      />
      <select
        name="service"
        className="border rounded-xl px-4 py-3 sm:col-span-2"
      >
        <option>Service of Interest</option>
        <option>IT Solutions</option>
        <option>Supply & Delivery</option>
        <option>Government / Tender</option>
      </select>
      <textarea
        name="message"
        placeholder="Your message"
        className="border rounded-xl px-4 py-3 sm:col-span-2"
        rows={5}
      />
      <button
        type="submit"
        className="sm:col-span-2 rounded-2xl bg-indigo-600 px-5 py-3 text-white text-sm font-semibold shadow hover:bg-indigo-700"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactUsForm;
