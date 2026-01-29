import React, { useEffect, useState } from "react";
import API from "../api/api";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get("/blogs").then((res) => {
      setBlogs(res.data);
    });
  }, []);

  return (
    <div className="p-6">
      {blogs.map((blog) => (
        <div key={blog.id} className="border p-4 mb-4">
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
