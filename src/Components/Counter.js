import { useReducer } from "react";

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action) {
    case "increament":
      return state + 1;
      break;
    case "decreament":
      return state - 1;
      break;
    case "reset":
      return initialState;
      break;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>{state}</div>
      <button onClick={() => dispatch("increament")}>Increase</button>
      <button onClick={() => dispatch("decreament")}>Decrease</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};
export default Counter;
