import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignOut from "./pages/SignOut";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Headers from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
    <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signOut" element={<SignOut />} />
      </Routes>
    </BrowserRouter>
  );
}
