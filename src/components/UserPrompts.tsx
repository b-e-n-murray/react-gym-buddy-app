import axios from "axios";
import { useState } from "react";
import filterExercises from "../utils/filter-exercises";
import { MergedExercises } from "../utils/interfaces";

const url =
  process.env.NODE_ENV === "production"
    ? "https://b-e-n-murray-gym-buddy-app.onrender.com"
    : "http://localhost:4000";

function UserPrompts(): JSX.Element {
  const [targetMuscles, setTargetMuscles] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<string>("Easy");
  const [goal, setGoal] = useState<string>("Muscle-building");
  const [equips, setEquips] = useState<string[]>([]);
  const [workout, setWorkout] = useState<MergedExercises[]>([]);

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
    if (equips.length === 0) {
      setEquips(["None"]);
    }
    console.log("fetching exercises that match your input: ", targetMuscles);
    const fetchedExercisesData = await axios.get(
      `${url}/exercises/${targetMuscles}`
    );
    console.log("fetched: ", fetchedExercisesData);
    const exerciseArr = fetchedExercisesData.data;
    if (filterExercises(equips, goal, exerciseArr).length === 0) {
      alert(
        "No exercises matched your inputs. Please modify your selections and try again."
      );
    }
    setWorkout(filterExercises(equips, goal, exerciseArr));
  }
  function handleGenerateNewWorkout() {
    setWorkout([])
  }

  return (
    <>
      <div className="generator-page-ctn">
        {workout.length === 0 &&
          <div className="inputs-and-summary">
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
            </div>
            <div className="summary-and-btn-ctn">
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
              <button
                className="generateButton"
                onClick={handleGenerateWorkout}
              >
                Generate Workout
              </button>
            </div>
          </div>}

        {workout.length > 0 &&
          <div className="post-gen-page">
            <h2>Your Workout</h2>
            <button onClick={handleGenerateNewWorkout} className="generateButton">Generate New Workout</button>
            <ul className="workout">
              {workout.map((exercise) => (
                <>
                  <div key={exercise.id}>
                    <h4>Exercise {workout.indexOf(exercise) + 1}</h4>
                    Name: {exercise.exercise_name} <br />
                    Target(s):{" "}
                    {typeof exercise.targeted_muscle === "string"
                      ? exercise.targeted_muscle
                      : exercise.targeted_muscle.join(", ")}{" "}
                    <br />
                    Exercise Difficulty: {exercise.difficulty} <br />
                    Requirements: {exercise.requirements} <br />
                    Specialty: {exercise.specialty} <br />
                    <br />
                  </div>
                </>
              ))}
            </ul>
          </div>
        }
      </div>
    </>
  );
}
export default UserPrompts;
