function ContactUsForm() {
  return (
    <form
      action="https://formspree.io/f/mvgqjgpp"
      method="POST"
      className="grid sm:grid-cols-2 gap-4 border border-gray-800 p-10 rounded-xl"
    >
      <input
        name="name"
        placeholder="Full name"
        className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-150 focus:border-blue-150  rounded-xl px-4 py-3 bg-gray-900 text-gray-200"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-150 focus:border-blue-150 rounded-xl px-4 py-3 bg-gray-900 text-gray-200"
        required
      />
      <input
        name="phone"
        placeholder="Phone"
        className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-150 focus:border-blue-150 rounded-xl px-4 py-3 bg-gray-900 text-gray-200"
      />
      <input
        name="company"
        placeholder="Company / Department"
        className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-150 focus:border-blue-150 rounded-xl px-4 py-3 bg-gray-900 text-gray-200 "
      />
      <select
        name="service"
        className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-150 focus:border-blue-150 rounded-xl px-4 py-3 sm:col-span-2 bg-gray-900 text-gray-200"
      >
        <option>Service of Interest</option>
        <option>IT Solutions</option>
        <option>Supply & Delivery</option>
        <option>Government / Tender</option>
      </select>
      <textarea
        name="message"
        placeholder="Your message"
        className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-150 focus:border-blue-150 rounded-xl px-4 py-3 sm:col-span-2 bg-gray-900 text-gray-200"
        rows={5}
      />
      <button
        type="submit"
        className="sm:col-span-2 rounded-2xl bg-yellow-100 px-5 py-3 text-white text-sm font-semibold shadow hover:bg-yellow-150"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactUsForm;
