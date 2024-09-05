"use client";

import Card from "@/components/Card";
import useBlogs from "@/hooks/useBlogs";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function BlogCards() {
  const { blogs, error } = useBlogs();

  return !blogs && !error ? (
    <div className=" min-h-[500px] h-full w-full flex items-center justify-center   ">
      <Box sx={{ display: "flex" }}>
        <CircularProgress className=" text-5xl" />
      </Box>
    </div>
  ) : blogs.data?.length > 0 ? (
    <div className=" flex items-center justify-evenly gap-10 flex-wrap p-5">
      {blogs?.data?.map((blogData) => {
        return <Card blogData={blogData} key={blogData?.id} />;
      })}
    </div>
  ) : null;
}
