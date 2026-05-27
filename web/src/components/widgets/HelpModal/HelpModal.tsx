import { useEffect, useState } from "react";
import { Modal } from "../../core/Modal";

export const HelpModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPinging, setIsPinging] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsPinging(false), 10000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="relative inline-flex w-10 h-10">
        {isPinging && (
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-gray-300 animate-ping"
          />
        )}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Help"
          className="relative w-10 h-10 font-sans rounded-full bg-gray-200 text-gray-700 border-gray-400 border-2 hover:bg-gray-300 hover:cursor-pointer flex items-center justify-center text-sm font-semibold"
        >
          ?
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Help">
        <p className="font-semibold">Available PINs:</p>
        <ul>
          <li>1111 - John Doe - $10.00</li>
          <li>2222 - Jane Smith - $53.21</li>
          <li>3333 - Alice Johnson - $0.00</li>
          <li>4444 - Bob Brown - $9,999.99</li>
          <li>5555 - Charlie Davis - $0.01</li>
        </ul>
        <p className="font-semibold mt-4">About the project:</p>
        <p>
          This is a simple ATM machine that allows you to withdraw and deposit
          money.
        </p>
        <p className="mt-2">
          The project is built with React and Express. The React frontend is
          built with Vite. The Express backend is built with Express. The data
          (funds) is held in memory and is the same for all users. You can reset
          the data to its default values by clicking the reset button.
        </p>
        <p className="mt-2">
          The data is reset every day at 6:00 AM UTC via a cron job.
        </p>
      </Modal>
    </>
  );
};
