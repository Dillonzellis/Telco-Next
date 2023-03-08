import React from "react";
import PrimaryHeading from "../components/util/headings/PrimaryHeading";
import Container from "../components/util/layout/Container";
import ForSaleCard from "./ForSaleCard";

function page() {
  return (
    <>
      <section className="mb-12 border-b-8 border-gray-400 bg-brandingBlue-400 py-6 text-white">
        <Container>
          <PrimaryHeading headingText="For Sale" />
          <p className="max-w-prose">
            This is a great page for you if you are looking for a good
            deal! Please check out our repos below and see what other
            members have for sale. You can list your own items by
            emailing webmaster@telcoplus.org. Ads may or may not be
            taken down after 60 days. If your ad needs to run longer,
            just email us.
          </p>
        </Container>
      </section>
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
              Classified Ads may be added to this page by Telco Plus
              Credit Union members. The ads will run 60 days unless
              cancelled prior to 60 days. Send information to
              webmaster@telcoplus.org to have your ad posted here.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-8">
            <ForSaleCard />
            <ForSaleCard />
            <ForSaleCard />
          </div>
        </Container>
      </section>
    </>
  );
}

export default page;
