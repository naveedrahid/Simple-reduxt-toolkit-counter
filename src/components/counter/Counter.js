import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/counterSlice';

const Counter = () => {
    const count = useSelector((state)=> state.counter.count);
    const dispatch = useDispatch();

    const incrementHandler = () =>{
        dispatch(increment());
    }
    const decrementHandler = () =>{
        dispatch(decrement());
    }

    return (
        <div className="counter-container">
        <h3>Count : {count}</h3>
  
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      </div>
    );
}

export default Counter;
