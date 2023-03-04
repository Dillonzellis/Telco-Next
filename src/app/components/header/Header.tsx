import Image from "next/image";
import logo from "public/logo.png";
import NavItem from "./NavItem";

function Header() {
  return (
    <>
      <nav className="container mx-auto">
        <ul className="flex items-center justify-around py-4">
          <li>
            <Image src={logo} alt="telcoplus logo" />
          </li>
          <NavItem itemName="Mortgage" />
          <NavItem itemName="Banking" />
          <NavItem itemName="Lending" />
          <NavItem itemName="Self Services" />
          <NavItem itemName="About" />
          <li>Become A Member</li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
