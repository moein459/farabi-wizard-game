import { useEffect, useState } from "react";
import Scene from "./3d/Scene";
import SymbolChart from "./ui/Chart";
import { generateFakeData } from "./utils/fake-data";

function App() {
  const fakeDataGenerator = generateFakeData("LBKHND");
  const [symbol, setSymbol] = useState(fakeDataGenerator.generate());

  useEffect(() => {
    const interval = setInterval(() => {
      setSymbol(fakeDataGenerator.generate());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Scene />

      <div className="fixed top-0 w-full">
        <SymbolChart symbolData={symbol} />
      </div>
    </>
  );
}

export default App;
