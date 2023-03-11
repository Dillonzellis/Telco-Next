import Image from "next/image";
import { Url } from "url";
import CarIcon from "../../../public/car.svg";
import MilageIcon from "../../../public/mileage.svg";
import PaintIcon from "../../../public/paintbrush.svg";
import CardAttribute from "./CardAttribute";

function ForSaleCard({
  shadowDirection,
  imgSrc,
  imgAlt,
  title,
  engineText,
  mileageText,
  carColor,
  startingPrice,
  buyPrice,
}: {
  shadowDirection: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  engineText: string;
  mileageText: string;
  carColor: string;
  startingPrice: string;
  buyPrice: string;
}) {
  if (shadowDirection === "left") {
    shadowDirection = "hero-shadow-left";
  } else if (shadowDirection === "right") {
    shadowDirection = "hero-shadow-right";
  } else if (shadowDirection === "middle") {
    shadowDirection = "repo-shadow";
  }

  return (
    <div className={`${shadowDirection} rounded-sm`}>
      <Image
        className="w-full rounded-t-sm"
        src={imgSrc}
        alt={imgAlt}
        width={430}
        height={290}
      />
      <div className="py-2 text-center text-lg font-bold text-brandingBlue-400">
        {title}
      </div>
      <div className="grid-cols-85-1 grid border-t bg-auxBlue-100 py-3">
        <div className="grid gap-y-2 border-r border-tertBlue-100/20 px-4">
          <CardAttribute image={CarIcon} alt={"car icon"} text={engineText} />
          <CardAttribute
            image={MilageIcon}
            alt={"speedometer icon"}
            text={`${mileageText} Miles`}
          />
          <CardAttribute
            image={PaintIcon}
            alt={"paintbrush icon"}
            text={carColor}
          />
        </div>
        <div className="grid gap-y-2 px-4">
          <div className="grid items-center">
            <div className="text-xs text-auxBlue-600">Starting At</div>
            <div className="text-5xl font-bold text-auxBlue-800">
              ${startingPrice}
            </div>
          </div>
          <div className="grid items-center">
            <div className="text-xs text-auxBlue-600">Buy Now</div>
            <div className="text-3xl font-semibold text-auxBlue-800">
              ${buyPrice}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForSaleCard;
