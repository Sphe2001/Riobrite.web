import React from "react";

type QuoteFormData = {
  name: string;
  email: string;
  phone: string;
  org: string;
  sector: string;
  service: string;
  notes: string;
};

type QouteFormProps = {
  data: QuoteFormData;
  setData: React.Dispatch<React.SetStateAction<QuoteFormData>>;
};
const QouteForm = ({ data, setData }: QouteFormProps) => {
  return (
    <form
      action="https://formspree.io/f/mdkdrkkz"
      method="POST"
      className="p-5 grid sm:grid-cols-2 gap-4"
    >
      <input
        name="name"
        className="border rounded-xl px-4 py-3"
        placeholder="Full name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        required
      />
      <input
        name="email"
        type="email"
        className="border rounded-xl px-4 py-3"
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        required
      />
      <input
        name="phone"
        className="border rounded-xl px-4 py-3"
        placeholder="Phone"
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
      />
      <input
        name="org"
        className="border rounded-xl px-4 py-3"
        placeholder="Company / Dept"
        value={data.org}
        onChange={(e) => setData({ ...data, org: e.target.value })}
      />

      {/* Sector */}
      <div className="flex items-center gap-4 sm:col-span-2">
        <label
          className={`px-3 py-2 rounded-xl border cursor-pointer ${
            data.sector === "Government" ? "bg-indigo-50 border-indigo-200" : ""
          }`}
        >
          <input
            type="radio"
            name="sector"
            className="mr-2"
            value="Government"
            checked={data.sector === "Government"}
            onChange={() => setData({ ...data, sector: "Government" })}
          />
          Government
        </label>
        <label
          className={`px-3 py-2 rounded-xl border cursor-pointer ${
            data.sector === "Private" ? "bg-indigo-50 border-indigo-200" : ""
          }`}
        >
          <input
            type="radio"
            name="sector"
            className="mr-2"
            value="Private"
            checked={data.sector === "Private"}
            onChange={() => setData({ ...data, sector: "Private" })}
          />
          Private
        </label>
      </div>

      {/* Service */}
      <select
        name="service"
        className="border rounded-xl px-4 py-3 sm:col-span-2"
        value={data.service}
        onChange={(e) => setData({ ...data, service: e.target.value })}
      >
        <option>IT Solutions</option>
        <option>Supply & Delivery</option>
        <option>Government / Tender</option>
      </select>

      {/* Notes */}
      <textarea
        name="notes"
        className="border rounded-xl px-4 py-3 sm:col-span-2"
        rows={5}
        placeholder="Project scope, timelines, delivery address, etc."
        value={data.notes}
        onChange={(e) => setData({ ...data, notes: e.target.value })}
      />

      <button
        type="submit"
        className="sm:col-span-2 rounded-2xl bg-indigo-600 px-5 py-3 text-white text-sm font-semibold shadow hover:bg-indigo-700"
      >
        Submit Request
      </button>
    </form>
  );
};

export default QouteForm;
