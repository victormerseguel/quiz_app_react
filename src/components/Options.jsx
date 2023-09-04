import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Options.css";

const Options = ({ option, selectOption, answer, hide }) => {
  const [quizState, dipatch] = useContext(QuizContext);

  return (
    <div
      className={`option ${
        quizState.answerSelected && option === answer ? "correct" : ""
      } ${quizState.answerSelected && option !== answer ? "wrong" : ""}
      ${hide ? "hide" : ""}
        `}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};

export default Options;
