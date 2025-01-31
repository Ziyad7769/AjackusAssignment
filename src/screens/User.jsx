import React, { useEffect, useState } from "react";
import UserTable from "../components/UserTable";
import axios from "axios";
import CustomModal from "../components/CustomModal";

const User = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
    } catch (error) {
      console.log(setError(error.message));
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(
        "https://jsonplaceholder.typicode.com/users/" + id
      );
      setData(() => data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const EditUser = () => {
    
  }

  const AddUser = () => {

  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <UserTable data={data} setIsOpen={setIsOpen} deleteUser={deleteUser}/>
    </div>
  );
};

export default User;
