// import { useState } from "react";
import { useState } from "react";
import { ExerciseDataProps } from "../ExerciseData";

interface ExerciseDataListProps {
    listOfExercises: ExerciseDataProps[];
}

function UserPrompts(props: ExerciseDataListProps): JSX.Element {
    const [targetMuscles, setTargetMuscles] = useState<string[]>([])
    const chestSelected = () => {
        setTargetMuscles([...targetMuscles, "Chest"])}
    const backSelected = () => {
        setTargetMuscles([...targetMuscles, "Back"])}
    const tricepsSelected = () => {
        setTargetMuscles([...targetMuscles, "Triceps"])}
    const quadsSelected = () => {
        setTargetMuscles([...targetMuscles, "Quads"])}
    const hamstringsSelected = () => {
        setTargetMuscles([...targetMuscles, "Hamstrings"])}
    const glutesSelected = () => {
        setTargetMuscles([...targetMuscles, "Glutes"])}
    const coreSelected = () => {
        setTargetMuscles([...targetMuscles, "Core"])}
    
        console.log(targetMuscles)
    function handleData(submitData: any) {
        submitData.preventDefault()
    }
    return (
        <>
            <p>What body part(s) do you want to train? (3 Maximum)</p>
            <form onSubmit={handleData}>
                <input type="checkbox" onClick={chestSelected}/><span>Chest</span>
                <input type="checkbox" onClick={backSelected}/><span>Back</span>
                <input type="checkbox" onClick={tricepsSelected}/><span>Triceps</span>
                <input type="checkbox" onClick={quadsSelected}/><span>Quads</span>
                <input type="checkbox" onClick={hamstringsSelected}/><span>Hamstrings</span>
                <input type="checkbox" onClick={glutesSelected}/><span>Glutes</span>
                <input type="checkbox" onClick={coreSelected}/><span>Core</span>
            
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
            <br /> <br />
            <br /> <br />
            <span>You have selected a {targetMuscles}
            workout</span>
            <br /> <br />
            <button type="submit" >Generate Workout</button>
            </form>
        </>
    );
}

export default UserPrompts;
