import React from "react";

function PrimaryHeading({ headingText }: { headingText: string }) {
  return (
    <h1 className="font-serif text-6xl font-semibold">
      {headingText}
    </h1>
  );
}

export default PrimaryHeading;
