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
    set({ errorState: false });
    const data = await getData(search);

    // NOTE: Така перевірка, бо з серверу вертається або повноцінна відповідь, або відповідь з помилкою,
    // в якій є поле "title"
    if (data.title) {
      set({ error: data, errorState: true });
    }

    set({ data });
  },
}));
