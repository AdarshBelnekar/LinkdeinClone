import React from "react";

const PostList = ({ posts }) => {
  if (posts.length === 0) {
    return <p className="text-gray-600">No posts yet.</p>;
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 rounded shadow">
          <p className="text-gray-800">{post.content}</p>
          <p className="text-sm text-gray-500 mt-1">{post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
