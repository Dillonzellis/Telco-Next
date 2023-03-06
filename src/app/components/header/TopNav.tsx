import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";

function TopNav() {
  return (
    <div className="flex items-center justify-end space-x-2">
      <div className="text-sm font-bold text-brandingBlue-400">
        Routing Number: 311985791
      </div>
      <div className="text-sm font-bold text-brandingBlue-400">
        (903) 753-5588
      </div>
      <MagnifyingGlassCircleIcon className="h-7 w-7 text-brandingBlue-400" />
    </div>
  );
}

export default TopNav;
