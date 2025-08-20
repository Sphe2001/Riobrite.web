import { useState } from "react";
import { LuX } from "react-icons/lu";
import QouteForm from "../common/qouteForm";

type QuestModalProps = {
  open: boolean;
  onClose: () => void;
};
const QouteModal = ({ open, onClose }: QuestModalProps) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    sector: "Government",
    service: "IT Solutions",
    notes: "",
  });
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-2xl rounded-3xl bg-white border shadow-xl">
        <div className="flex items-center justify-between p-5 border-b">
          <p className="text-2xl font-extrabold">Request a Quote</p>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-50">
            <LuX className="h-5 w-5" />
          </button>
        </div>
        <div className="p-5">
          <QouteForm data={data} setData={setData} />
        </div>
      </div>
    </div>
  );
};

export default QouteModal;
