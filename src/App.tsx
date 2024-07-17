import { useEffect } from "react";
import Scene from "./3d/Scene";
import SymbolChart from "./ui/Chart";
import { generateFakeData } from "./utils/fake-data";
import { useFakeSymbolStore } from "./state/fake-symbol";
import Button from "./ui/base/button/Button";
import { usePlayerStore } from "./state/player";

import AnimatedNumbers from "react-animated-numbers";

function App() {
  const symbolName = "LBKHND";

  const fakeDataGenerator = generateFakeData(symbolName);
  const setSymbol = useFakeSymbolStore((state) => state.updateSymbol);

  const playerStore = usePlayerStore();

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
        <div className="flex justify-center items-center gap-2">
          <span className="!font-xl" style={{fontSize: '2rem'}}>⭐</span>
          {playerStore.coins}
          {/* <AnimatedNumbers
            includeComma
            className={""}
            transitions={(index) => ({
              type: "spring",
              duration: index / 3 + 0.1,
            })}
            animateToNumber={playerStore.coins}
            fontStyle={{
              fontSize: 40,
              fontWeight: "bold",
              color: "white",
            }}
          /> */}
        </div>
      </div>
      <div className="fixed bottom-0 w-full flex">
        <Button onClick={() => playerStore.buy()} block type="green">
          BUY
        </Button>
        <Button onClick={() => playerStore.sell()} block type="red">
          SELL
        </Button>
      </div>
    </>
  );
}

export default App;
