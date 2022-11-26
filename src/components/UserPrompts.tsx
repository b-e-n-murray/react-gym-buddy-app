// import { useState } from "react";
import { ExerciseDataProps } from "../ExerciseData";

interface ExerciseDataListProps {
    listOfExercises: ExerciseDataProps[];
}

function UserPrompts(props: ExerciseDataListProps): JSX.Element {
    //   const [currentExerciseList, setCurrentExerciseList] = useState<any[]>([]);

    //   const chestExerciseSelected = () => {
    //     if (
    //       !currentExerciseList.includes(props.listOfExercises /*target = Chest */)
    //     )
    //       setCurrentExerciseList([...currentExerciseList, props.listOfExercises]);
    //     //target must include "Chest"
    //   };
    //   console.log(currentExerciseList);

    function CheckBoxTest() {
        return console.log("checkbox has been clicked")
    }
    return (
        <>
            <p>What body part(s) do you want to train? (3 Maximum)</p>
            <form>
                <input type="checkbox" onClick={CheckBoxTest}/><span>Chest</span>
                <input type="checkbox" /><span>Back</span>
                <input type="checkbox" /><span>Triceps</span>
                <input type="checkbox" /><span>Quads</span>
                <input type="checkbox" /><span>Hamstrings</span>
                <input type="checkbox" /><span>Glutes</span>
                <input type="checkbox" /><span>Core</span>
            </form>
            <p>Choose a balance for the workout:</p>
            <p>Select desired difficulty for your workout:</p>
            <select>
                <option>
                    Easy
                </option>
                <option>
                    Intermediate
                </option>
                <option>
                    Hard
                </option>
            </select>
            <p>What are your goals for the workout?</p>
            <select>
            <option>
                Build Muscle
            </option>
            <option>
                Get Stronger
            </option>
            <option>
                Varied
            </option>
            </select>
        </>
    );
}

export default UserPrompts;
