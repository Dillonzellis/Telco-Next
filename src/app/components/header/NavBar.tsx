"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.png";
import { useState } from "react";
import Button from "../util/Button";
import NavItem from "./NavItem";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="items-center justify-between py-4 md:flex">
      <Link href="/">
        <Image className="" src={logo} alt="telcoplus logo" />
      </Link>
      <ul
        className={`flex-1 flex-col justify-around gap-y-4 lg:flex-row ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <NavItem itemName="Mortgage" linkHref="/" />
        <NavItem itemName="Banking" linkHref="/checking" />
        <NavItem itemName="Lending" linkHref="/" />
        <NavItem itemName="Self Services" linkHref="/for-sale" />
        <NavItem itemName="About" linkHref="/" />
      </ul>
      <Button btnText="Apply Now" btnSrc="#" />
      <button aria-label="Toggle Navigation Menu" onClick={toggleMenu}>
        {isOpen ? (
          <XMarkIcon className="h-10 w-10 text-brandingBlue-400" />
        ) : (
          <Bars3Icon className="h-10 w-10 text-brandingBlue-400" />
        )}
      </button>
    </nav>
  );
}

export default NavBar;
