// Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Login or Sign In</h2>
        <form className="space-y-4">
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
          <button
            type="button"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
