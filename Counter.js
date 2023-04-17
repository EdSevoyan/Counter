import { useState } from 'react';
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className='app'>
      <h2>{count}</h2>
      <div className='buttons'>
        <button onClick={() => setCount(count-1)}>- Minus</button>
        <button onClick={() => setCount(count+1)}>Plus +</button>
      </div>
    </div>
  );
}

export default Counter;