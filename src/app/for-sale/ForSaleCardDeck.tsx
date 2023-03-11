import ForSaleCard from "./ForSaleCard";
import {
  cad12,
  challenger,
  chevy18,
  ford10,
  ford15,
  hyundai2011,
  malibu18,
  toy17,
} from "./repoData";

function ForSaleCardDeck() {
  const cars = [
    challenger,
    cad12,
    chevy18,
    toy17,
    ford15,
    ford10,
    hyundai2011,
    malibu18,
  ];

  const carCards = cars.map((car, index) => {
    const shadowDirection = ["left", "middle", "right"][index % 3];

    return (
      <ForSaleCard
        key={index}
        shadowDirection={shadowDirection}
        imgSrc={car.imgSrc}
        imgAlt={car.imgAlt}
        title={car.title}
        engineText={car.engineText}
        mileageText={car.mileageText}
        carColor={car.carColor}
        startingPrice={car.startingPrice}
        buyPrice={car.buyPrice}
      />
    );
  });

  return (
    <div className="grid gap-y-12 gap-x-8 md:grid-cols-2 xl:grid-cols-3">
      {carCards}
    </div>
  );
}

export default ForSaleCardDeck;
