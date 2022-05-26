import React, { useEffect } from "react";
import { useDispatchCounter, useDispatchTodo } from "../App";
import { useDispatch } from "./store";

let initTimes = 0;

const Button = React.memo(() => {
  const dispatch = useDispatch();
  const dispatchTodo = useDispatchTodo();
  const dispatchCounter = useDispatchCounter();

  useEffect(() => {
    if (initTimes > 1) {
      while (true) {}
    }
    initTimes = initTimes + 1;
  });

  return (
    <div
      style={{
        border: "1px solid pink",
        borderRadius: "4px",
        padding: "4px",
        width: "100px",
        cursor: "pointer",
      }}
      onClick={() => {
        dispatch({ type: "increment" });
        dispatchTodo({ type: "" });
        dispatchCounter({ type: "" });
      }}
    >
      button
    </div>
  );
});

export default Button;
