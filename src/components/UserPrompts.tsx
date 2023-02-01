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
  const [equips, setEquips] = useState<string[]>([]);
  const [workout, setWorkout] = useState<Exercise[]>([]);

  console.log("Currently selected muscles: ", targetMuscles);
  console.log("Currently selected difficulty: ", difficulty);
  console.log("Currently selected goal: ", goal);
  console.log("Currently selected equips: ", equips);

  const muscleGroups = [
    "Chest",
    "Back",
    "Triceps",
    "Quads",
    "Hamstrings",
    "Glutes",
    "Core",
  ];
  const equipOptions = ["Machines", "Free-weights"];

  async function handleGenerateWorkout() {
    setWorkout([])
    if(equips.length === 0) {
      setEquips(["None"])
    }
    console.log("fetching exercises that match your input: ", targetMuscles);
    const fetchedExercisesData = await axios.get(
      `${url}/exercises/${targetMuscles}/${difficulty}/${goal}/${equips}`); 
    console.log("fetched: ", fetchedExercisesData);
    const exerciseArr = fetchedExercisesData.data;
    if(exerciseArr.length === 0) {
      alert("No exercises matched your inputs. Please modify your selections and try again.")
    }
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
        <div className="single-input">
        <p>What body part(s) do you want to train? (3 Maximum)</p>
        <hr />
          {targetMuscles.length < 3
            ? muscleGroups.map((muscle) => {
                return (
                  <div key={muscle} className="allMusclesCheckboxes">
                    <input
                      className="inputCheckbox"
                      type="checkbox"
                      onChange={() => {
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
                      className="inputCheckbox"
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
              </div>
              <div className="single-input">
          <p>Select desired difficulty for your workout:</p>
          <hr />
          <select
            className="formDropdown"
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option>Easy</option>
            <option>Intermediate</option>
            <option>Hard</option>
          </select>
          </div>
          <div className="single-input">
          <p>What are your goals for the workout?</p>
          <hr />
          <select
            className="formDropdown"
            onChange={(e) => setGoal(e.target.value)}
          >
            <option>Muscle-building</option>
            <option>Strength</option>
            <option>Varied</option>
          </select>
          </div>
          <div className="single-input">
          <p>
            Select any/all equipment you want to use/have access to (default
            will be 'none')
          </p>
          <hr />
          <div>
            {equipOptions.map((option) => {
              return (
                <>
                  <input
                    key={option}
                    className="inputCheckbox"
                    type="checkbox"
                    onChange={() => {
                      if (equips.includes(option)) {
                        setEquips(
                          equips.filter((equip) => {
                            return equip !== option;
                          })
                        );
                      }
                      if (!equips.includes(option) && equips.length < 3) {
                        setEquips([...equips, option]);
                      }
                    }}
                  />
                  <span>{option}</span>
                </>
              );
            })}
          </div>
          </div>
          <br /> <br />
          <div className="workout-summary">
          Your workout:
          <br /> <br />
          Targets:
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
          <br />
          Difficulty: {difficulty}
          <br />
          Focus: {goal}
          <br />
          Equipment: {equips.join(", ")}
          </div>
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
                    {/* <img
                      src={exercise.image}
                      alt={exercise.exercise_name}
                    ></img> */}
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
    </>
  );
}
export default UserPrompts;
