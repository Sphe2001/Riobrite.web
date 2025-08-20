const projects = [
  {
    id: 1,
    title: "Department Network Refresh",
    sector: "Government",
    tags: ["Switching", "Wi‑Fi", "SLA"],
    blurb:
      "Upgraded switching and site-to-site links across 4 offices with 99.9% uptime.",
  },
  {
    id: 2,
    title: "Private Hospital Endpoints",
    sector: "Private",
    tags: ["Hardware", "Security"],
    blurb:
      "Supply and roll-out of secured laptops with encrypted drives for clinicians.",
  },
  {
    id: 3,
    title: "Provincial Office Stationery Tender",
    sector: "Government",
    tags: ["Supply", "Distribution"],
    blurb:
      "Quarterly stationery supply with on-demand last‑mile deliveries across districts.",
  },
];

const ProjectsPage = () => {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold mb-2">
          Projects & Case Studies
        </h2>
        <p className="text-gray-600 mb-6">
          A glimpse into recent deliveries and implementations.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border bg-white shadow-sm overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{p.title}</p>
                  <span className="text-xs rounded-full px-2 py-0.5 bg-gray-100 border text-gray-600">
                    {p.sector}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{p.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full px-2 py-0.5 bg-yellow-50 text-yellow-150 border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
