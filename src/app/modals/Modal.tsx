import React from "react";
import CancelBtn from "./CancelBtn";
import ModalBtn from "./ModalBtn";

function Modal({
  modalName,
  modalNum,
  btnLink,
}: {
  modalName: string;
  modalNum: string;
  btnLink: string;
}) {
  return (
    <div className={`${modalName} max-w-[662px]`}>
      <div className="px-3 py-4 md:px-12 md:py-10">
        <div className="pb-4 text-xl font-bold">Important Message</div>
        <p>
          {`By accessing the noted link you will be leaving Telco Plus Credit
            Union's website and entering a website hosted by another party. Telco
            Plus Credit Union has not approved this as a reliable partner site.
            Please be advised that you will no longer be subject to, or under the
            protection of, the privacy and security policies of Telco Plus Credit
            Union's website. We encourage you to read and evaluate the privacy and
            security policies of the site you are entering, which may be different
            than those of Telco Plus Credit Union.`}
        </p>
      </div>
      <div className="bg-auxBlue-100">
        <div className="flex cursor-pointer flex-col gap-y-2 gap-x-4 px-12 py-6 md:flex-row">
          <CancelBtn modalNum={modalNum} />
          <ModalBtn btnLink={btnLink} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
