import axios from "axios";
import { useState } from "react";

const url =
  process.env.NODE_ENV === "production"
    ? "https://b-e-n-murray-gym-buddy-app.onrender.com"
    : "http://localhost:4000";

interface Exercise {
  id: number;
  exercise_name: string;
  targets: string[];
  difficulty: "Easy" | "Intermediate" | "Hard";
  image: string;
  requirements: "Machine" | "Free-weights" | "None";
  specialty: "Strength" | "Muscle-building" | "Varied";
}
function UserPrompts(): JSX.Element {
  const [targetMuscles, setTargetMuscles] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<string>("Easy");
  const [goal, setGoal] = useState<string>("Muscle-building");
  const [workout, setWorkout] = useState<Exercise[]>([]);

  console.log("Currently selected muscles: ", targetMuscles);
  console.log("Currently selected difficulty: ", difficulty);
  console.log("Currently selected goal: ", goal);

  const muscleGroups = [
    "Chest",
    "Back",
    "Triceps",
    "Quads",
    "Hamstrings",
    "Glutes",
    "Core",
  ];

  async function handleGenerateWorkout() {
    console.log("fetching exercises that match your input: ", targetMuscles);
    const fetchedExercisesData = await axios.get(`${url}/${targetMuscles}`); // need to change endpoint
    console.log("fetched: ", fetchedExercisesData);
    const exerciseArr = fetchedExercisesData.data;
    console.log("array of exercises: ", fetchedExercisesData.data);
    return setWorkout(
      exerciseArr.map((exercise: Exercise) => {
        return exercise;
      })
    );
  }

  return (
    <>
      <div className="allInputs">
        <p>What body part(s) do you want to train? (3 Maximum)</p>
        <div className="selectMuscles">
          {targetMuscles.length < 3
            ? muscleGroups.map((muscle) => {
                return (
                  <div key={muscle}>
                    <input
                      className="muscleCheckboxes"
                      type="checkbox"
                      onChange={(e) => {
                        if (targetMuscles.includes(muscle)) {
                          setTargetMuscles(
                            targetMuscles.filter((targetMuscle) => {
                              return targetMuscle !== muscle;
                            })
                          );
                        }
                        if (
                          !targetMuscles.includes(muscle) &&
                          targetMuscles.length < 3
                        ) {
                          setTargetMuscles([...targetMuscles, muscle]);
                        }
                      }}
                    />
                    <span>{muscle}</span>
                  </div>
                );
              })
            : targetMuscles.map((muscle) => {
                return (
                  <div key={muscle}>
                    <input
                      className="muscleCheckboxes"
                      type="checkbox"
                      onChange={(e) => {
                        if (targetMuscles.includes(muscle)) {
                          setTargetMuscles(
                            targetMuscles.filter((targetMuscle) => {
                              return targetMuscle !== muscle;
                            })
                          );
                        }
                        if (
                          !targetMuscles.includes(muscle) &&
                          targetMuscles.length < 3
                        ) {
                          setTargetMuscles([...targetMuscles, muscle]);
                        }
                      }}
                    />
                    <span>{muscle}</span>
                  </div>
                );
              })}
          <p>Select desired difficulty for your workout:</p>
          <select
            className="formDropdown"
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option>Easy</option>
            <option>Intermediate</option>
            <option>Hard</option>
          </select>
          <p>What are your goals for the workout?</p>
          <select
            className="formDropdown"
            onChange={(e) => setGoal(e.target.value)}
          >
            <option>Muscle-building</option>
            <option>Strength</option>
            <option>Varied</option>
          </select>
          <p>Select any/all equipment you want to use/have access to</p>
          <div>
            <input className="muscleCheckboxes" type="checkbox" />
            <span>None</span>
            <input className="muscleCheckboxes" type="checkbox" />
            <span>Machines</span>
            <input className="muscleCheckboxes" type="checkbox" />
            <span>Free-weights</span>
          </div>
          <br /> <br />
          <span>
            You have selected a {difficulty}
            {targetMuscles.map((targetMuscle) => {
              if (targetMuscle === targetMuscles[0]) {
                return ` ${targetMuscle} `;
              }
              if (targetMuscle === targetMuscles[1]) {
                return `, ${targetMuscle} `;
              }
              if (targetMuscle === targetMuscles[2]) {
                return `and ${targetMuscle} `;
              } else return false;
            })}
            workout
          </span>
          <br /> <br />
          <button className="generateButton" onClick={handleGenerateWorkout}>
            Generate Workout
          </button>
          <ul className="workout">
            {workout.map((exercise) => (
              <>
                <div key={exercise.id}>
                  Name: {exercise.exercise_name}{" "}
                  <span>
                    <img
                      src={exercise.image}
                      alt={exercise.exercise_name}
                    ></img>
                  </span>
                  <br />
                  Targets: {exercise.targets.join(", ")} <br />
                  Difficulty: {exercise.difficulty} <br />
                  Requirements: {exercise.requirements} <br />
                  Specialty: {exercise.specialty} <br />
                  <br />
                </div>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default UserPrompts;
