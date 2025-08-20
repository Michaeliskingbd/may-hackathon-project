import React from "react";
import { FaStar, FaThumbsUp } from "react-icons/fa";

const ReviewCard = ({ UserImage, UserName, UserDate, Time }) => {
  return (
    <div className="max-w-xl w-full mx-auto bg-white border rounded-lg shadow-sm p-4 mb-4">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        {/* Profile + Info */}
        <div className="flex items-start gap-3 flex-1">
          <img
            src={UserImage}
            alt="Reviewer"
            className="w-14 h-14 rounded-lg object-cover shrink-0"
          />

          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-800 text-base">
              {UserName}
            </h3>
            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-x-2 gap-y-1 mt-1">
              <span>{UserDate}</span>
              <span>|</span>
              <span>{Time}</span>
              <span>|</span>
              <div className="flex text-orange-400">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Like Button */}
        <button className="text-gray-400 hover:text-gray-600 self-start sm:self-auto">
          <FaThumbsUp size={18} />
        </button>
      </div>

      {/* Review Text */}
      <p className="text-gray-600 mt-3 text-sm sm:text-base">
        Credibly pontificate transparent quality vectors with quality mindshare.
        Efficiently architect worldwide strategic theme areas after user.
      </p>
    </div>
  );
};

export default ReviewCard;
