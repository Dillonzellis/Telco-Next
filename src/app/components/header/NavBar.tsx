import Image from "next/image";
import logo from "public/logo.png";
import Button from "../util/Button";
import NavItem from "./NavItem";

function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4">
      <Image className="" src={logo} alt="telcoplus logo" />
      <ul className="flex flex-1 justify-around">
        <NavItem itemName="Mortgage" />
        <NavItem itemName="Banking" />
        <NavItem itemName="Lending" />
        <NavItem itemName="Self Services" />
        <NavItem itemName="About" />
      </ul>
      <Button btnText="Apply Now" />
    </nav>
  );
}

export default NavBar;
