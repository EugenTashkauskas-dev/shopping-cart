import classnames from "classnames";

import type { ModalProps } from "../model/Modal.types";
import { useEffect } from "react";

export const Modal = ({ title, show, children, onClose }: ModalProps) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [show]);

  return (
    <div
      id="modalOverlay"
      className={classnames(
        "fixed inset-0 bg-black/50 items-center justify-center z-50",
        {
          hidden: !show,
        },
      )}
    >
      <div className="bg-white p-6 rounded shadow-lg w-full xl:w-9/10 mx-auto max-h-full">
        <div className="flex justify-between items-start mb-4 max-h-full flex-1">
          <h2 className="text-2xl leading-8 font-semibold mb-12 text-slate-700 text-center">
            {title}
          </h2>
          <button
            className="text-gray-500 hover:text-gray-700 cursor-pointer w-6 h-6"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
