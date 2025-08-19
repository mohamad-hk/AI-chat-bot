"use client";
import { Button } from "../ui/button";
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
    <Button className=" mt-4 cursor-pointer bg-none" onClick={Change_level}>
      or {isAuthenticated ? "login" : "sign up"}
    </Button>
  );
};
export default AnotherWay;
