import { create } from "zustand";
import type { TOption } from "../types/commons";

interface IFormStore {
  insuranceTitle: string;
  vehicleType: TOption | null;
  vehicleModel: TOption | null;
  lastInsuranceCompany: TOption | null;
  thirdPersonDiscount: TOption | null;
  incidentDiscount: TOption | null;
  updateInsuranceTitle: (title: string) => void;
  updateVehicleType: (vehicleType: TOption | null) => void;
  updateVehicleModel: (vehicleModel: TOption | null) => void;
  updateLastInsuranceCompany: (company: TOption | null) => void;
  updateThirdPersonDiscount: (discount: TOption | null) => void;
  updateIncidentDiscount: (discount: TOption | null) => void;
  resetStore: () => void;
}

const useFormStore = create<IFormStore>((set) => ({
  insuranceTitle: "",
  vehicleModel: null,
  vehicleType: null,
  lastInsuranceCompany: null,
  thirdPersonDiscount: null,
  incidentDiscount: null,

  resetStore: () =>
    set({
      insuranceTitle: "",
      vehicleModel: null,
      vehicleType: null,
      lastInsuranceCompany: null,
      thirdPersonDiscount: null,
      incidentDiscount: null,
    }),

  updateInsuranceTitle: (title) => set({ insuranceTitle: title }),

  updateVehicleType: (vehicleType) => set({ vehicleType }),
  updateVehicleModel: (vehicleModel) => set({ vehicleModel }),

  updateLastInsuranceCompany: (company) =>
    set({ lastInsuranceCompany: company }),

  updateIncidentDiscount: (discount) => set({ incidentDiscount: discount }),
  updateThirdPersonDiscount: (discount) =>
    set({ thirdPersonDiscount: discount }),
}));

export default useFormStore;
