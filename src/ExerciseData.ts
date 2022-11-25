export interface ExerciseDataProps {
    name: string
    target: string | string[]
    difficulty: "Easy" | "Intermediate" | "Hard"
    image: string
    requirements: "Machine" | "Free-weights" | "None"
    specialty: "Strength" | "Muscle-building" | "Varied"
}

export const ExerciseData: ExerciseDataProps[] =
    [
        {
            name: "Lat Pulldown",
            target: "Back",
            difficulty: "Intermediate",
            image: "",
            requirements: "Machine",
            specialty: "Muscle-building"
        },

    ]