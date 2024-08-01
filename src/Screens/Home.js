import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [exerciseList, setExceriseList] = useState([]);
  const [lastMuscleGroup, setLastMuscleGroup] = useState(["Back", "Bis"]);

  const baseURL = 'http://localhost:8080/exercise';
  const [muscleGroups, setMuscleGroups] = useState([
    ["Chest", "Shoulders", "Tris"],
    ["Back", "Bis"],
    ["Quads", "Hamstrings", "Glutes"]
  ]);
  const defaultReps = 8;
  const defaultWeight = 45;
  const defaultSets = 4;
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .get(baseURL)
        .then(response => {
          setExceriseList(response.data);
        });
    } catch(error) {
      console.log(error.message);
    }
  }, [lastMuscleGroup]);

  const jsonEqualityCheck = (muscleGroup, lastMuscleGroup) => {
    return JSON.stringify(muscleGroup) === JSON.stringify(lastMuscleGroup)
  };

  const getCurrMuscleGroup = (lastMuscleGroup) => {
    let index = muscleGroups.findIndex((element)=> jsonEqualityCheck(element, lastMuscleGroup))+1
    if (index === muscleGroups.length) {
      index=0
    }
    return(muscleGroups[index]);
  };

  const createWorkoutJSON = (exercise, sets=4, reps=8, weight=45) => {
    return {
      name: exercise,
      sets: sets,
      reps: reps,
      weight: weight,
    }
  };

  const getExerciseArrayByMuscleList = () => {
    const exerciseArray = [];
    for (const exercise of exerciseList) {
      for (const muscle of getCurrMuscleGroup(lastMuscleGroup)) {
        if (exercise.targetMuscle === muscle) {
          exerciseArray.push(exercise.name);
        }
      }
    }
    return exerciseArray;
  };

  const navToExercise = (exerciseJSON) => {
    navigate('/exercise', {state:exerciseJSON})
  }

  const generateNextWorkout = (muscleGroups, lastMuscleGroup) => {
    let index = 0;
    for (const group of muscleGroups) {
      if (JSON.stringify(group) === JSON.stringify(lastMuscleGroup)) {
        index = muscleGroups.indexOf(group);
      }
    }
    if (index === muscleGroups.length-1) {
      index = -1
    }
    console.log(index+1)
    setLastMuscleGroup(muscleGroups[index+1])
  }

  return(
    <div>
      <h2>Today's Muscles: </h2>
      {getCurrMuscleGroup(lastMuscleGroup).map(muscle => <p key={muscle}>{muscle}</p>)}
      <h2>Today's Exercises</h2>
      {getExerciseArrayByMuscleList().map(exercise => {
        const exerciseJSON = createWorkoutJSON(exercise, defaultSets, defaultReps, defaultWeight)
        return (
          <div onClick={() => {navToExercise(exerciseJSON)}}>
            <h3>{exerciseJSON.name}</h3>
            <h4>{exerciseJSON.sets} SETS | {exerciseJSON.reps} REPS | {exerciseJSON.weight} LBS</h4>
          </div>
        )
      })}
      <button onClick={()=> generateNextWorkout(muscleGroups, lastMuscleGroup)}>Next Workout</button>
    </div>
  )
};

export default Home;