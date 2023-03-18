import Container from "../util/layout/Container";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function NavBar() {
  return (
    <nav>
      <Container>
        <DesktopNav />
        <MobileNav />
      </Container>
    </nav>
  );
}

export default NavBar;
