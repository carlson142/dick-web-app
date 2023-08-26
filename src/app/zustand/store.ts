import { create } from "zustand";
import { getData } from "../helpers/helpers";
import { IData, IError } from "../data";

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
  error: IError | null;
  errorState: boolean;
  getData: (search: string) => Promise<void>;
};

export const useGetData = create<useGetDataProps>((set) => ({
  data: [],
  error: null,
  errorState: false,
  getData: async (search) => {
    const data = await getData(search);

    if (!data.ok) {
      set({ error: data, errorState: true });
    }

    set({ data: data });
  },
}));
