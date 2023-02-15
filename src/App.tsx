import "./App.css";
import AppHeader from "./components/AppHeader";
import UserPrompts from "./components/UserPrompts";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App(): JSX.Element {
  return (
    <>
      <AppHeader />
      <NavBar />
      <Routes>
        <Route path="/generator" element={<UserPrompts />} />
      </Routes>
    </>
  );
}

export default App;
