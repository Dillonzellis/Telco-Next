import HeroSubHeading from "../../components/util/headings/HeroSubHeading";
import PrimaryHeading from "../../components/util/headings/PrimaryHeading";
import Container from "../../components/util/layout/Container";
import InnerHero from "../../components/util/layout/InnerHero";

import { generalQuestions, loanQuestions } from "./data/questions";

function FAQs() {
  const { item: generalItems } = generalQuestions;
  const { item: loanItems } = loanQuestions;

  const generalQuestionsItems = generalItems.map((obj, index) => (
    <div className="mb-8 flex flex-col gap-y-2" key={index}>
      <h3 className="text-lg font-semibold">{obj.question}</h3>
      <p className="">- {obj.answer}</p>
    </div>
  ));

  const loanQuestionsItems = loanItems.map((obj, index) => (
    <div className="mb-8 flex flex-col gap-y-2" key={index}>
      <h3 className="text-lg font-semibold">{obj.question}</h3>
      <p className="">- {obj.answer}</p>
    </div>
  ));

  return (
    <div>
      <InnerHero>
        <HeroSubHeading text="FAQs" />
        <PrimaryHeading headingText="Questions & Answers" />
      </InnerHero>
      <section>
        <Container>
          <h2 className="mb-4 text-3xl font-bold">General Questions</h2>
          <div className="mb-8 max-w-5xl">{generalQuestionsItems}</div>
          <h2 className="mb-4 text-3xl font-bold">Loan Questions</h2>
          <div className="mb-8 max-w-5xl">{loanQuestionsItems}</div>
        </Container>
      </section>
    </div>
  );
}

export default FAQs;
