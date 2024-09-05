"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function useBlogs() {
  const [blogs, setBlogs] = useState(null);
  const [error , setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blogs", {
        method: "GET",
      });

     

      setBlogs(response.data);
    } catch (error) {
        setError(error.message);
    }
  };

  return {error , blogs};
}
