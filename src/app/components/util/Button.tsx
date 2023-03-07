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
    <div className="max-w-fit rounded-xl bg-brandingGreen-400 px-3 py-2 text-center text-lg font-bold capitalize text-white shadow-md">
      {nextLink ? (
        <a href={btnSrc}>{btnText}</a>
      ) : (
        <Link href={btnSrc}>{btnText}</Link>
      )}
    </div>
  );
}

export default Button;
