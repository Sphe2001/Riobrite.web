import {
  LuClipboardList,
  LuShieldCheck,
  LuTruck,
  LuUsers,
} from "react-icons/lu";

const features = [
  {
    icon: LuShieldCheck,
    title: "Reliable",
    desc: "On-time delivery and dependable SLAs across IT and supply.",
  },
  {
    icon: LuTruck,
    title: "End-to-End",
    desc: "From sourcing to last-mile delivery—single accountable partner.",
  },
  {
    icon: LuClipboardList,
    title: "Tender Ready",
    desc: "Compliant with government procurement requirements and audits.",
  },
  {
    icon: LuUsers,
    title: "Client-Centric",
    desc: "Tailored solutions for public and private sector needs.",
  },
];
const FeaturesSection = () => {
  return (
    <section className="py-10 border-t border-gray-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gradient-to-r from-transparent via-white/5 to-white/2 backdrop-blur-md rounded-2xl border border-white/10  p-5  "
            >
              <f.icon className="h-6 w-6 text-yellow-150" />
              <p className="mt-3 font-semibold text-white">{f.title}</p>
              <p className="text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <ScrollStack>
    //   <ScrollStackItem itemClassName="">
    //     <h2>Card 1</h2>
    //     <p>This is the first card in the stack</p>
    //   </ScrollStackItem>
    //   <ScrollStackItem>
    //     <h2>Card 2</h2>
    //     <p>This is the second card in the stack</p>
    //   </ScrollStackItem>
    // </ScrollStack>
  );
};

export default FeaturesSection;
