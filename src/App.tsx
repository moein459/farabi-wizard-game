import { useEffect } from "react";
import Scene from "./3d/Scene";
import { generateFakeData } from "./utils/fake-data";
import { useFakeSymbolStore } from "./state/fake-symbol";
import UiContainer from "./ui/UiContainer";

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
      <UiContainer />
    </>
  );
}

export default App;
