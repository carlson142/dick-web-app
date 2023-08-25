import { create } from "zustand";
import { getData } from "../helpers/helpers";
import { IData } from "../data";

// SEARCH STRING
type useInputProps = {
  input: string;
  setInput: (input: string) => void;
};

export const useInputStore = create<useInputProps>((set) => ({
  input: "",
  setInput: (input) => set({ input }),
}));

// GET DATA FROM API
type useGetDataProps = {
  data: IData[];
  getData: (search: string) => Promise<void>;
};

export const useGetData = create<useGetDataProps>((set) => ({
  data: [],
  getData: async (search) => {
    const data = await getData(search);
    set({ data });
  },
}));
