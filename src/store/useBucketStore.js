import { create } from "zustand";

export const useBucketStore = create((set) => {
  return {
    focusBucket: null,
    setFocusBucket: (name) => {
      return set({ focusBucket: name });
    },
    removeFocusBucket: () => {
      return set({ focusBucket: null });
    },
  };
});
