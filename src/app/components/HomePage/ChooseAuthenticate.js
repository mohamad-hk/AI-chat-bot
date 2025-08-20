"use client";
import { AuthContext } from "../../context/checkAuthenticate";
import { useContext } from "react";

const AnotherWay = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const Change_level = () => {
    if (isAuthenticated == 0) {
      setIsAuthenticated((prev) => 1);
    } else {
      setIsAuthenticated((prev) => 0);
    }
  };

  return (
    <button className=" text-blue-500 text-[10px] cursor-pointer w-full text-left" onClick={Change_level}>
       {isAuthenticated ? "Do you have an acoount? Login" : "Don't you have an acccount? sign up"}
    </button>
  );
};
export default AnotherWay;
