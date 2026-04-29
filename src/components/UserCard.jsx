import React from "react";

const UserCard = ({ feed }) => {
  return (
    <div className="w-80 bg-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">

      {/* Image */}
      <div className="h-60 w-full overflow-hidden">
        <img
          src={feed.photoUrl}
          alt="profile"
          className="h-full w-full object-fit hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col items-center text-center gap-2">

        {/* Name */}
        <h2 className="text-xl font-semibold text-gray-800">
          {feed.firstName} {feed.lastName}
        </h2>

        {/* Age + Gender */}
        <p className="text-sm text-gray-500">
          {feed.age} • {feed.gender}
        </p>

        {/* About */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {feed.about}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-4 w-full">

          <button className="flex-1 py-2 rounded-xl bg-pink-500 text-white font-medium hover:bg-pink-600 transition">
             Interested
          </button>

          <button className="flex-1 py-2 rounded-xl bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition">
             Ignore
          </button>

        </div>
      </div>
    </div>
  );
};

export default UserCard;