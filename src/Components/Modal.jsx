import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-6 rounded-lg z-10 w-full lg:w-[900px] mx-auto overflow-scroll">
            <div className="flex justify-end">
              <button
                className="text-gray-700 hover:text-red-500 focus:outline-none"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
