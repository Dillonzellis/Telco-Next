import PrimaryHeading from "./components/util/PrimaryHeading";

export default function Home() {
  return (
    <main>
      <section className="mb-4 bg-brandingBlue-400 text-white">
        <div className="container mx-auto space-y-4 py-6">
          <PrimaryHeading headingText="Telco Plus" />
          <p className="">Telco Plus is a great company</p>
        </div>
      </section>
      <section className="">
        <div className="container mx-auto py-6">
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
        </div>
      </section>
    </main>
  );
}
