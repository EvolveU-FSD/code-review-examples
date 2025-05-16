import { createContext, useReducer, useContext } from 'react';

const ClickContext = createContext();

const initialState = { count: 0 };

function clickReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      throw new Error('Unhandled action type: ' + action.type);
  }
}

export function ClickProvider({ children }) {
  const [state, dispatch] = useReducer(clickReducer, initialState);
  return (
    <ClickContext.Provider value={{ state, dispatch }}>
      {children}
    </ClickContext.Provider>
  );
}

export function useClickContext() {
  const context = useContext(ClickContext);
  if (!context) throw new Error('useClickContext must be used within ClickProvider');
  return context;
}
