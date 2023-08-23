import { create } from "zustand";

type useInputProps = {
  input: string;
  setInput: (input: string) => void;
};

export const useInputStore = create<useInputProps>((set) => ({
  input: "",
  setInput: (input) => set({ input }),
}));
