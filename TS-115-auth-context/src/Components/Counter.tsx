import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

type CounterType = {
  count: number;
};

type UpdateActions = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

// type ActionTypes = {
//   type: "increment" | "decrement" | "reset";
//   payload: number;
// };

type ActionTypes = UpdateActions | ResetAction;

const reducer = (state: CounterType, action: ActionTypes) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    // case "js":
    //   return initialState;
    // case "ts":
    //   return initialState;

    default: {
      throw new Error("Invalid Action Type !!");
    }
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <br />
      <br />
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default Counter;
