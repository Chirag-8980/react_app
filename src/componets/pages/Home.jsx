import React, { useContext } from "react";
import { AuthContext } from "../../context/CreateContext";

const Home = () => {
  const {name} = useContext(AuthContext);
  console.log("name--->" , name);
  return <div>Home</div>;
};

export default Home;
