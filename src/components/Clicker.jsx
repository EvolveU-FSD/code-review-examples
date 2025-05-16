import { useClickCounter } from '../hooks/useClickCounter';
import './Clicker.css';

export default function Clicker() {
  const { count, increment } = useClickCounter();

  return (
    <div className="counter-wrapper">
      <button onClick={increment} className="epic-button">
        Clicked {count} time{count !== 1 ? 's' : ''}
      </button>
    </div>
  );
}
