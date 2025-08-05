import React, { useState } from "react";
import EditModal from "../components/EditModal";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Web Developer | React & Node.js",
    profileImage: "./profile.png",
    bannerImage: "./banner.webp",
    about:
      "Passionate developer with 5+ years of experience in building web applications.",
    experience: [
      {
        title: "Frontend Developer",
        company: "TechCorp",
        location: "Remote",
        from: "2022-01-01",
        to: "2023-01-01",
        description: "Built beautiful UIs.",
      },
    ],
    educationDetails: [
      {
        school: "MIT",
        degree: "BSc",
        fieldOfStudy: "Computer Science",
        from: "2016-09-01",
        to: "2020-06-01",
        description: "Focused on software engineering.",
      },
    ],
  });

  const [modalType, setModalType] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [editBasic, setEditBasic] = useState(false);

  const handleSave = (type, data) => {
    setUser((prev) => ({
      ...prev,
      [type]: [...(prev[type] || []), data],
    }));
    setShowModal(false);
  };

  const handleBasicSave = (e) => {
    e.preventDefault();
    setEditBasic(false);
  };

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUser((prev) => ({
        ...prev,
        [type]: url,
      }));
    }
  };

  const posts = [
    { id: 1, content: "Excited to join a new project!", date: "2025-08-01" },
    { id: 2, content: "Learning GraphQL is so fun!", date: "2025-07-28" },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-6">
      {/* Profile Card */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="relative group">
          <label className="cursor-pointer block">
            <img
              src={user.bannerImage}
              alt="Banner"
              className="w-full h-48 object-cover"
            />
            <input
              type="file"
              className="hidden"
              onChange={(e) => handleImageChange(e, "bannerImage")}
            />
            <div className="absolute top-2 right-2 bg-white/80 px-2 py-1 text-sm rounded shadow-sm opacity-0 group-hover:opacity-100 transition">
              Change Banner
            </div>
          </label>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-14 group">
            <label className="relative cursor-pointer block">
              <img
                src={user.profileImage}
                alt="Profile"
                className="w-28 h-28 rounded-full border-4 border-white object-cover shadow"
              />
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleImageChange(e, "profileImage")}
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs bg-white px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition">
                Change Photo
              </div>
            </label>
          </div>
        </div>
        <div className="h-16" />
        <div className="text-center px-4 pb-6">
          {!editBasic ? (
            <>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="mt-2 text-gray-700">{user.bio}</p>
              <button
                onClick={() => setEditBasic(true)}
                className="mt-2 text-sm text-blue-600 hover:underline"
              >
                ✏️ Edit
              </button>
            </>
          ) : (
            <form onSubmit={handleBasicSave} className="space-y-2">
              <input
                className="border px-2 py-1 w-full"
                value={user.name}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <input
                className="border px-2 py-1 w-full"
                value={user.email}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <textarea
                className="border px-2 py-1 w-full"
                value={user.bio}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, bio: e.target.value }))
                }
              />
              <button
                type="submit"
                className="text-white bg-blue-600 px-4 py-1 rounded"
              >
                Save
              </button>
            </form>
          )}
        </div>
      </div>

      {/* About Section */}
      <div className="mt-6 bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-2">About</h3>
        <p className="text-gray-700">{user.about}</p>
      </div>

      {/* Experience */}
      <div className="mt-6 bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Experience</h3>
          <button
            onClick={() => {
              setModalType("experience");
              setShowModal(true);
            }}
            className="text-sm text-blue-600 hover:underline"
          >
            + Add Experience
          </button>
        </div>
        {user.experience.map((exp, idx) => (
          <div key={idx} className="mb-3">
            <h4 className="font-semibold">{exp.title} @ {exp.company}</h4>
            <p className="text-sm text-gray-600">
              {exp.location} | {exp.from} - {exp.to}
            </p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mt-6 bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Education</h3>
          <button
            onClick={() => {
              setModalType("educationDetails");
              setShowModal(true);
            }}
            className="text-sm text-blue-600 hover:underline"
          >
            + Add Education
          </button>
        </div>
        {user.educationDetails.map((edu, idx) => (
          <div key={idx} className="mb-3">
            <h4 className="font-semibold">
              {edu.degree} in {edu.fieldOfStudy}
            </h4>
            <p className="text-sm text-gray-600">
              {edu.school} | {edu.from} - {edu.to}
            </p>
            <p className="text-gray-700">{edu.description}</p>
          </div>
        ))}
      </div>

      {/* Post Form and Feed */}
      <div className="mt-6">
        <PostForm />
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Posts</h3>
        <PostList posts={posts} />
      </div>

      {/* Modal */}
      {showModal && (
        <EditModal
          type={modalType}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default ProfilePage;
