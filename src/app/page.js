"use client";

import LoginPage from "./components/HomePage/LoginPage";
import SignUpPage from "./components/HomePage/SignUpPage";
import { AuthContext } from "./context/checkAuthenticate";
import { useContext } from "react";

export default function Home() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  return isAuthenticated === 0 ? <LoginPage /> : <SignUpPage />;
}
