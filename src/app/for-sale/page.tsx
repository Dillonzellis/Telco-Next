import React from "react";
import HeroSubHeading from "../components/util/headings/HeroSubHeading";
import PrimaryHeading from "../components/util/headings/PrimaryHeading";
import Container from "../components/util/layout/Container";
import InnerHero from "../components/util/layout/InnerHero";
import ForSaleCard from "./ForSaleCard";

import { cad12, challenger } from "./repoData";

function page() {
  return (
    <>
      <InnerHero>
        <HeroSubHeading text="peppery" />
        <PrimaryHeading headingText="For Sale" />
        <p className="max-w-prose">
          This is a great page for you if you are looking for a good deal!
          Please check out our repos below and see what other members have for
          sale. You can list your own items by emailing webmaster@telcoplus.org.
          Ads may or may not be taken down after 60 days. If your ad needs to
          run longer, just email us.
        </p>
      </InnerHero>
      <section>
        <Container>
          <div className="mb-12">
            <div className="pb-2 text-2xl font-bold">
              Credit Union Vehicles for Sale
            </div>
            <div className="mb-4 font-medium">
              Contact Marshinick at 903.753.5588
            </div>
            <p>
              Classified Ads may be added to this page by Telco Plus Credit
              Union members. The ads will run 60 days unless cancelled prior to
              60 days. Send information to webmaster@telcoplus.org to have your
              ad posted here.
            </p>
          </div>
          <div className="grid gap-x-8 md:grid-cols-2 xl:grid-cols-3">
            <ForSaleCard
              shadowDirection="left"
              imgSrc={challenger.imgSrc}
              imgAlt={challenger.imgAlt}
              title={challenger.title}
              engineText={challenger.engineText}
              mileageText={challenger.mileageText}
              carColor={challenger.carColor}
              startingPrice={challenger.startingPrice}
              buyPrice={challenger.buyPrice}
            />
            <ForSaleCard
              shadowDirection="middle"
              imgSrc={cad12.imgSrc}
              imgAlt={cad12.imgAlt}
              title={cad12.title}
              engineText={cad12.engineText}
              mileageText={cad12.mileageText}
              carColor={cad12.carColor}
              startingPrice={cad12.startingPrice}
              buyPrice={cad12.buyPrice}
            />
          </div>
        </Container>
      </section>

      <div className="mt-20"></div>
    </>
  );
}

export default page;
