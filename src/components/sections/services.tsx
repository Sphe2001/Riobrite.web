import React, { useState, useMemo } from "react";
import {
  LuBriefcase,
  LuBuilding2,
  LuChevronRight,
  LuClipboardList,
  LuCloud,
  LuCpu,
  LuGlobe,
  LuLaptop,
  LuLock,
  LuNetwork,
  LuPackage,
  LuTruck,
} from "react-icons/lu";

const itServices = [
  {
    icon: LuCpu,
    title: "Hardware Supply",
    desc: "Laptops, desktops, servers, peripherals, and accessories.",
  },
  {
    icon: LuNetwork,
    title: "Networking",
    desc: "LAN/WAN design, Wi‑Fi, switching, routing, and cabling.",
  },
  {
    icon: LuLock,
    title: "Cybersecurity",
    desc: "Endpoint, firewalls, policies, user awareness and hardening.",
  },
  {
    icon: LuCloud,
    title: "Cloud Solutions",
    desc: "Microsoft 365, backups, migration, and ongoing support.",
  },
];

const supplyServices = [
  {
    icon: LuPackage,
    title: "Office & Stationery",
    desc: "Paper, toners, consumables, and general office supplies.",
  },
  {
    icon: LuBriefcase,
    title: "Furniture & Equipment",
    desc: "Ergonomic furniture, electronics, and boardroom fit-outs.",
  },
  {
    icon: LuTruck,
    title: "Logistics & Delivery",
    desc: "Procurement, warehousing (on request), and distribution.",
  },
  {
    icon: LuGlobe,
    title: "Sourcing",
    desc: "Local and international vendor sourcing for best value.",
  },
];

const ServicesSection = () => {
  const [filter, setFilter] = useState("all");
  const groups = useMemo(
    () => [
      { key: "it", title: "IT Solutions", items: itServices, icon: LuLaptop },
      {
        key: "supply",
        title: "Supply & Delivery",
        items: supplyServices,
        icon: LuPackage,
      },
      {
        key: "gov",
        title: "Government & Private Sector",
        items: [
          {
            icon: LuClipboardList,
            title: "Tenders & Compliance",
            desc: "Bid responses, documentation, and audit support.",
          },
          {
            icon: LuTruck,
            title: "Contract Fulfilment",
            desc: "SLA management, reporting, and distribution.",
          },
        ],
        icon: LuBuilding2,
      },
    ],
    []
  );

  const visible = groups.filter((g) => filter === "all" || g.key === filter);
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-extrabold">Services</h2>
            <p className="text-gray-600">
              Comprehensive solutions that connect technology with procurement
              and logistics.
            </p>
          </div>
          <div className="flex gap-2">
            {[
              { k: "all", l: "All" },
              { k: "it", l: "IT" },
              { k: "supply", l: "Supply" },
              { k: "gov", l: "Sector" },
            ].map((btn) => (
              <button
                key={btn.k}
                onClick={() => setFilter(btn.k)}
                className={`px-3 py-2 rounded-xl text-sm border shadow-sm ${
                  filter === btn.k ? "bg-indigo-600 text-white" : "bg-white"
                }`}
              >
                {btn.l}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {visible.map((group) => (
            <div
              key={group.key}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <group.icon className="h-5 w-5 text-indigo-600" />
                <p className="font-semibold">{group.title}</p>
              </div>
              <div className="mt-4 grid gap-3">
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border p-4 hover:shadow"
                  >
                    <div className="flex items-start gap-3">
                      <item.icon className="h-5 w-5 text-indigo-600" />
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 inline-flex items-center gap-2 text-sm text-indigo-700">
                Read more <LuChevronRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
