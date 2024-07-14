import { useEffect, useState } from "react";
import Scene from "./3d/Scene";
import SymbolChart from "./ui/Chart";
import { generateFakeData } from "./utils/fake-data";
import { useFakeSymbolStore } from "./state/fake-symbol";
import Button from "./ui/base/button/Button";

function App() {
  const symbolName = "LBKHND";

  const fakeDataGenerator = generateFakeData(symbolName);
  const setSymbol = useFakeSymbolStore((state) => state.updateSymbol);

  useEffect(() => {
    const interval = setInterval(() => {
      setSymbol(fakeDataGenerator.generate());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Scene />

      {/* wrap it in a ui container component */}
      <div className="fixed top-0 w-full">
        <SymbolChart />
      </div>
      <div className="fixed bottom-0 w-full flex">
        <Button block type="green">BUY</Button>
        <Button block type="red">SELL</Button>
      </div>
    </>
  );
}

export default App;
