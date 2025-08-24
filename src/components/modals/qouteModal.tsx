import { useState } from "react";
import { LuX } from "react-icons/lu";
import QouteForm from "./qouteForm";
import Heading from "../common/heading";

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
  if (!open) return;
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center p-4">
      <div
        className="absolute inset-0 backdrop-blur-sm bg-black/40"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl rounded-3xl backdrop-blur-md  bg-black/90 border border-gray-800 shadow-xl">
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <Heading heading={"Request a Quote"} />
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-800 "
          >
            <LuX className="h-5 w-5" />
          </button>
        </div>
        <div className="p-5">
          <QouteForm data={data} setData={setData} onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default QouteModal;
