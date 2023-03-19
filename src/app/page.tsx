import Image from "next/image";
import heroImg from "public/home-hero.jpg";
import Button from "./components/util/Button";
import Container from "./components/util/layout/Container";

export default function Home() {
  return (
    <main>
      <section className="mb-8 bg-brandingBlue-400">
        <div className="relative">
          <Container className="">
            <div className="absolute flex h-full flex-1 flex-col justify-center space-y-2 font-bold text-white">
              <div className="text-xl">Telco Plus Savings</div>
              <h1 className="text-4xl">NO CAP on Your Earnings!</h1>
              <div className="flex items-center space-x-2">
                <div className="text-6xl">1.50</div>
                <div className="flex flex-col items-start">
                  <div className="">%</div>
                  <div className="">APY</div>
                </div>
              </div>
              <Button btnText="Learn More" btnSrc="#" />
            </div>
          </Container>

          <Image
            className="mx-auto border-r-4 border-l-4"
            src={heroImg}
            alt="hero img"
            width={1920}
            height={500}
          />
        </div>
      </section>
      <section className="bg-brandingGrey-700 py-6 text-white">
        <Container className="space-y-2">
          <div>Great features of Telco Plus Checking Accounts!</div>
          <h2 className="font-serif text-4xl font-bold">
            Choose the Right Checking
          </h2>
          <p className="">
            A checking account with Telco Plus Credit Union gives you
            the freedom to bank how you need. Our services like online
            banking, direct deposit, and free bill pay make it easy to
            stay on top of your finances. You can also enjoy account
            alerts for low balances and daily direct deposit deposits,
            plus free bill payment services or paperless statements.
            Click below to learn more about our checking accounts.
          </p>
          <Button btnText="Learn More" btnSrc="#" />
          <div className="text-9xl">NEW NEW DAWG</div>
        </Container>
      </section>
    </main>
  );
}
