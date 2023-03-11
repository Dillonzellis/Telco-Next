import Image from "next/image";
import React from "react";

import CarIcon from "../../../public/car.svg";
import MilageIcon from "../../../public/mileage.svg";
import PaintIcon from "../../../public/paintbrush.svg";
import CardAttribute from "./CardAttribute";

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
      <div className="grid-cols-85-1 grid border-t-2 py-3">
        <div className="grid gap-y-2 border-r-2 px-4">
          <CardAttribute
            image={CarIcon}
            alt={"car icon"}
            text={"Dodge Challenger 2D SXT"}
          />
          <CardAttribute
            image={MilageIcon}
            alt={"speedometer icon"}
            text={"148,424 miles"}
          />
          <CardAttribute
            image={PaintIcon}
            alt={"paintbrush icon"}
            text={"White Exterior"}
          />
        </div>
        <div className="grid gap-y-2 px-4">
          <div className="grid items-center">
            <div className="text-xs">Starting At</div>
            <div className="text-5xl font-bold">$7,995</div>
          </div>
          <div className="grid items-center">
            <div className="text-xs">Buy Now</div>
            <div className="text-3xl font-semibold">$9,995</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForSaleCard;
