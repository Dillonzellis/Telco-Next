import React from "react";
import HeroSubHeading from "../headings/HeroSubHeading";
import PrimaryHeading from "../headings/PrimaryHeading";
import Container from "./Container";

function InnerHero({ children }: { children: React.ReactNode }) {
  return (
    <section className="mb-12 border-b-8 border-gray-400 bg-brandingBlue-400 py-12 text-white">
      <Container className="space-y-4">{children}</Container>
    </section>
  );
}

export default InnerHero;
