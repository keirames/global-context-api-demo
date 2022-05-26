import React, { createContext, useContext, useReducer } from "react";

const StoreContext = createContext({
  state: 0,
});

const DispatchContext = createContext(({ type }: { type: string }) => {});
interface Props {
  children?: React.ReactNode;
}

export const useStore = () => {
  return useContext(StoreContext);
};

export const useDispatch = () => {
  return useContext(DispatchContext);
};

const reducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case "increment":
      return state + 1;

    default:
      throw new Error();
  }
};

const StoreProvider: React.FC<Props> = (props) => {
  const { children } = props;

  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StoreContext.Provider value={{ state }}>
        {children}
      </StoreContext.Provider>
    </DispatchContext.Provider>
  );
};

export default StoreProvider;
