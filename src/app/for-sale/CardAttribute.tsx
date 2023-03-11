import Image from "next/image";

function CardAttribute({
  image,
  alt,
  text,
}: {
  image: any;
  alt: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-x-3">
      <Image src={image} alt={alt} width={37} />
      <div className="text-sm text-auxBlue-600">{text}</div>
    </div>
  );
}

export default CardAttribute;
