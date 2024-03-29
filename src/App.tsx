import "./App.css";
// import AppHeader from "./components/AppHeader";
import UserPrompts from "./components/UserPrompts";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Stopwatch from "./components/Stopwatch";
import SetTracker from "./components/SetTracker";

function App(): JSX.Element {
  return (
    <>
      {/* <AppHeader /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<UserPrompts />} />
      </Routes>
      <Routes>
        <Route path="/generator" element={<UserPrompts />} />
      </Routes>
      <Routes>
        <Route path="/stopwatch" element={<Stopwatch />} />
      </Routes>
      <Routes>
        <Route path="/set-tracker" element={<SetTracker />} />
      </Routes>
    </>
  );
}

export default App;
