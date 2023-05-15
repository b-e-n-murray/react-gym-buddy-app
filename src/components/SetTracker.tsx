import { useState } from "react";
import { Link } from "react-router-dom";

interface IExercise {
  name: string;
  notes: string;
  sets: Record<string, number>;
  editMode: boolean;
}

function SetTracker(): JSX.Element {
  const emptyExercise: IExercise = {
    name: "",
    notes: "",
    sets: { set1: 0 },
    editMode: true,
  };
  const [exerciseList, setExerciseList] = useState<IExercise[]>([
    emptyExercise,
  ]);
  function addNewExercise() {
    setExerciseList([...exerciseList, emptyExercise]);
    return;
  }
  return (
    <>
      <h1 className="font-ubuntu justify-center text-5xl text-center mt-2 mb-1">
        Set/Rep Tracker
      </h1>
      <h4 className="font-ubuntu justify-center text-xl text-center ">
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
      <div className=" flex justify-center mt-6">
        <table className="border border-slate-200 place-content-center">
          <thead>
            <tr>
              <th className="border border-slate-700 text-2xl">Exercise</th>
              <th className="border border-slate-700 text-2xl">Reps</th>
              <th className="border border-slate-700 text-2xl">Notes</th>
            </tr>
          </thead>
          <tbody>
            {exerciseList.map((exercise) => {
              return (
                <>
                  {exercise.editMode ? (
                    <tr>
                      <td className="border border-slate-700 p-3">
                        <input
                          placeholder="Exercise name..."
                          maxLength={50}
                          className="w-200 border border-black-200 pl-2 pt-1 pb-1"
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
                                      className="w-90 border border-slate-700 text-xl"
                                    >
                                      {`Set ${setNum[3]}`}
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
                                        value={reps}
                                      ></input>
                                    </>
                                  );
                                }
                              )}
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td className="border border-slate-700 p-3">
                        <textarea className="border border-black-200"></textarea>
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <td className="border border-slate-700 p-3">
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
                                      <th className="w-90 border border-slate-700 text-xl">
                                        {`Set ${setNum[3]}`}
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
                      <td className="border border-slate-700 p-3">
                        <textarea className="border border-black-200"></textarea>
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <button
        className="font-ubuntu ml-40 bg-race-blue border border-obsidian mt-1"
        onClick={addNewExercise}
      >
        + Add exercise
      </button>
    </>
  );
}

export default SetTracker;
