import Heading from "../../components/common/heading";

const projects = [
  {
    id: 1,
    title: "Department Network Refresh",
    sector: "Government",
    tags: ["Switching", "Wi‑Fi", "SLA"],
    blurb:
      "Upgraded switching and site-to-site links across 4 offices with 99.9% uptime.",
    imageSrc: "/images/picServ.jpeg",
  },
  {
    id: 2,
    title: "Private Hospital Endpoints",
    sector: "Private",
    tags: ["Hardware", "Security"],
    blurb:
      "Supply and roll-out of secured laptops with encrypted drives for clinicians.",
    imageSrc: "/images/picLap2.jpg",
  },
  {
    id: 3,
    title: "Provincial Office Stationery Tender",
    sector: "Government",
    tags: ["Supply", "Distribution"],
    blurb:
      "Quarterly stationery supply with on-demand last‑mile deliveries across districts.",
    imageSrc: "/images/picSta2.jpg",
  },
];

const ProjectsPage = () => {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading heading={"Projects & Case Studies"} />
        <p className="text-gray-200 mb-6 font-general">
          A glimpse into recent deliveries and implementations.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-gray-800 bg-gradient-to-br from-transparent via-white/5 to-white/2 backdrop-blur-md shadow-sm overflow-hidden"
            >
              <div className="relative aspect-video">
                <img
                  src={p.imageSrc}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5 ">
                <div className="flex items-center justify-between">
                  <p className="font-semibold font-general text-gray-100">
                    {p.title}
                  </p>
                  <span className="text-xs rounded-full px-2 py-0.5 bg-blue-150 border border-gray-800 text-gray-100">
                    {p.sector}
                  </span>
                </div>
                <p className="text-sm text-gray-300 mt-1">{p.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full px-2 py-0.5 bg-yellow-100 text-white border border-gray-800"
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
