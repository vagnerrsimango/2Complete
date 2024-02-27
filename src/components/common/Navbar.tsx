import Link from "next/link";
import React from "react";
import Profile from "./Profile";
import { auth } from "@/utils/auth";

async function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center px-4 py-2 shadow-md w-full">
      <Link className="font-bold uppercase" href="/">
        To Complete
      </Link>
      <div>
        <Profile />
      </div>
    </nav>
  );
}

export default Navbar;
