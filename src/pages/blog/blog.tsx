import { LuChevronRight } from "react-icons/lu";
import BasicHero from "../../components/heroes/basicHero";

const blog = [
  {
    id: 1,
    title: "How to Prepare RFQs for Faster Fulfilment",
    date: "2025-07-01",
  },
  {
    id: 2,
    title: "Top 5 Tips for Network Hardening in SMBs",
    date: "2025-06-11",
  },
  { id: 3, title: "Cloud Backups: 3 Non‑Negotiables", date: "2025-05-22" },
];
const BlogPage = () => {
  return (
    <section className="py-14">
      <BasicHero imageSrc="/images/picNews.webp" heading="Blog & News" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="mb-5 font-general text-gray-300">
          Insights from technology, procurement and logistics.
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog.map((b) => (
            <div
              key={b.id}
              className="rounded-2xl border border-gray-800 bg-black p-5 shadow-sm"
            >
              <p className="text-xs text-gray-300">
                {new Date(b.date).toLocaleDateString()}
              </p>
              <p className="font-semibold mt-1">{b.title}</p>
              <button className="mt-3 inline-flex items-center gap-2 text-sm text-yellow-150">
                Read article <LuChevronRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
