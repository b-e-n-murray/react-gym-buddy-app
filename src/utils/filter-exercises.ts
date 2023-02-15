import { FetchedExercises, MergedExercises } from "./interfaces";

function groupDuplicates(exerciseArr: FetchedExercises[]) {
  const mergedExercises: MergedExercises[] = [];

  exerciseArr.forEach((exercise) => {
    const existingExercise = mergedExercises.find(
      (e) => e.exercise_name === exercise.exercise_name
    );

    if (existingExercise) {
      // Merge 'muscle' values into an array
      if (typeof existingExercise.targeted_muscle === "string") {
        existingExercise.targeted_muscle = [existingExercise.targeted_muscle];
      }

      existingExercise.targeted_muscle.push(exercise.targeted_muscle);
    } else {
      // Add new exercise object to the merged exercises array
      mergedExercises.push({ ...exercise });
    }
  });

  return mergedExercises;
}

function filterExercises(
  selectedEquips: string[],
  selectedGoal: string,
  fetchedExercises: FetchedExercises[]
): MergedExercises[] {
  if (selectedGoal !== "Varied") {
    const filteredForGoal = groupDuplicates(fetchedExercises).filter(
      (exercise) => {
        return exercise.specialty === selectedGoal;
      }
    );
    return filteredForGoal.filter((exercise) => {
      return selectedEquips.includes(exercise.requirements);
    });
  }
  return groupDuplicates(fetchedExercises).filter((exercise) => {
    return selectedEquips.includes(exercise.requirements);
  });
}

export default filterExercises;
