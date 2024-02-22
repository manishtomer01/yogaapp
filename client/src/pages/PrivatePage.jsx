import React from "react";
import { useSelector } from "react-redux";
import Explore from "./Explore";
import Login from "./Login";

export default function PrivatePage() {
  const { currentUser } = useSelector((state) => state.user);
  if (currentUser) {
    return <Explore />;
  } else {
    return <Login />;
  }
}
