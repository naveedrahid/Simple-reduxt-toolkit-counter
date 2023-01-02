///import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
import { useSelector } from 'react-redux';

function App() {
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <h1>Redux Made Easy: {count}</h1>
      <h2>The Count: </h2>
      <Counter />
    </div>
  );
}

export default App;
