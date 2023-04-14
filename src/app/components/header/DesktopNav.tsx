import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.png";
import Button from "../util/Button";
import { navItems } from "./data/navItems";
import NavItem from "./NavItem";

function DesktopNav() {
  const navItemsList = navItems.map((obj, index) => (
    <NavItem
      key={index}
      className="text-brandingBlue-400"
      itemName={obj.itemName}
      linkHref={obj.linkHref}
    />
  ));
  return (
    <>
      <div className="hidden items-center justify-between py-4 md:flex">
        <Link href="/">
          <Image className="" src={logo} alt="telcoplus logo" />
        </Link>
        <ul className="flex flex-1 flex-col justify-around gap-y-4 lg:flex-row">
          {navItemsList}
        </ul>
        <Button btnText="Apply Now" btnSrc="#" />
      </div>
    </>
  );
}

export default DesktopNav;
