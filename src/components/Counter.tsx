import React from "react";
import { useCounter, useTodo } from "../App";
import Button from "./Button";
import { useStore } from "./store";

const Counter = () => {
  const { state } = useStore();
  const { state: todo } = useTodo();
  const { state: counter } = useCounter();

  return (
    <div>
      <div>counts {state}</div>
      <div>todo {todo}</div>
      <div>counter {counter}</div>
      <Button />
    </div>
  );
};

export default Counter;
