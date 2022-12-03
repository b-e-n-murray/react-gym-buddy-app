export interface ExerciseDataProps {
  name: string;
  target: string | string[];
  difficulty: "Easy" | "Intermediate" | "Hard";
  image: string;
  requirements: "Machine" | "Free-weights" | "None";
  specialty: "Strength" | "Muscle-building" | "Varied";
}

export const ExerciseData: ExerciseDataProps[] = [
  {
    name: "Lat Pulldown",
    target: "Back",
    difficulty: "Intermediate",
    image: "",
    requirements: "Machine",
    specialty: "Muscle-building",
  },
  {
    name: "Barbell Bench Press",
    target: ["Chest", "Triceps"],
    difficulty: "Intermediate",
    image: "",
    requirements: "Free-weights",
    specialty: "Strength",
  },
  {
    name: "Sit up",
    target: "Core",
    difficulty: "Easy",
    image: "",
    requirements: "None",
    specialty: "Varied",
  },
  {
    name: "Barbell Squat",
    target: ["Quads", "Hamstrings", "Glutes"],
    difficulty: "Intermediate",
    image: "",
    requirements: "Free-weights",
    specialty: "Varied",
  },
  {
    name: "Skullcrushers",
    target: "Triceps",
    difficulty: "Hard",
    image: "",
    requirements: "Free-weights",
    specialty: "Muscle-building",
  },
];
