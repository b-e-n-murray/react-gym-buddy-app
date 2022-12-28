import axios from "axios";
import { useState } from "react";

interface Exercise {
  id: number,
  exercise_name: string,
  targets: string | string[],
  difficulty: "Easy" | "Intermediate" | "Hard",
  image: string,
  requirements: "Machine" | "Free-weights" | "None",
  specialty: "Strength" | "Muscle-building" | "Varied"
}
function UserPrompts(): JSX.Element {
  const [targetMuscles, setTargetMuscles] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<string>("");
  const [workout, setWorkout] = useState<Exercise[]>([])

  console.log('Currently selected muscles: ', targetMuscles);

  async function handleGenerateWorkout() {
    console.log('fetching exercises that match your input: ', targetMuscles)
    const fetchedExercisesData = await axios.get(`http://localhost:4000/${targetMuscles}`)
    console.log('fetched: ', fetchedExercisesData)
    const exerciseArr = fetchedExercisesData.data
    console.log('array of exercises: ', fetchedExercisesData.data)
    return (
        setWorkout(exerciseArr.map((exercise: Exercise) => {return exercise}))        
      )
    }

return (
  <>
    <div className="allInputs">
      <p>What body part(s) do you want to train? (3 Maximum)</p>
      <div className="selectMuscles">
        <input
          className="muscleCheckboxes"
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
          className="muscleCheckboxes"
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
          className="muscleCheckboxes"
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
          className="muscleCheckboxes"
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
          className="muscleCheckboxes"
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
          className="muscleCheckboxes"
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
          className="muscleCheckboxes"
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
      </div>
      <p>Choose a focus for the workout:</p>
      <select className="formDropdown">
        <option
          {...targetMuscles.map((targetMuscle) => {
            return { targetMuscle };
          })}
        >
          None
        </option>
      </select >
      <p>Select desired difficulty for your workout:</p>
      <select
        className="formDropdown"
        onChange={(e) => setDifficulty(difficulty)}>
        <option>Easy</option>
        <option>Intermediate</option>
        <option>Hard</option>
      </select>
      <p>What are your goals for the workout?</p>
      <select className="formDropdown">
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
          else return false
        })}
        workout
      </span>
      <br /> <br />
      <button
        className="generateButton"
        onClick={handleGenerateWorkout}>Generate Workout</button>
        <ul>
          {workout.map(exercise => (
            <><div key={exercise.id}>
            Name: {exercise.exercise_name}
            <img src={exercise.image} alt={exercise.exercise_name}></img>
            Targets: {exercise.targets} 
            Difficulty: {exercise.difficulty} 
            Requirements: {exercise.requirements} 
            Specialty: {exercise.specialty}
            </div> 
            </>
          ))}
        </ul>
    </div>
  </>
);
}
export default UserPrompts;