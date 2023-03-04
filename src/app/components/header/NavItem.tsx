function NavItem({ itemName }: { itemName: string }) {
  return (
    <>
      <li className="font-sans text-brandingBlue-400">{itemName}</li>
    </>
  );
}

export default NavItem;
