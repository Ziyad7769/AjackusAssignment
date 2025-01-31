import React from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const DeleteModal = ({ isOpen, setIsOpen, onClick }) => {
  const close = () => {
    setIsOpen(false);
  };

  const onClickHandler = () => {
    onClick();
    close();
  };

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={close}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center p-4">
        <DialogPanel
          transition
          className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg"
        >
          <DialogTitle as="h3" className="text-lg font-semibold text-gray-900">
            Delete User
          </DialogTitle>
          <div className="mt-2 text-sm text-gray-700">
            Are you sure you want to delete this user
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              onClick={onClickHandler}
            >
              Delete
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
              onClick={close}
            >
              Cancel
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default DeleteModal;
