import Container from "./components/util/Container";
import PrimaryHeading from "./components/util/PrimaryHeading";

export default function Home() {
  return (
    <main>
      <section className="mb-4 bg-brandingBlue-400 py-6 text-white">
        <Container className="space-y-4">
          <PrimaryHeading headingText="Telco Plus" />
          <p className="">Telco Plus is a great company</p>
        </Container>
      </section>
      <section className="py-6">
        <Container className="space-y-2">
          <h2 className="text-2xl font-bold">
            Choose the Right Checking
          </h2>
          <p className="max-w-prose">
            A checking account with Telco Plus Credit Union gives you
            the freedom to bank how you need. Our services likeonline
            banking, direct deposit, and free bill pay make it easy to
            stay on top of your finances. You can also enjoy account
            alerts for low balances and daily direct deposit deposits,
            plus free bill payment services or paperless statements.
            Click below to learn more about our checking accounts.
          </p>
        </Container>
      </section>
    </main>
  );
}
