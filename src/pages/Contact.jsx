import { MdOutlineAddLocationAlt, MdOutlineMarkEmailRead } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const ContactDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row p-5 justify-center gap-5">
      {/* Address */}
      <div className="hover:bg-blue-500 p-3 bg-gray-400 rounded-[20px]">
        <div className="flex flex-col gap-3 lg:w-[360px] h-[250px] hover:text-white p-2 items-center border border-black rounded-[20px]">
          <MdOutlineAddLocationAlt className="w-[70px] h-[70px]" />
          <h6 className="font-semibold text-2xl">Our Address</h6>
          <p>2542 King Ln. Ojo Ibadan</p>
        </div>
      </div>

      {/* Email */}
      <div className="bg-blue-500 p-3 rounded-[20px]">
        <div className="flex flex-col gap-3 lg:w-[360px] h-[250px] text-white p-2 items-center border border-black rounded-[20px]">
          <MdOutlineMarkEmailRead className="w-[70px] h-[70px]" />
          <h6 className="font-semibold text-2xl">Info@usama.com</h6>
          <p>Email us anytime for enquiry</p>
        </div>
      </div>

      {/* Phone */}
      <div className="hover:bg-blue-500 p-3 bg-gray-400 rounded-[20px]">
        <div className="flex flex-col gap-5 lg:w-[360px] h-[250px] hover:text-white p-2 items-center border border-black rounded-[20px]">
          <FiPhoneCall className="w-[70px] h-[70px]" />
          <h6 className="font-semibold text-2xl">Hot:+234-906-654-1057</h6>
          <p>Call us for kind support</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
