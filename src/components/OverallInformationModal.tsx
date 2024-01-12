import { Dispatch, SetStateAction } from "react";
import Dialog from "./common/Dialog";
import useAuthStore from "../store/useAuthStore";
import enToFaNumStr from "../utils/functions/enToFaNumStr";
import useFormStore from "../store/useFormStore";

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const OverallInformation = (props: IProps) => {
  const { isOpen, setIsOpen } = props;
  const { firstName, lastName, phoneNumber } = useAuthStore();
  const {
    incidentDiscount,
    insuranceTitle,
    lastInsuranceCompany,
    thirdPersonDiscount,
    vehicleModel,
    vehicleType,
  } = useFormStore();
  return (
    <Dialog isOpen={isOpen} setIsOpen={setIsOpen}>
      <img
        src="/assets/svg/close.svg"
        onClick={() => setIsOpen(false)}
        className="absolute rotate-180 cursor-pointer size-5 right-4 top-4"
      />
      <h3 className="w-full mb-8 text-lg font-semibold text-center">
        اطلاعات کلی
      </h3>
      <div className="flex flex-col w-full gap-4">
        <div className="flex justify-between w-full">
          <p>نام:</p>
          <p>
            {firstName} {lastName}
          </p>
        </div>
        <div className="flex justify-between w-full">
          <p>شماره موبایل:</p>
          <p>{enToFaNumStr(phoneNumber)}</p>
        </div>
        <div className="flex justify-between w-full">
          <p>نوع بیمه:</p>
          <p>{insuranceTitle}</p>
        </div>
        <div className="flex justify-between w-full">
          <p>نوع وسیله نقلیه:</p>
          <p>{vehicleType?.label}</p>
        </div>
        <div className="flex justify-between w-full">
          <p>مدل وسیله نقلیه:</p>
          <p>{vehicleModel?.label}</p>
        </div>
        <div className="flex justify-between w-full">
          <p>شرکت بیمه گر قبلی:</p>
          <p>{lastInsuranceCompany?.label}</p>
        </div>
        <div className="flex justify-between w-full">
          <p>تخفیف بیمه شخص ثالث:</p>
          <p>{thirdPersonDiscount?.label}</p>
        </div>
        <div className="flex justify-between w-full">
          <p>تخفیف حوادث راننده:</p>
          <p>{incidentDiscount?.label}</p>
        </div>
      </div>
    </Dialog>
  );
};

export default OverallInformation;
