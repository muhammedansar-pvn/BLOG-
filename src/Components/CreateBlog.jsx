import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

const CreateBlog = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePublish = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError("Title and content are required");
      setSuccess("");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await API.post("/blogs", {
        title,
        content,
        createdAt: new Date().toISOString(),
      });

      setTitle("");
      setContent("");
      setSuccess("Blog published successfully ✅");
    } catch (err) {
      console.error("Error creating blog", err);
      setError("Failed to publish blog ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl">

        <form
          onSubmit={handlePublish}
          className="bg-white p-8 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Create Blog
          </h2>

          {/* Title */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Blog Title
            </label>
            <input
              type="text"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Content */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Blog Content
            </label>
            <textarea
              rows="6"
              placeholder="Write your blog content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-600 text-sm mb-4 text-center">
              {error}
            </p>
          )}

          {/* Success */}
          {success && (
            <p className="text-green-600 text-sm mb-4 text-center">
              {success}
            </p>
          )}

          {/* Publish Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg transition text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Publishing..." : "Publish Blog"}
          </button>
        </form>

        {/* Go to Blog List */}
        <button
          onClick={() => navigate("/bloglist")}
          className="w-full mt-4 bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          All Blogs
        </button>
      </div>
    </div>
  );
};

export default CreateBlog;
