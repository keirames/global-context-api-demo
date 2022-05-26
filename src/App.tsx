import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import StoreProvider from "./components/store";
import { makeStore } from "./components/makeStore";

export const {
  StoreProvider: TodoProvider,
  useDispatch: useDispatchTodo,
  useStore: useTodo,
} = makeStore({
  reducer: (state: any, action: any) => {
    return state + 1;
  },
  initValue: 2,
});

export const {
  StoreProvider: CounterProvider,
  useDispatch: useDispatchCounter,
  useStore: useCounter,
} = makeStore({
  reducer: (state: any, action: any) => {
    return state + 10;
  },
  initValue: 0,
});

function App() {
  return (
    <CounterProvider>
      <TodoProvider>
        <StoreProvider>
          <div className="App">
            <Counter />
          </div>
        </StoreProvider>
      </TodoProvider>
    </CounterProvider>
  );
}

export default App;
