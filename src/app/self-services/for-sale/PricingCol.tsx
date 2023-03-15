function PricingCol({
  startingPrice,
  buyPrice,
}: {
  startingPrice: string;
  buyPrice: string;
}) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <div className="text-xs text-auxBlue-600">Starting At</div>
        <div className="text-5xl font-bold text-auxBlue-800">
          ${startingPrice}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-xs text-auxBlue-600">Buy Now</div>
        <div className="text-3xl font-semibold text-auxBlue-800">
          ${buyPrice}
        </div>
      </div>
    </>
  );
}

export default PricingCol;
