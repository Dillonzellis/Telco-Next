import React from "react";
import ModalBtn from "./ModalBtn";

function Modal() {
  return (
    <div className="w-[662px] border-2 ">
      <div className="px-12 py-10">
        <div className="pb-4 text-xl font-bold">Important Message</div>
        <p>
          {`By accessing the noted link you will be leaving Telco Plus Credit
            Union's website and entering a website hosted by another party. Telco
            Plus Credit Union has not approved this as a reliable partner site.
            Please be advised that you will no longer be subject to, or under the
            protection of, the privacy and security policies of Telco Plus Credit
            Union's website. We encourage you to read and evaluate the privacy and
            security policies of the site you are entering, which may be different
            than those of Telco Plus Credit Union.1`}
        </p>
      </div>
      <div className=" bg-auxBlue-100 ">
        <div className="flex gap-x-4 px-12 py-6">
          <ModalBtn
            btnText="Cancel"
            className="border-2 border-brandingBlue-400 bg-white text-brandingBlue-400"
          />
          <ModalBtn
            btnText="Continue"
            className="bg-brandingBlue-400 text-white
          "
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
