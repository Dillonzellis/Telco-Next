import Image from "next/image";
import React from "react";

function HeroSubHeading({ text }: { text: string }) {
  return (
    <div className="flex">
      <Image
        className="mr-2"
        src="https://dev3.growthbydesign.org/wp-content/uploads/2022/11/plus.png"
        alt=""
        width={24}
        height={24}
      />
      <div className="text-xl font-medium uppercase tracking-widest">
        {text}
      </div>
    </div>
  );
}

export default HeroSubHeading;
