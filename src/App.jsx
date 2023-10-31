import { useEffect, useState } from "react";
import Box from "./box";

function App() {
  const [count, setCount] = useState(5);

  const [subtract, setSubtract] = useState(false);

  useEffect(() => {
    autoPlay();
  }, [count]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function autoPlay() {
    setInterval(() => {
      let newCount;

      if (count === 75) {
        setSubtract(true);
      } else if (count === 0) {
        setSubtract(false);
      }

      if (subtract) {
        newCount = count - 1;
      } else {
        newCount = count + 1;
      }

      setCount(newCount);
    }, 40);
  }

  return (
    <div className="mainContainer">
      <Box count={count} />
    </div>
  );
}

export default App;
