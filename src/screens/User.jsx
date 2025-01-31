import React, { useEffect, useState } from "react";
import UserTable from "../components/UserTable"; 
import axios from "axios";
import { Bounce, toast } from "react-toastify"; 

const User = () => {
  const [data, setData] = useState([]); 
  const [error, setError] = useState(""); 
  const [isOpen, setIsOpen] = useState(false);

  // Function to fetch user data from the API
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data); 
    } catch (error) {
      console.log(setError(error.message));
      toast.error("Something Went Wrong", {
        // Show toast error on failure
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  // Function to delete a user by ID
  const deleteUser = async (id) => {
    try {
      await axios.delete("https://jsonplaceholder.typicode.com/users/" + id); 
      setData((prevData) => prevData.filter((item) => item.id !== id)); 
      toast.success("User deleted successfully", {
        // Show success toast
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.log(error); 
      toast.error("Error deleting user", {
        // Show error toast on failure
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  // Function to add a new user
  const addUser = async (newUser) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        newUser,
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );
      setData((prevData) => [
        
        ...prevData,
        {
          ...response.data,
          name: response.data.firstName + " " + response.data.lastName,
        },
      ]);
      toast.success("User added successfully", {
        // Show success toast
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("Error adding user", {
        // Show error toast on failure
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  // Function to edit an existing user
  const editUser = async (updatedUser) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${updatedUser.id}`,
        updatedUser,
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8", 
          },
        }
      );
      setData(
        (
          prevData
        ) =>
          prevData.map((user) =>
            user.id === updatedUser.id
              ? {
                  ...response.data,
                  name: response.data.firstName + " " + response.data.lastName,
                }
              : user
          )
      );
      toast.success("User Edited Successfully", {
        // Show success toast
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.error("Error editing user:", error);
      toast.error("Error editing user", {
        // Show error toast on failure
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  // Fetch user data when component mounts
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <UserTable
        data={data} 
        setIsOpen={setIsOpen}
        deleteUser={deleteUser}
        addUser={addUser}
        editUser={editUser}
      />
    </div>
  );
};

export default User;
