import { useClickContext } from '../context/ClickContext';

export function useClickCounter() {
  const { state, dispatch } = useClickContext();

  function increment() {
    dispatch({ type: 'INCREMENT' });
  }

  return {
    count: state.count,
    increment,
  };
}
