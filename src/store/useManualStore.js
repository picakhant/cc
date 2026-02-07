import { create } from "zustand";

export const useManualStore = create((set) => {
  return {
    focusManual: null,
    setFocusManual: (name) => {
      return set({ focusManual: name });
    },
    removeFocusManual: () => {
      return set({ focusManual: null });
    },
  };
});
