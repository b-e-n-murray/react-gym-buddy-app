import { useState } from "react"
import { ExerciseDataProps } from "../ExerciseData"

interface ExerciseDataListProps{
    listOfExercises: ExerciseDataProps[]
}

function UserPrompts(props: ExerciseDataListProps): JSX.Element {
    const [currentExerciseList, setCurrentExerciseList] = useState<any[]>([])
    
    const chestExerciseSelected = () => {
        setCurrentExerciseList([...currentExerciseList, props.listOfExercises[0]])
    }
        console.log(currentExerciseList)
    return (
        <>
            <p>What body part(s) do you want to train?</p>
            <button onClick={chestExerciseSelected}>Chest</button>
            {/* <button onClick={GetAnExercise}>Back</button>
            <button onClick={GetAnExercise}>Triceps</button>
            <button onClick={GetAnExercise}>Quads</button>
            <button onClick={GetAnExercise}>Hamstrings</button>
            <button onClick={GetAnExercise}>Glutes</button>
            <button onClick={GetAnExercise}>Core</button> */}
            <p>Choose a balance for the workout:</p>
            <p>Select desired difficulty for your workout:</p>
            <button>Easy</button>
            <button>Intermediate</button>
            <button>Hard</button>
            <p>What are your goals for the workout?</p>
            <button>Build Muscle</button>
            <button>Get Stronger</button>
            <button>Varied</button>

        </>
    )
}

export default UserPrompts