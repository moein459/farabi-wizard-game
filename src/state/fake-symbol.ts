import { create } from "zustand";
import { SymbolData } from "../utils/fake-data";

type SymbolStatus = "POSITIVE" | "NEGATIVE";

interface FakeSymbolState {
  current: SymbolData;
  history: number[];
  status: SymbolStatus;
  updateSymbol: (symbol: SymbolData) => void;
}

export const useFakeSymbolStore = create<FakeSymbolState>((set, get) => ({
  current: {
    price: 100,
    symbol: "LBKHND",
    timestamp: new Date().toISOString(),
  },
  history: [],
  status: "POSITIVE",
  updateSymbol(symbol: SymbolData) {
    const data = [...get().history, symbol.price];
    if (data.length > 50) data.shift();

    const average = data.reduce((a: number, b: number) => a + b) / data.length;
    const status = symbol.price > average ? "POSITIVE" : "NEGATIVE";

    set({ current: symbol, history: data, status });
  },
}));
