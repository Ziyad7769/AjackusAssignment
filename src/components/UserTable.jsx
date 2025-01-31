import React, { useState } from "react";
import DeleteModal from "./DeleteModal"; 
import UserModal from "./UserModal"; 

// Function to extract first and last name from full name
function extractFirstAndLastName(fullName) {
  const parts = fullName.trim().split(" ");

  // If there's only one part, return it as the first name and an empty last name
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" };
  }

  // Return first and last name when both are available
  return {
    firstName: parts[0],
    lastName: parts[parts.length - 1],
  };
}

const UserTable = ({ data, deleteUser, addUser, editUser }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [userId, setUserId] = useState(""); 
  const [userModalOpen, setUserModalOpen] = useState(false); 
  const [currentUser, setCurrentUser] = useState(null);

  // Function to open delete modal with selected user ID
  const handleDelete = (id) => {
    setDeleteModalOpen(true);
    setUserId(id); 
  };

  // Function to open edit modal with selected user data
  const handleEdit = (user) => {
    setCurrentUser(user);
    setUserModalOpen(true); 
  };

  // Function to open add user modal
  const handleAdd = () => {
    setCurrentUser(null);
    setUserModalOpen(true); 
  };

  return (
    <>
      {/* Delete Modal component */}
      <DeleteModal
        isOpen={deleteModalOpen}
        setIsOpen={setDeleteModalOpen}
        onClick={() => deleteUser(userId)} 
      />
      {/* User Modal component for adding or editing user */}
      <UserModal
        isOpen={userModalOpen}
        setIsOpen={setUserModalOpen}
        onSubmit={(userData) => {
          if (currentUser) {
            editUser(userData); 
          } else {
            addUser(userData); 
          }
        }}
        currentUser={currentUser} 
      />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Users
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name,
              title, email, and role.
            </p>
          </div>
          {/* Button to add new user */}
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              onClick={handleAdd} 
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Add User
            </button>
          </div>
        </div>
        <div className="-mx-4 mt-8 sm:-mx-0">
          {/* Table to display user data */}
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                  ID
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  First Name
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Last Name
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Email
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Website
                </th>
                <th className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {/* Loop through each user and display their data */}
              {data.map((person) => (
                <tr key={person.id}>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                    {person.id}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    {extractFirstAndLastName(person.name).firstName}{" "}
             
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    {extractFirstAndLastName(person.name).lastName}{" "}
                  
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    {person.email} 
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    {person.website}
                  </td>
                  <td className="py-4 pl-3 pr-4 text-right text-sm font-medium">
                    {/* Action buttons to edit or delete user */}
                    <button
                      className="text-indigo-600 hover:text-indigo-900 mr-2"
                      onClick={() => handleEdit(person)} 
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDelete(person.id)} 
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserTable;
