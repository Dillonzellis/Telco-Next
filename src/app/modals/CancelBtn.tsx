import React from "react";

function CancelBtn({ modalNum }: { modalNum: string }) {
  return (
    <div>
      <div
        className={`wow-modal-close-${modalNum} block rounded-md  border-2  border-brandingBlue-400 bg-white px-12 py-2 text-center font-bold text-brandingBlue-400`}
      >
        Cancel
      </div>
    </div>
  );
}

export default CancelBtn;
