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
          onChange={(e) => {
            if (targetMuscles.includes("Chest")) {
              setTargetMuscles(
                targetMuscles.filter((targetMuscle) => {
                  return targetMuscle !== "Chest";
                })
              );
            }
            if (!targetMuscles.includes("Chest") && targetMuscles.length < 3) {
              setTargetMuscles([...targetMuscles, "Chest"]);
            }
          }}
        />
        <span>Chest</span>
        <input
          type="checkbox"
          onChange={(e) => {
            if (targetMuscles.includes("Back")) {
              setTargetMuscles(
                targetMuscles.filter((targetMuscle) => {
                  return targetMuscle !== "Back";
                })
              );
            }
            if (!targetMuscles.includes("Back") && targetMuscles.length < 3) {
              setTargetMuscles([...targetMuscles, "Back"]);
            }
          }}
        />
        <span>Back</span>
        <input
          type="checkbox"
          onChange={(e) => {
            if (targetMuscles.includes("Triceps")) {
              setTargetMuscles(
                targetMuscles.filter((targetMuscle) => {
                  return targetMuscle !== "Triceps";
                })
              );
            }
            if (
              !targetMuscles.includes("Triceps") &&
              targetMuscles.length < 3
            ) {
              setTargetMuscles([...targetMuscles, "Triceps"]);
            }
          }}
        />
        <span>Triceps</span>
        <input
          type="checkbox"
          onChange={(e) => {
            if (targetMuscles.includes("Quads")) {
              setTargetMuscles(
                targetMuscles.filter((targetMuscle) => {
                  return targetMuscle !== "Quads";
                })
              );
            }
            if (!targetMuscles.includes("Quads") && targetMuscles.length < 3) {
              setTargetMuscles([...targetMuscles, "Quads"]);
            }
          }}
        />
        <span>Quads</span>
        <input
          type="checkbox"
          onChange={(e) => {
            if (targetMuscles.includes("Hamstrings")) {
              setTargetMuscles(
                targetMuscles.filter((targetMuscle) => {
                  return targetMuscle !== "Hamstrings";
                })
              );
            }
            if (
              !targetMuscles.includes("Hamstrings") &&
              targetMuscles.length < 3
            ) {
              setTargetMuscles([...targetMuscles, "Hamstrings"]);
            }
          }}
        />
        <span>Hamstrings</span>
        <input
          type="checkbox"
          onChange={(e) => {
            if (targetMuscles.includes("Glutes")) {
              setTargetMuscles(
                targetMuscles.filter((targetMuscle) => {
                  return targetMuscle !== "Glutes";
                })
              );
            }
            if (!targetMuscles.includes("Glutes") && targetMuscles.length < 3) {
              setTargetMuscles([...targetMuscles, "Glutes"]);
            }
          }}
        />
        <span>Glutes</span>
        <input
          type="checkbox"
          onChange={(e) => {
            if (targetMuscles.includes("Core")) {
              setTargetMuscles(
                targetMuscles.filter((targetMuscle) => {
                  return targetMuscle !== "Core";
                })
              );
            }
            if (!targetMuscles.includes("Core") && targetMuscles.length < 3) {
              setTargetMuscles([...targetMuscles, "Core"]);
            }
          }}
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
          {targetMuscles.map((targetMuscle) => {
            if (targetMuscle === targetMuscles[0]) {
              return `${targetMuscle} `
            }
            if (targetMuscle === targetMuscles[1]) {
              return `, ${targetMuscle} `
            }
            if (targetMuscle === targetMuscles[2]) {
              return `and ${targetMuscle} `
            }
          })}
          workout
        </span>
        <br /> <br />
        <button type="submit">Generate Workout</button>
      </form>
    </>
  );
}

export default UserPrompts;

//onClick={setDifficulty("Easy")}
