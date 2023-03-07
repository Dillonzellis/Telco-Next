import Link from "next/link";

function Button({
  btnText,
  nextLink,
  btnSrc,
}: {
  btnText: string;
  btnSrc: string;
  nextLink?: boolean;
}) {
  // add conditional logic for internal client-side routing using Link
  return (
    <div className="rounded-lg bg-brandingGreen-400 px-2 py-2 text-lg font-bold capitalize text-white shadow-md">
      {nextLink ? (
        <a href={btnSrc}>{btnText}</a>
      ) : (
        <Link href={btnSrc}>{btnText}</Link>
      )}
    </div>
  );
}

export default Button;
