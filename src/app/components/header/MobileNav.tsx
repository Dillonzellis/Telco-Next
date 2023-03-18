"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.png";
import { useState } from "react";
import Button from "../util/Button";
import NavItem from "./NavItem";

import { navItems } from "./data/navItems";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const navItemsList = navItems.map((obj, index) => (
    <NavItem key={index} itemName={obj.itemName} linkHref={obj.linkHref} />
  ));

  return (
    // <div
    //   className={`flex items-center justify-between py-4 md:hidden ${
    //     isOpen ? "flex-col" : ""
    //   }`}
    // >
    <div className={`flex items-center justify-between py-4 md:hidden`}>
      <Link href="/">
        <Image className="" src={logo} alt="telcoplus logo" />
      </Link>
      <button aria-label="Toggle Navigation Menu" onClick={toggleMenu}>
        {isOpen ? (
          <XMarkIcon className="h-10 w-10 text-brandingBlue-400" />
        ) : (
          <Bars3Icon className="h-10 w-10 text-brandingBlue-400" />
        )}
      </button>
      <ul
        className={`flex-1 flex-col justify-around gap-y-4 lg:flex-row ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {navItemsList}
        <Button btnText="Apply Now" btnSrc="#" />
      </ul>
    </div>
  );
}

export default MobileNav;
