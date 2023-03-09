import React from "react";
import HeroSubHeading from "../components/util/headings/HeroSubHeading";
import PrimaryHeading from "../components/util/headings/PrimaryHeading";
import Container from "../components/util/layout/Container";
import InnerHero from "../components/util/layout/InnerHero";

function page() {
  return (
    <>
      <InnerHero>
        <HeroSubHeading text="peppery" />
        <PrimaryHeading headingText="Telco Plus" />
        <p className="">Telco Plus is a great company</p>
      </InnerHero>
    </>
  );
}

export default page;
