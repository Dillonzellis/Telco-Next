"use client";

import Link from "next/link";

function NavItem({
  itemName,
  linkHref,
}: {
  itemName: string;
  linkHref: string;
}) {
  return (
    <>
      <li className="text-lg font-bold text-brandingBlue-400">
        <Link href={linkHref}>{itemName}</Link>
      </li>
    </>
  );
}

export default NavItem;
