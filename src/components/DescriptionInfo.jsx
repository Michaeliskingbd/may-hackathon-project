import { useState } from "react";

export default function DestinationInfo({
  ImageUrl,
  DescTitle,
  DescName,
  Description1,
  Description2,
  Description3,
  Description4,
}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-full ">
      {/* Top Image */}
      <div className="relative">
        <img
          src={ImageUrl}
          alt={DescTitle}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">{DescTitle}</h1>
        </div>
      </div>

      {/* Info Card */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-b-lg p-6 -mt-4 relative z-10">
        <h2 className="text-xl font-bold text-gray-900 mb-2 border-b-2 border-red-500 inline-block">
          {DescName}
        </h2>

        <p className="text-gray-700 mb-4">{Description1}</p>

        <p className="text-gray-700 mb-4">{Description2}</p>

        {/* Extra text (only shows when expanded) */}
        {showMore && (
          <>
            <p className="text-gray-700 mb-4">{Description3}</p>
            <p className="text-gray-700 mb-6">{Description4}</p>
          </>
        )}

        {/* Toggle Button */}
        <div className="text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2 border rounded-full text-gray-700 hover:bg-gray-100 transition"
          >
            {showMore ? "Show less ▲" : "Show more ▼"}
          </button>
        </div>
      </div>
    </div>
  );
}
