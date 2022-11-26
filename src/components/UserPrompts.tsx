// import { useState } from "react";
import { useState } from "react";
import { ExerciseDataProps } from "../ExerciseData";

interface ExerciseDataListProps {
  listOfExercises: ExerciseDataProps[];
}

function UserPrompts(props: ExerciseDataListProps): JSX.Element {
  const [targetMuscles, setTargetMuscles] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<string>("");

  console.log(targetMuscles);
  function handleData(submitData: any) {
    submitData.preventDefault();
  }
  return (
    <>
      <p>What body part(s) do you want to train? (3 Maximum)</p>
      <form onSubmit={handleData}>
        <input
          type="checkbox"
          onChange={(e) => setTargetMuscles([...targetMuscles, "Chest"])}
        />
        <span>Chest</span>
        <input
          type="checkbox"
          onChange={(e) => setTargetMuscles([...targetMuscles, "Back"])}
        />
        <span>Back</span>
        <input
          type="checkbox"
          onChange={(e) => setTargetMuscles([...targetMuscles, "Triceps"])}
        />
        <span>Triceps</span>
        <input
          type="checkbox"
          onChange={(e) => setTargetMuscles([...targetMuscles, "Quads"])}
        />
        <span>Quads</span>
        <input
          type="checkbox"
          onChange={(e) => setTargetMuscles([...targetMuscles, "Hamstrings"])}
        />
        <span>Hamstrings</span>
        <input
          type="checkbox"
          onChange={(e) => setTargetMuscles([...targetMuscles, "Glutes"])}
        />
        <span>Glutes</span>
        <input
          type="checkbox"
          onChange={(e) => setTargetMuscles([...targetMuscles, "Core"])}
        />
        <span>Core</span>
        <p>Choose a focus for the workout:</p>
        <select>
          <option
            {...targetMuscles.map((targetMuscle) => {
              return { targetMuscle };
            })}
          >
            None
          </option>
        </select>
        <p>Select desired difficulty for your workout:</p>
        <select onChange={(e) => setDifficulty(difficulty)}>
          <option>Easy</option>
          <option>Intermediate</option>
          <option>Hard</option>
        </select>
        <p>What are your goals for the workout?</p>
        <select>
          <option>Build Muscle</option>
          <option>Get Stronger</option>
          <option>Varied</option>
        </select>
        <br /> <br />
        <br /> <br />
        <span>
          You have selected a {difficulty}
          {targetMuscles}
          workout
        </span>
        <br /> <br />
        <button type="submit">Generate Workout</button>
      </form>
    </>
  );
}

export default UserPrompts;
