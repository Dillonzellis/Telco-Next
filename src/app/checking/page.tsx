import React from "react";
import HeroSubHeading from "../components/util/headings/HeroSubHeading";
import PrimaryHeading from "../components/util/headings/PrimaryHeading";
import Container from "../components/util/layout/Container";

function page() {
  return (
    <>
      <section className="mb-4 bg-brandingBlue-400 py-6 text-white">
        <Container className="space-y-4">
          <HeroSubHeading text="peppery" />
          <PrimaryHeading headingText="Telco Plus" />
          <p className="">Telco Plus is a great company</p>
        </Container>
      </section>

    </>
  );
}

export default page;
