import { useQuery } from "@tanstack/react-query";
import type {
  IInsuranceCompaniesResponse,
  IThirdDiscount,
  IVehicleTypesResponse,
} from "./types";
import instance from "./instance";

export const useVehicleTypes = () => {
  return useQuery({
    queryKey: ["vehicleTypes"],
    queryFn: async () => {
      const { data } = await instance.get<IVehicleTypesResponse[]>(
        "product/vehicle/types"
      );
      return data;
    },
  });
};

export const useInsuranceCompanies = () => {
  return useQuery({
    queryKey: ["useInsuranceCompanies"],
    queryFn: async () => {
      const { data } = await instance.get<IInsuranceCompaniesResponse[]>(
        "product/third/companies"
      );
      return data;
    },
  });
};

export const useThirdDiscount = () => {
  return useQuery({
    queryKey: ["useInsuranceCompanies"],
    queryFn: async () => {
      const { data } = await instance.get<IThirdDiscount[]>(
        "product/third/third-discounts"
      );
      return data;
    },
  });
};
