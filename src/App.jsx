import React from "react";
import Header from "./components/Header";
import User from "./screens/User";
import { Bounce, ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Header />
      <main>
        <User />
      </main>
    </div>
  );
};

export default App;
