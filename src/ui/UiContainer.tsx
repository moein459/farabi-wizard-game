import { usePlayerStore } from "../state/player";
import Button from "./base/button/Button";
import SymbolChart from "./Chart";

function UiContainer() {
  const playerStore = usePlayerStore();

  return (
    <>
      <div className="fixed top-0 left-0 right-0 mx-auto w-full h-full max-w-[450px] border shadow-xl">
        <div className="flex flex-col h-full justify-between">
          <div>
            <SymbolChart />
            <div className="flex justify-center items-center gap-2">
              <span style={{ fontSize: "2rem" }}>
                ⭐
              </span>
              <span className="text-4xl font-bold">{playerStore.coins}</span>
            </div>
          </div>
          <div className="flex">
            <Button onClick={() => playerStore.buy()} block type="green">
              BUY
            </Button>
            <Button onClick={() => playerStore.sell()} block type="red">
              SELL
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UiContainer;
