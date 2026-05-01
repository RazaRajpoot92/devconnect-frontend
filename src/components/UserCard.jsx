import React from "react";

const UserCard = ({ feed }) => {
  return (
    <div className="w-80  h-100 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-700 hover:border-emerald-500/30">

  {/* Image */}
  <div className="relative h-60 group w-full overflow-hidden">
    <img
      src={feed.photoUrl}
      alt="profile"
      className=" h-full w-full object-fill group-hover:scale-110 transition-transform duration-500"
    />

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

    {/* Name on image */}
    <div className="absolute bottom-3 left-4 text-white">
      <h2 className="text-lg font-semibold">
        {feed.firstName} {feed.lastName}
      </h2>
      <p className="text-xs text-gray-300">
        {feed.age} • {feed.gender}
      </p>
    </div>
  </div>

  {/* Content */}
  <div className="p-5 flex flex-col gap-3">

    {/* About */}
    <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
      {feed.about}
    </p>

    {/* Buttons */}
    <div className="flex gap-3 mt-2">

      <button className="flex-1 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300">
        Interested
      </button>

      <button className="flex-1 py-2 rounded-xl bg-gray-700 text-gray-300 font-medium hover:bg-gray-600 hover:text-white transition-all duration-300">
        Ignore
      </button>

    </div>
  </div>
</div>
  );
};

export default UserCard;