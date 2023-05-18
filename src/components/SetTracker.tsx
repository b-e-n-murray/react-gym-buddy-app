import { useState } from "react";
// import { Link } from "react-router-dom";

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

  // function toggleEditMode(exerciseId: number): void {
  //   setExerciseList((prevState) => {
  //     const updatedExercises = prevState.map((exercise) => {
  //       if (exercise.id === exerciseId) {
  //         return {
  //           ...exercise,
  //           editMode: !exercise.editMode,
  //         };
  //       }
  //       return exercise;
  //     });
  //     return updatedExercises;
  //   });
  // }

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

  function addSetToExercise(id: number) {
    setExerciseList((prevState) => {
      const updatedExercises = prevState.map((exercise) => {
        if (exercise.id === id) {
          return {
            ...exercise,
            sets: addNewSet(exercise.sets),
          };
        }
        return exercise;
      });
      return updatedExercises;
    });
  }

  function addNewSet(setData: Record<string, number>) {
    const newSetNum: number = Object.entries(setData).length + 1;
    if (newSetNum < 5) {
      const updatedSetData = { ...setData, [newSetNum]: 0 };
      console.log(setData);
      return updatedSetData;
    }
    return setData;
  }
  return (
    <>
      <h1 className="font-marker text-6xl text-center mt-8 mb-4">
        Set/Rep Tracker
      </h1>
      <h4 className="font-ubuntu text-2xl text-center">
        Enter the exercises of your workout below and use the table to record
        your output.
        <br />
      </h4>
      <div className="flex justify-center mt-6">
        <div className="flex justify-center">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b pb-2">
                <th className="border-none"></th>
                <th className="text-2xl w-1/4">Exercise</th>
                <th className="text-2xl w-1/4">Reps</th>
                <th className="text-2xl w-1/4">Notes</th>
                <th className="border-none"></th>
              </tr>
            </thead>
            <tbody>
              {exerciseList.map((exercise) => {
                return (
                  <tr className="border-b h-14" key={exercise.id}>
                    <td className="p-2">
                      {/* {exercise.editMode ? (
                    <button
                      className="font-ubuntu bg-race-blue border border-obsidian rounded-full px-4 py-2 text-white mx-auto block"
                      onClick={() => toggleEditMode(exercise.id)}
                    >
                      Done
                    </button>
                  ) : (
                    <button
                      className="font-ubuntu bg-race-blue border border-obsidian rounded-full px-4 py-2 text-white mx-auto block"
                      onClick={() => toggleEditMode(exercise.id)}
                    >
                      Edit
                    </button>
                  )} */}
                    </td>
                    <td className="p-2">
                      {exercise.editMode ? (
                        <input
                          placeholder={
                            exercise.name === ""
                              ? "Exercise name..."
                              : exercise.name
                          }
                          value={exercise.name === "" ? "" : exercise.name}
                          maxLength={50}
                          className="w-full border border-black-200 pl-2 py-1 rounded"
                          onChange={(e) =>
                            updateExerciseName(exercise.id, e.target.value)
                          }
                        />
                      ) : (
                        <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                          {exercise.name}
                        </p>
                      )}
                    </td>
                    <td className="flex">
                      {exercise.editMode ? (
                        <table className="w-full">
                          <thead>
                            <tr>
                              {Object.entries(exercise.sets).map(
                                ([setNum, reps]) => (
                                  <th
                                    key={setNum}
                                    className="w-12 border-b border-slate-700 text-lg"
                                  >
                                    Set {setNum}
                                  </th>
                                )
                              )}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              {Object.entries(exercise.sets).map(
                                ([setNum, reps]) => (
                                  <td key={setNum}>
                                    <input
                                      className="w-3 border border-slate-400 ml-1 text-center"
                                      type="number"
                                      placeholder={
                                        reps === 0 ? "0" : JSON.stringify(reps)
                                      }
                                      value={reps === 0 ? "" : reps}
                                      onChange={(e) =>
                                        updateExerciseSet(
                                          exercise.id,
                                          setNum,
                                          Number(e.target.value)
                                        )
                                      }
                                    />
                                  </td>
                                )
                              )}
                              <td>
                                <button
                                  className=" bg-race-blue border border-slate-200 h-8 w-20 rounded-full text-lg text-white"
                                  onClick={() => addSetToExercise(exercise.id)}
                                >
                                  +
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      ) : (
                        <>
                          {Object.entries(exercise.sets).map(
                            ([setNum, reps]) => (
                              <div
                                key={setNum}
                                className="w-12 h-8 border border-slate-200 flex items-center justify-center ml-1"
                              >
                                {reps}
                              </div>
                            )
                          )}
                        </>
                      )}
                    </td>
                    <td className="p-2">
                      {exercise.editMode ? (
                        <textarea
                          className="w-full border border-black-200 rounded"
                          value={exercise.notes === "" ? "" : exercise.notes}
                          onChange={(e) =>
                            updateExerciseNotes(exercise.id, e.target.value)
                          }
                        />
                      ) : (
                        <div className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                          {exercise.notes}
                        </div>
                      )}
                    </td>
                    <td className="p-2">
                      <button
                        className="font-marker bg-red border border-obsidian mt-1 rounded-full px-4 py-2 text-white"
                        onClick={() => removeExercise(exercise.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <button
        className="font-marker bg-race-blue border border-obsidian mt-4 rounded-full px-4 py-2 text-white mx-auto block"
        onClick={addNewExercise}
      >
        Add Exercise
      </button>
    </>
  );
}

export default SetTracker;
