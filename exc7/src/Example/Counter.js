import React, { useEffect, useState } from 'react'

const Counter = () => {
    const[count, setCount] = useState(0);
    useEffect(() => {
        console.log(`Componet mounted or count state changed`);
        return () => {
            console.log(`Component unmounted oor before count state changes`);
        }
    }, [count]);
    
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>Click me</button>
    </div>
  )
}

export default Counter
