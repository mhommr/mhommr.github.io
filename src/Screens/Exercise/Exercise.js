import React, { useState } from 'react';
import Rep from '../Rep';
import { useLocation } from 'react-router-dom';
import { equalityJSONCheck } from '../../helpers/eqaulityJSONCheck';

const Exercise = () => {
  const location = useLocation();  
  const name = location.state.name;
  const sets = location.state.sets;
  const reps = location.state.reps;
  const weight = location.state.weight

  const [exerciseListJSON, setExerciseListJSON] = useState([]);
  const [currSet, setCurrSet] = useState(0);

  const createSetList = () => {
    const exerciseList = []
    for (let set=1; set<=sets; set++) {
      exerciseList.push({
        name: name,
        setNumber: set,
        reps: reps,
        weight: weight,
        isLogged: null
      })
    }
    if (exerciseListJSON.length === 0) {
      setExerciseListJSON(exerciseList)
    }
  };
  
  createSetList();
  const setListStarting = exerciseListJSON; 


  const handleLogSet = () => {
    if (currSet+1<=sets) {
      console.log(exerciseListJSON)
      exerciseListJSON[currSet].isLogged = !exerciseListJSON[currSet].isLogged
      setCurrSet(currSet+1)
    }
    return;
  }

  return(
    <div>
      <h3>{name}</h3>
      {exerciseListJSON.map((currentSet)=> {
        return(
          <Rep
            setNumber={currentSet.setNumber}
            reps={currentSet.reps}
            weight={currentSet.weight}
            isLogged={currentSet.isLogged}/>
        )
      })}
      <button onClick={handleLogSet}>Log set</button>
  </div>
  )
};

export default Exercise;