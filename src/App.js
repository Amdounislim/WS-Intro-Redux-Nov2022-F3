import './App.css';
import Counter from './Components/Counter';
import { useDispatch, useSelector } from "react-redux"
import { toggle } from './JS/actions/actionShow';

function App() {

  const dispatch = useDispatch()
  const show = useSelector(state => state.reducerShow.show)


  return (
    <div className="App">
      <h1>React Redux -- Workshop</h1>
      <button onClick={() => dispatch(toggle())}>
        {show ? "Hid Counter" : "Show Counter"}
      </button>
      {show && <Counter />}
    </div>
  );
}

export default App;
