import { create } from "zustand";

export const useClassStore = create((set) => {
  return {
    focusClass: null,
    setFocusClass: (name) => {
      return set({ focusClass: name });
    },
    removeFocusClass: () => {
      return set({ focusClass: null });
    },
  };
});
