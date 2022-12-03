import "./App.css";
import AppHeader from "./components/AppHeader";
import UserPrompts from "./components/UserPrompts";
import { ExerciseData } from "./ExerciseData";

function App(): JSX.Element {
  return (
    <>
      <AppHeader />
      <UserPrompts />
    </>
  );
}

export default App;
