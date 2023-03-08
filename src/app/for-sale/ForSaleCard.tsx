import Image from "next/image";
import React from "react";

function ForSaleCard() {
  return (
    <div className="">
      <Image
        className="w-full"
        src="https://dev3.growthbydesign.org/wp-content/uploads/2023/03/2013-dodge-chall-1.jpg"
        alt="Picture of the author"
        width={430}
        height={290}
      />
      <div className="py-2 text-center text-lg font-bold text-brandingBlue-400">
        2013 Dodge Challenger 2D SXT
      </div>
      <div className=""></div>
    </div>
  );
}

export default ForSaleCard;
