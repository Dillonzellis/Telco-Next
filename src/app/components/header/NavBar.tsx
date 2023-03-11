import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.png";
import Button from "../util/Button";
import NavItem from "./NavItem";

function NavBar() {
  return (
    <nav className=" hidden items-center justify-between py-4 md:flex">
      <Link href="/">
        <Image className="" src={logo} alt="telcoplus logo" />
      </Link>
      <ul className="flex flex-1 justify-around">
        <NavItem itemName="Mortgage" linkHref="/" />
        <NavItem itemName="Banking" linkHref="/checking" />
        <NavItem itemName="Lending" linkHref="/" />
        <NavItem itemName="Self Services" linkHref="/for-sale" />
        <NavItem itemName="About" linkHref="/" />
      </ul>
      <Button btnText="Apply Now" btnSrc="#" />
    </nav>
  );
}

export default NavBar;
