import React from "react";
import { FaUser, FaEnvelope, FaGlobe, FaPen } from "react-icons/fa";

export default function ReplyForm() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800">Leave a Reply</h2>
      <p className="text-gray-500 mb-6">
        Your email address will not be published. Required fields are marked
      </p>

      {/* Form */}
      <form className="space-y-4">
        {/* Name and Email - responsive */}
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="flex items-center border rounded-lg px-3 py-2 flex-1 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Full Name*"
              className="flex-1 outline-none"
            />
            <FaUser className="text-gray-500" />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2 flex-1">
            <input
              type="email"
              placeholder="Your Email*"
              className="flex-1 outline-none"
            />
            <FaEnvelope className="text-gray-500" />
          </div>
        </div>

        {/* Website */}
        <div className="flex items-center border rounded-lg px-3 py-2">
          <input
            type="url"
            placeholder="Website"
            className="flex-1 outline-none"
          />
          <FaGlobe className="text-gray-500" />
        </div>

        {/* Comment */}
        <div className="flex items-start border rounded-lg px-3 py-2">
          <textarea
            placeholder="Comment*"
            className="flex-1 outline-none resize-none"
            rows="4"
          />
          <FaPen className="text-gray-500 mt-2" />
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <span className="text-sm text-gray-600">
            Save my name, email, and website in this browser for the next time I
            comment.
          </span>
        </div>

        {/* Send Button */}
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2"
        >
          Send Message
          <span className="text-lg">✈️</span>
        </button>
      </form>
    </div>
  );
}
