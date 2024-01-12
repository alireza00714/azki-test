import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IAuthStore {
  isLoggedIn: boolean;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  updateFirstName: (firstName: string) => void;
  updateLastName: (lastName: string) => void;
  updatePhoneNumber: (phoneNumber: string) => void;
  login: () => void;
}

const useAuthStore = create<IAuthStore>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      updateFirstName: (firstName) => set({ firstName }),
      updateLastName: (lastName) => set({ lastName }),
      updatePhoneNumber: (phoneNumber) => set({ phoneNumber }),
      login: () => set({ isLoggedIn: true }),
    }),
    { name: "auth-storage" }
  )
);

export default useAuthStore;
