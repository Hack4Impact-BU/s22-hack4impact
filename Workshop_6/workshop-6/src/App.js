import Header from './components/header';
import Counter from './components/counter';
import Button from './components/button';
import React, {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <Header />
      {/* passing in props, e.g. initial value / information you want to pass in like params */}
      <Counter count={counter} />
      {/* Add 3 buttons for add, minus and reset */}
      <Button color="green" text="Add 1" onClick={increase} />
      <Button color="green" text="Minus 1" onClick={decrease} />
      <Button color="red" text="Reset" onClick={reset} />
    </div>
  );
}

export default App;
