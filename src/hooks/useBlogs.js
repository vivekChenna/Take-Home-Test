"use client";

import { useEffect, useState } from "react";

export default function useBlogs() {
  const [blogs, setBlogs] = useState(null);
  const [error , setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blogs", {
        method: "GET",
      });

      const data = await response.json();

      setBlogs(data);
    } catch (error) {
        setError(error.message);
    }
  };

  return {error , blogs};
}
