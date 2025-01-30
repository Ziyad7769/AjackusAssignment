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
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <UserTable data={data} setIsOpen={setIsOpen} />
    </div>
  );
};

export default User;
