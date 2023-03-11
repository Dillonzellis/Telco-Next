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
    <div className="flex items-center gap-x-6">
      <Image src={image} alt={alt} />
      <div className="text-sm">{text}</div>
    </div>
  );
}

export default CardAttribute;
