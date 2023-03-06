function NavItem({ itemName }: { itemName: string }) {
  return (
    <>
      <li className="text-lg font-bold text-brandingBlue-400">
        {itemName}
      </li>
    </>
  );
}

export default NavItem;
