import React, { useState, useEffect } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

// Function to extract first and last names from a full name string
function extractFirstAndLastName(fullName) {
  const parts = fullName.trim().split(" "); 

  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" };
  }

  return {
    firstName: parts[0], 
    lastName: parts[parts.length - 1], 
  };
}

const UserModal = ({ isOpen, setIsOpen, onSubmit, currentUser }) => {
  // Local state to manage the form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
  });

  // Effect to populate form when currentUser is available or reset the form
  useEffect(() => {
    if (currentUser) {
      setFormData({
        id: currentUser.id,
        firstName: extractFirstAndLastName(currentUser.name).firstName || "",
        lastName: extractFirstAndLastName(currentUser.name).lastName || "",
        email: currentUser.email || "",
        website: currentUser.website || "",
      });
    } else {
      setFormData({ firstName: "", lastName: "", email: "", website: "" });
    }
  }, [currentUser]);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = () => {
    onSubmit(formData); 
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={() => setIsOpen(false)} 
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
          <DialogTitle as="h3" className="text-lg font-semibold text-gray-900">
            {currentUser ? "Edit User" : "Add User"}{" "}
            {/* Change title based on whether it's edit or add */}
          </DialogTitle>

          {/* Form Fields for user details */}
          <div className="mt-4 space-y-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange} 
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="website"
              placeholder="Website"
              value={formData.website}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Action Buttons for submission or cancellation */}
          <div className="mt-4 flex justify-end space-x-2">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              onClick={handleSubmit}
            >
              {currentUser ? "Update" : "Add"}{" "}
              {/* Button text changes based on action */}
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => setIsOpen(false)} // Close the modal on cancel
            >
              Cancel
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default UserModal;
