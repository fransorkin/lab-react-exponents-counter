import { useState } from "react";

import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
      />

      {/* Pasamos count como prop a TODOS los exponentes */}
      <ExponentTwo count={count} />
      <ExponentThree count={count} />
      <ExponentFour count={count} />
      <ExponentFive count={count} />
      <ExponentSix count={count} />
    </div>
  );
}

export default App;
