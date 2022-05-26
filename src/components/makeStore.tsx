import React, { createContext, useContext, useReducer } from "react";

export const makeStore = (props: any) => {
  const { reducer, initValue } = props;

  const StoreContext = createContext<{ state: any }>({
    state: null,
  });

  const DispatchContext = createContext(({ type }: { type: string }) => {});
  interface Props {
    children?: React.ReactNode;
  }

  const StoreProvider: React.FC<Props> = (props) => {
    const { children } = props;

    const [state, dispatch] = useReducer(reducer, initValue);

    return (
      <DispatchContext.Provider value={dispatch}>
        <StoreContext.Provider value={{ state }}>
          {children}
        </StoreContext.Provider>
      </DispatchContext.Provider>
    );
  };

  const useStore = () => {
    return useContext(StoreContext);
  };

  const useDispatch = () => {
    return useContext(DispatchContext);
  };

  return { useStore, useDispatch, StoreProvider };
};
