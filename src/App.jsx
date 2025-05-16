import './App.css';
import Clicker from './components/Clicker';
import { ClickProvider } from './context/ClickContext';

export default function App() {
  return (
    <ClickProvider>
      <div className="App">
        <h1>Welcome to the Code Review App</h1>
        <Clicker />
      </div>
    </ClickProvider>
  );
}
