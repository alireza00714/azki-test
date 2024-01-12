interface IVehicleTypesUsage {
  id: number;
  title: string;
}

export interface IVehicleTypesResponse {
  id: number;
  title: string;
  usages: IVehicleTypesUsage[];
}

interface IHelpIcon {
  title: string;
  url: string;
}

interface IFeature {
  icon: string;
  title: string;
  newRelease: boolean;
  description: string;
}

interface IInstallmentPercentageAndMonth {
  percent: number;
  month: number;
}

interface IInstallment {
  enable: boolean;
  enableForSellers: boolean;
  installments: IInstallmentPercentageAndMonth[];
  title: string;
  label: string;
  description: string;
  type: number;
  default: boolean;
}

export interface IInsuranceCompaniesResponse {
  id: number;
  title: string;
  satisfaction: number;
  wealthLevel: number;
  complaintResponseTime: number;
  branchNumber: number;
  enable: boolean;
  marketerEnable: boolean;
  available: boolean;
  maxBranchDiscount: number;
  branchDiscountPercent: number;
  maxCompanyDiscount: number;
  companyDiscountPercent: number;
  maxBimitoDiscount: number;
  bimitoDiscountPercent: number;
  maxMarketerDiscount: number;
  marketerDiscountPercent: number;
  bimitoDiscountTitle: string;
  azkiDiscountTitle: string;
  hideDiscount: boolean;
  description: string;
  productDescription: string;
  giftTitle: string;
  hasGift: boolean;
  onlineDamage: boolean;
  features: IFeature[];
  installments: IInstallment[];
  icon: string;
  helpIcons: IHelpIcon[];
  oldVehicleAge: number;
  oldVehiclePercent: number;
  oldVehiclePenaltyPercent: number;
  extraPercent: number;
  extraPenaltyPercent: number;
  damagedShortTermEnable: boolean;
  maxDayOfPenalty: number;
  forgivenessDescription: string;
  enableExpireDatePayment: boolean;
  shortPenaltyForgiveness: boolean;
  longPenaltyForgiveness: boolean;
  cashPayment: boolean;
  azkiPenaltyDiscountEnable: boolean;
  maxAzkiPenaltyDiscount: number;
}

export interface IThirdDiscount {
  id: number;
  title: string;
}
