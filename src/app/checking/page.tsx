import HeroSubHeading from "../components/util/headings/HeroSubHeading";
import PrimaryHeading from "../components/util/headings/PrimaryHeading";

import InnerHero from "../components/util/layout/InnerHero";

function page() {
  return (
    <>
      <InnerHero>
        <HeroSubHeading text="members first" />
        <PrimaryHeading headingText="Telco Plus" />
        <p className="">Telco Plus is a great company</p>
      </InnerHero>
    </>
  );
}

export default page;
