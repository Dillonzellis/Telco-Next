import React from "react";

function ModalBtn({
  btnText,
  className,
}: {
  btnText: string;
  className?: string;
}) {
  return (
    <div>
      <a
        href="#"
        className={`${className} block rounded-md border-2 border-brandingBlue-400 px-12 py-2 font-bold`}
      >
        {btnText}
      </a>
    </div>
  );
}

export default ModalBtn;
