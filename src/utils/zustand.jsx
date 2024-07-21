import { create } from "zustand";

export const useMode = create((set) => ({
    darkMode: false,
    toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}))


export default useMode;
