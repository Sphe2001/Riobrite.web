import React, { useEffect } from "react";
import { useForm } from "@formspree/react";
import Swal from "sweetalert2";
import { DotPulse } from "ldrs/react";
import "ldrs/react/DotPulse.css";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

type ContactFormProps = {
  data: ContactFormData;
  setData: React.Dispatch<React.SetStateAction<ContactFormData>>;
};
function ContactUsForm({ data, setData }: ContactFormProps) {
  const [state, handleSubmit, reset] = useForm("mvgqjgpp");
  useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        title: "Success",
        text: "Message sent!",
        icon: "success",
        background: "#000000",
        color: "#fff",
        showConfirmButton: false,
        timer: 1500,
      });
      setData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "Service of Interest",
        message: "",
      });
      reset();
    }

    if (state.errors) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong...",
        icon: "error",
        background: "#000000",
        color: "#fff",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [state.succeeded, state.errors, reset, setData]);
  return (
    <form
      // action="https://formspree.io/f/mvgqjgpp"
      // method="POST"
      onSubmit={handleSubmit}
      className="grid sm:grid-cols-2 gap-4 border border-gray-800 p-10 rounded-xl"
    >
      <input
        name="name"
        placeholder="Full name"
        className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-150 focus:border-blue-150  rounded-xl px-4 py-3 bg-gray-900 text-gray-200"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-150 focus:border-blue-150 rounded-xl px-4 py-3 bg-gray-900 text-gray-200"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        required
      />
      <input
        name="phone"
        placeholder="Phone"
        className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-150 focus:border-blue-150 rounded-xl px-4 py-3 bg-gray-900 text-gray-200"
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
        required
      />
      <input
        name="company"
        placeholder="Company / Department"
        className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-150 focus:border-blue-150 rounded-xl px-4 py-3 bg-gray-900 text-gray-200 "
        value={data.company}
        onChange={(e) => setData({ ...data, company: e.target.value })}
      />
      <select
        name="service"
        className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-150 focus:border-blue-150 rounded-xl px-4 py-3 sm:col-span-2 bg-gray-900 text-gray-200"
        value={data.service}
        onChange={(e) => setData({ ...data, service: e.target.value })}
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
        value={data.message}
        onChange={(e) => setData({ ...data, message: e.target.value })}
        rows={5}
      />
      <button
        type="submit"
        disabled={state.submitting}
        className="sm:col-span-2 rounded-2xl bg-yellow-100 px-5 py-3 text-white text-sm font-semibold shadow hover:bg-yellow-150"
      >
        {state.submitting ? (
          <div className="flex gap-1 justify-center items-center">
            <span>Sending</span>{" "}
            <DotPulse size="38" speed="1.3" color="white" />
          </div>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}

export default ContactUsForm;
