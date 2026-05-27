import { ReactNode, useEffect } from "react";

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white text-black rounded-md shadow-lg w-full max-w-sm mx-4 font-sans"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2">
          <h2 className="text-sm font-bold">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-gray-500 hover:text-gray-700 hover:cursor-pointer text-lg leading-none"
          >
            ×
          </button>
        </div>
        <div className="p-4 text-sm">{children}</div>
      </div>
    </div>
  );
};
