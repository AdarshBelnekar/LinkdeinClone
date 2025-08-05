import React from "react";
import { FaRegThumbsUp, FaRegCommentDots, FaShare, FaRetweet } from "react-icons/fa";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow border border-gray-200 mb-4 transition hover:shadow-md">
      {/* Header */}
      <div className="flex items-center mb-3">
        <img
          src="/defaultUser.jpg"
          alt="User"
          className="w-12 h-12 rounded-full mr-3 object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900 text-sm">
            {post.user?.name || "User Name"}
          </h3>
          <p className="text-xs text-gray-500">{post.user?.email || "user@example.com"}</p>
          <p className="text-[10px] text-gray-400">Posted just now</p>
        </div>
      </div>

      {/* Post Content */}
      <p className="text-gray-800 text-sm mb-2">{post.content}</p>

      {/* Action Bar with Icons */}
      <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-3 mt-3">
        <button className="flex items-center gap-2 hover:text-blue-600 transition">
          <FaRegThumbsUp /> Like
        </button>
        <button className="flex items-center gap-2 hover:text-blue-600 transition">
          <FaRegCommentDots /> Comment
        </button>
        <button className="flex items-center gap-2 hover:text-blue-600 transition">
          <FaRetweet /> Repost
        </button>
        <button className="flex items-center gap-2 hover:text-blue-600 transition">
          <FaShare /> Share
        </button>
      </div>
    </div>
  );
};

export default PostCard;
