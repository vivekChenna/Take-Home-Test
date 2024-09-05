import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { Button, IconButton } from "@mui/material";

function Header() {
  const navTabs = ["Home", "About", "Meet us"];

  return (
    <div className=" flex items-center justify-between py-3 sticky top-0 z-30 bg-black">
      <div className="  items-center gap-5 sm:flex hidden">
        {navTabs.map((tab) => (
          <div className=" text-lg font-semibold" key={tab}>{tab}</div>
        ))}
      </div>
      <Link href="/">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={40}
          height={40}
          className=" rounded-lg"
        />
      </Link>
      <div className=" flex items-center gap-5">
        <IconButton aria-label="delete" disabled color="" className="">
          <SearchIcon className=" text-gray-500 text-3xl" />
        </IconButton>
        <Link href="#">Sign In</Link>
        <Button variant="contained" className=" rounded-xl">
          Subscribe
        </Button>
      </div>
    </div>
  );
}

export default Header;
