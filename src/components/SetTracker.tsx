import { Link } from "react-router-dom";

function SetTracker(): JSX.Element {
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
            <tr>
              <td className="border border-slate-700 p-3">
                <input
                  placeholder="Exercise name..."
                  maxLength={50}
                  className="w-200 border border-black-200"
                ></input>
              </td>
              <td className="flex justify-center">
                <table className="table-auto">
                  <thead>
                    <tr>
                      <th className="w-90 border border-slate-700 text-xl">Set 1</th>
                      <th className="w-90 border border-slate-700 text-xl">Set 2</th>
                      <th className="w-90 border border-slate-700 text-xl">Set 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="justify-center">
                        <input maxLength={3} className="w-40 border border-black-200"></input>
                      </td>
                      <td className="justify-center">
                        <input maxLength={3} className="w-40 border border-black-200"></input>
                      </td>
                      <td className="justify-center">
                        <input maxLength={3} className="w-40 border border-black-200"></input>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="border border-slate-700 p-3">
                <textarea className="border border-black-200"></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="font-ubuntu ml-40 bg-race-blue border border-obsidian mt-1">+ Add exercise</button>
    </>
  );
}

export default SetTracker;
