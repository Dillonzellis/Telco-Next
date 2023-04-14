import Container from "../util/layout/Container";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function NavBar() {
  return (
    <nav>
      <Container>
        <MobileNav />
        <DesktopNav />
      </Container>
    </nav>
  );
}

export default NavBar;
