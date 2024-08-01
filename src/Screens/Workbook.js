const createMuscleList = (exercises) => {
  const muscleList = [];
  exercises.map(exercise => {
    if (!muscleList.includes(exercise.targetMuscle)) {
      muscleList.push(exercise.targetMuscle);
    };
    return muscleList;
  });
  return muscleList;
};

const generateMuscleGroup = () => {
  let currMuscles = [];
  const lastIndex = muscleGroups.indexOf(lastMuscleGroup);
  currMuscles = muscleGroups[lastIndex+1];
  setCurrMuscleGroup(currMuscles);
};

const generateWorkout = () => {
  const currExercises = [];
  const currMuscles = muscleGroups[muscleGroups.indexOf(lastMuscleGroup)+2]
  console.log(currMuscles)
  for (const muscle of currMuscles) {
    for (let x=0; x<3; x++) {
      currExercises.push(getExerciseArrayByMuscle(muscle, exerciseList)[x])
    }
  };
  return currExercises;
};

if (currMuscleGroup.length === 0) {
  setCurrMuscleGroup(muscleGroups[muscleGroups.indexOf(lastMuscleGroup)+2])
  setCurrWorkout(generateWorkout());
  console.log(currWorkout)
}