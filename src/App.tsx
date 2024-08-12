import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { stat } from 'fs';
import { addname, decrement, increment } from './counterSlice';
import { addArray, removeArray } from './arraySlice';

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const name = useSelector((state: RootState) => state.counter.name)
  const arr = useSelector((state: RootState) => state.array.arr)
  const dispatch: AppDispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
        <br/>
        <button onClick={() => dispatch(removeArray())}>-</button>
        <span>{JSON.stringify(arr)}</span>
        <button onClick={() => dispatch(addArray())}>+</button>
      </div>
      </header>

    </div>
  );
}

export default App;
