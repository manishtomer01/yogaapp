import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { Explore, Home, Login, SignUp } from "./pages";
import PrivatePage from "./pages/PrivatePage";
import { Footer } from "./utils";

export default function App() {
  return (
    <div className="px-14 flex flex-col gap-10 bg-cyan-200">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<PrivatePage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}
