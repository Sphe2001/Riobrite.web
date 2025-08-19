import React from "react";

const jobs = [
  {
    id: 1,
    title: "IT Support Technician",
    type: "Full‑time",
    location: "Pretoria / Hybrid",
  },
  {
    id: 2,
    title: "Procurement Officer",
    type: "Full‑time",
    location: "Pretoria",
  },
  {
    id: 3,
    title: "Sales Executive (B2G/B2B)",
    type: "Commission",
    location: "Gauteng",
  },
];
const CareersPage = () => {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-2xl font-extrabold">Careers</h2>
            <p className="text-gray-600">
              Grow with a company that values impact and integrity.
            </p>
          </div>
          <a href="#" className="text-sm text-indigo-700">
            Submit a general application
          </a>
        </div>
        <div className="grid gap-4">
          {jobs.map((j) => (
            <div
              key={j.id}
              className="rounded-2xl border bg-white p-5 shadow-sm flex items-center justify-between"
            >
              <div>
                <p className="font-semibold">{j.title}</p>
                <p className="text-sm text-gray-600">
                  {j.type} • {j.location}
                </p>
              </div>
              <button className="rounded-xl border px-4 py-2 text-sm bg-white hover:bg-gray-50">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersPage;
