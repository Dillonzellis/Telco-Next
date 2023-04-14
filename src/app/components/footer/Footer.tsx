import Button from "../util/Button";

import Image from "next/image";
import Link from "next/link";
import Fb from "../../../../public/fb.svg";
import Instagram from "../../../../public/instagram.svg";
import Youtube from "../../../../public/youtube.svg";
import Container from "../util/layout/Container";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        <div className="flex flex-col items-center gap-4 bg-brandingBlue-400 py-6 text-white">
          <div className="font-serif text-4xl font-semibold">Contact Us</div>
          <div className="flex gap-4 font-semibold">
            <div className="">Locations</div>
            <div className="">(903) 753-5588</div>
          </div>
          <Button btnText="Learn More" btnSrc="#" />
          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src={Fb} alt="facebook icon" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src={Instagram} alt="instagram icon" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src={Youtube} alt="youtube icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-brandingGrey-700 py-6 text-white">
        <Container className="space-y-6">
          <ul className="flex flex-col items-center justify-around gap-x-3 gap-y-6 md:flex-row">
            <li>
              <Link href="/">
                <Image
                  src="https://dev3.growthbydesign.org/wp-content/uploads/2022/11/logo-footer.png"
                  alt="white telco logo"
                  width={183}
                  height={40}
                />
              </Link>
            </li>
            <li className="font-bold lg:text-lg">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="font-bold lg:text-lg">
              <a href="#">Terms & Disclosures</a>
            </li>
            <li className="font-bold lg:text-lg">
              <a href="#">Compliant Notice</a>
            </li>
          </ul>
          <div className="flex flex-col items-center justify-center space-y-6 md:flex-row md:space-x-12">
            <Image
              src="https://dev3.growthbydesign.org/wp-content/uploads/2022/11/ncua-logo.png"
              alt="ncua logo"
              width={175}
              height={85}
            />
            <Image
              src="https://dev3.growthbydesign.org/wp-content/uploads/2022/11/equal-housing-logo.png"
              alt="equal housing logo"
              width={83}
              height={97}
            />
            <Image
              src="https://dev3.growthbydesign.org/wp-content/uploads/2022/11/accredited-business.png"
              alt="accredited business logo"
              width={150}
              height={58}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-1 text-center text-sm">
            <div className="flex gap-x-4 font-bold">
              <div>NMLS ID #736037</div>
              <div>NUMBER #311985791</div>
            </div>
            <div className="">
              Copyright © {currentYear} Telco Plus Credit Union. Federally
              Insured By NCUA.
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
