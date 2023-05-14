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
        <table className="border border-slate-500 place-content-center">
          <thead>
            <tr>
              <th className="border border-slate-700">Exercise</th>
              <th className="border border-slate-700">Set 1</th>
              <th className="border border-slate-700">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700">
                <input
                  placeholder="Exercise name..."
                  maxLength={50}
                  className="w-200 border border-black-200"
                ></input>
              </td>
              <td className="flex justify-center">
                <input
                  maxLength={3}
                  className="w-30 border border-black-200"
                ></input>
              </td>
              <td className="border border-slate-700">
                <textarea className="w-500 border border-black-200"></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="font-ubuntu">+ Add exercise</button>
      </div>
    </>
  );
}

export default SetTracker;
