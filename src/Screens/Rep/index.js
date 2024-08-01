import React from "react";
import { RepDiv, RepNum } from "./Rep.styles";

const Rep = ({ setNumber, reps, weight, isLogged }) => {
  const handleHighlight = () => {
    if (setNumber === 1 && !isLogged) {
      return true;
    } else if (!isLogged) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <RepDiv $isHighlighted={handleHighlight()}>
      <RepNum $isLogged={isLogged}>{setNumber}:{"\xa0\xa0"}</RepNum>
      <RepNum $isLogged={isLogged}>{reps} REPS</RepNum>
      <RepNum $isLogged={isLogged}>{"\xa0"}|{"\xa0"}</RepNum>
      <RepNum $isLogged={isLogged}>{weight} POUNDS</RepNum>
    </RepDiv>
  )
};

export default Rep;