import Link from "next/link";
import React from "react";
import navItems from "@/data/navItem";

function Navbar() {
  return (
    <div>
      <Link href="/">Nightking</Link>
      <div>
        {navItems.map((item) => (
          <li key={item.id}>
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
