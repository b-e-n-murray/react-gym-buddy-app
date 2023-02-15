export interface MergedExercises {
  id: number;
  exercise_name: string;
  difficulty: "Easy" | "Intermediate" | "Hard";
  requirements: "Machine" | "Free-weights" | "None";
  specialty: "Strength" | "Muscle-building" | "Varied";
  targeted_muscle: string | string[];
}

export interface FetchedExercises {
  id: number;
  exercise_name: string;
  difficulty: "Easy" | "Intermediate" | "Hard";
  requirements: "Machine" | "Free-weights" | "None";
  specialty: "Strength" | "Muscle-building" | "Varied";
  targeted_muscle: string;
}
