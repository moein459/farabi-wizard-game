import { create } from "zustand";
import { useFakeSymbolStore } from "./fake-symbol";

type PlayerStatus = "RIGHT" | "WRONG" | "IDLE";

interface PlayerState {
  coins: number;
  status: PlayerStatus;
  buy: () => void;
  sell: () => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  coins: 0,
  status: "IDLE",
  buy() {
    const status = useFakeSymbolStore.getState().status;

    if (status === "POSITIVE")
      set({ coins: (get().coins += 1_000), status: "RIGHT" });
    else set({ coins: (get().coins -= 1_000), status: "WRONG" });

    set({ coins: get().coins <= 0 ? 0 : get().coins });
  },
  sell() {
    const status = useFakeSymbolStore.getState().status;

    if (status === "NEGATIVE")
      set({ coins: (get().coins += 1_000), status: "RIGHT" });
    else set({ coins: (get().coins -= 1_000), status: "WRONG" });

    set({ coins: get().coins <= 0 ? 0 : get().coins });
  },
}));
