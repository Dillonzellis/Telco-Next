import Link from "next/link";

function NavItem({
  itemName,
  linkHref,
  className,
}: {
  itemName: string;
  linkHref: string;
  className?: string;
}) {
  return (
    <>
      <li className={`text-lg font-bold ${className}`}>
        <Link href={linkHref}>{itemName}</Link>
      </li>
    </>
  );
}

export default NavItem;
