import React, { useEffect, useState } from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("https://linkdeinclone.onrender.com/api/register", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data.user);
    } catch (error) {
      console.error("Failed to fetch user", error);
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get("https://linkdeinclone.onrender.com/api/");
      setPosts(res.data.posts);
    } catch (err) {
      console.error("Error loading posts", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPost = async (newContent) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://linkdeinclone.onrender.com/api/",
        { content: newContent },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPosts([res.data.post, ...posts]);
    } catch (err) {
      console.error("Error creating post", err);
    }
  };

  useEffect(() => {
  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch("https://linkdeinclone.onrender.com/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error("Error fetching user", err);
    }
  };

  fetchUser();
  fetchPosts();
}, []);


  return (
    <div className="flex flex-col lg:flex-row max-w-full mx-auto mt-6 gap-6 px-4">
      {/* Left Sidebar */}
      <div className="w-full lg:w-1/4 space-y-4 hidden lg:block">
        <div className="bg-blue-100 shadow p-4 rounded-lg">
          <div className="flex flex-col items-center text-center mt-4">
            <img
              src="/defaultUser.jpg"
              alt="Profile"
              className="w-20 h-20 rounded-full mb-2"
            />
            <h2 className="text-lg font-semibold">
              Your Name
            </h2>
            <p className="text-sm text-gray-500">
              @yourname
            </p>
          </div>
        </div>
      </div>

      {/* Center Feed */}
      <div className="w-full lg:w-2/4 space-y-4">
        <PostForm onPost={handleAddPost} />
        {loading ? (
          <p className="text-center text-gray-500">Loading posts...</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-500">No posts yet.</p>
        ) : (
          posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))
        )}
      </div>

      {/* Right Sidebar - You can keep it empty or use for features like notifications */}
      <div className="w-full lg:w-1/4 space-y-4 hidden lg:block">
        <div className="bg-yellow-50 shadow p-4 rounded-lg text-center">
          <p className="text-gray-600">More features coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

