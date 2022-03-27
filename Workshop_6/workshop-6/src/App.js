import Header from './components/header';
import Counter from './components/counter';
import Button from './components/button';
import React, {useState} from 'react';
import View from 'react';

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
      <View style={{justifyContent: 'center'}}>
        <Button color="pink" text="Increment" onClick={increase} />
        <Button color="green" text="Decrement" onClick={decrease} />
        <Button color="red" text="Reset" onClick={reset} />
      </View>
    </div>
  );
}

export default App;
