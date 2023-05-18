import { useState } from "react";
import { Link } from "react-router-dom";

interface IExercise {
  id: number;
  name: string;
  notes: string;
  sets: Record<string, number>;
  editMode: boolean;
}

function SetTracker(): JSX.Element {
  function createEmptyExercise(): IExercise {
    return {
      id: exerciseList.length + 1,
      name: "",
      notes: "",
      sets: { "1": 0 },
      editMode: true,
    };
  }
  const [exerciseList, setExerciseList] = useState<IExercise[]>([
    {
      id: 1,
      name: "",
      notes: "",
      sets: { "1": 0 },
      editMode: true,
    },
  ]);

  function addNewExercise() {
    setExerciseList([...exerciseList, createEmptyExercise()]);
  }
  function removeExercise(targetExerciseId: number) {
    if (exerciseList.length < 2) {
      alert("You must have at least one exercise");
    } else {
      setExerciseList((prevState) => {
        const updatedExercises = prevState.filter((exercise) => {
          return exercise.id !== targetExerciseId;
        });
        return updatedExercises;
      });
    }
  }

  function toggleEditMode(exerciseId: number): void {
    setExerciseList((prevState) => {
      const updatedExercises = prevState.map((exercise) => {
        if (exercise.id === exerciseId) {
          return {
            ...exercise,
            editMode: !exercise.editMode,
          };
        }
        return exercise;
      });
      return updatedExercises;
    });
  }

  function updateExerciseName(id: number, value: string) {
    setExerciseList((prevState) => {
      const updatedExercises = prevState.map((exercise) => {
        if (exercise.id === id) {
          return {
            ...exercise,
            name: value,
          };
        }
        return exercise;
      });
      return updatedExercises;
    });
  }

  function updateExerciseNotes(id: number, value: string) {
    setExerciseList((prevState) => {
      const updatedExercises = prevState.map((exercise) => {
        if (exercise.id === id) {
          return {
            ...exercise,
            notes: value,
          };
        }
        return exercise;
      });
      return updatedExercises;
    });
  }

  function updateExerciseSet(id: number, setNum: string, value: number) {
    setExerciseList((prevState) => {
      const updatedExercises = prevState.map((exercise) => {
        if (exercise.id === id) {
          return {
            ...exercise,
            sets: findAndUpdateSet(exercise.sets, setNum, value),
          };
        }
        return exercise;
      });
      return updatedExercises;
    });
  }

  function findAndUpdateSet(
    setData: Record<string, number>,
    targetSetNum: string,
    newValue: number
  ): Record<string, number> {
    setData[targetSetNum] = newValue;

    return setData;
  }

  return (
    <>
      <h1 className="font-marker justify-center text-6xl text-center mt-4 mb-3">
        Set/Rep Tracker
      </h1>
      <h4 className="font-ubuntu justify-center text-xl text-center">
        Enter the exercises of your workout below and use the table to record
        your output
        <br />
        Alternatively, import a workout from the
        <Link to={"/generator"} className="underline">
          {" "}
          Workout Generator{" "}
        </Link>
        and the table will be filled for you
      </h4>
      <div className="flex justify-center">
        <div className=" flex justify-center mt-6">
          <table className="border-none place-content-center table-auto">
            <thead>
              <tr className="border-b">
                <th className="border-none"></th>
                <th className="text-2xl w-300">Exercise</th>
                <th className="text-2xl w-200">Reps</th>
                <th className="text-2xl w-400">
                <th className="border-none"></th>
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {exerciseList.map((exercise) => {
                return (
                  <>
                    {exercise.editMode ? (
                      <tr className="border-b" key={exercise.id}>
                        <td>
                          <button
                            className="flex flex-col border border-slate-200 h-50 w-50 mt-10 mr-2 rounded-full text-center text-3xl place-content-center bg-white"
                            onClick={() => toggleEditMode(exercise.id)}
                          >
                            ✔️
                          </button>
                        </td>
                        <td className="border-none p-3">
                          <input
                            placeholder={
                              exercise.name === ""
                                ? "Exercise name..."
                                : exercise.name
                            }
                            value={exercise.name === "" ? "" : exercise.name}
                            maxLength={50}
                            className="w-200 border border-black-200 pl-2 pt-1 pb-1"
                            onChange={(e) =>
                              updateExerciseName(exercise.id, e.target.value)
                            }
                          ></input>
                        </td>
                        <td className="flex justify-center">
                          <table className="table-auto">
                            <thead>
                              <tr>
                                {Object.entries(exercise.sets).map(
                                  ([setNum, reps]) => {
                                    return (
                                      <th
                                        key={setNum}
                                        className="w-90 border-b border-slate-700 text-xl"
                                      >
                                        {`Set ${setNum}`}
                                      </th>
                                    );
                                  }
                                )}
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                {Object.entries(exercise.sets).map(
                                  ([setNum, reps]) => {
                                    return (
                                      <>
                                        <input
                                          className="flex justify-center w-40 border border-slate-400"
                                          maxLength={3}
                                          placeholder={
                                            reps === 0
                                              ? "0"
                                              : JSON.stringify(reps)
                                          }
                                          value={reps === 0 ? "" : reps}
                                          onChange={(e) =>
                                            updateExerciseSet(
                                              exercise.id,
                                              setNum,
                                              Number(e.target.value)
                                            )
                                          }
                                        ></input>
                                      </>
                                    );
                                  }
                                )}
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td className="border-none p-3">
                          <textarea
                            className="border border-black-200 w-200"
                            value={exercise.notes === "" ? "" : exercise.notes}
                            onChange={(e) =>
                              updateExerciseNotes(exercise.id, e.target.value)
                            }
                          ></textarea>
                        </td>
                        <td className="border-none">
                          <button
                            className="font-ubuntu bg-race-blue border border-obsidian mt-1 rounded-full p-3"
                            onClick={() => removeExercise(exercise.id)}
                          >
                            - Remove exercise
                          </button>
                        </td>
                      </tr>
                    ) : (
                      <tr className="border-b" key={exercise.id}>
                        <td>
                          <button
                            className="border border-slate-200 h-50 w-50 mt-10 mr-2 text-3xl rounded-full bg-white"
                            onClick={() => toggleEditMode(exercise.id)}
                          >
                            ✏️
                          </button>
                        </td>
                        <td className="border-none p-3">
                          <p>{exercise.name}</p>
                        </td>
                        <td className="flex justify-center">
                          <table className="table-auto">
                            <thead>
                              <tr>
                                {Object.entries(exercise.sets).map(
                                  ([setNum, reps]) => {
                                    return (
                                      <>
                                        <th className="w-90 border-b border-slate-700 text-xl">
                                          {`Set ${setNum}`}
                                        </th>
                                      </>
                                    );
                                  }
                                )}
                              </tr>
                            </thead>
                            <tbody>
                              {Object.entries(exercise.sets).map(
                                ([setNum, reps]) => {
                                  return (
                                    <>
                                      <td>{reps}</td>
                                    </>
                                  );
                                }
                              )}
                            </tbody>
                          </table>
                        </td>
                        <td className="border-none p-3">
                          <div>{exercise.notes}</div>
                        </td>
                        <td className="border-none">
                          <button
                            className="font-ubuntu bg-race-blue border border-obsidian mt-1 rounded-full p-3"
                            onClick={() => removeExercise(exercise.id)}
                          >
                            - Remove exercise
                          </button>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <button
        className="font-ubuntu ml-40 bg-race-blue border border-obsidian mt-1 rounded-full p-3"
        onClick={addNewExercise}
      >
        + Add exercise
      </button>
    </>
  );
}

export default SetTracker;
