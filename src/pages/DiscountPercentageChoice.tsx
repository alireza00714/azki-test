import { useState } from "react";
import { useThirdDiscount } from "../api/hooks";
import Button from "../components/common/Button";
import SelectBox from "../components/common/SelectBox";
import useFormStore from "../store/useFormStore";
import { TOption } from "../types/commons";
import OverallInformation from "../components/OverallInformationModal";

const DiscountPercentageChoice = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    incidentDiscount,
    thirdPersonDiscount,
    updateIncidentDiscount,
    updateThirdPersonDiscount,
  } = useFormStore();
  const { data } = useThirdDiscount();

  const options: TOption[] = (data ?? []).map((item) => ({
    label: item.title,
    value: item.id,
  }));

  return (
    <>
      <p className="text-gray-400">
        درصد تخفیف بیمه شخص ثالث و حوادث راننده را وارد کنید
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex-1">
          <SelectBox
            placeholder="درصد تخفیف ثالث"
            options={options}
            value={thirdPersonDiscount}
            onChange={(discount) => updateThirdPersonDiscount(discount)}
          />
        </div>
        <div className="flex-1">
          <SelectBox
            placeholder="درصد تخفیف حوادث راننده"
            options={options}
            value={incidentDiscount}
            onChange={(discount) => updateIncidentDiscount(discount)}
          />
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <Button
          text="استعلام قیمت"
          variant="primary"
          disabled={!incidentDiscount?.value || !thirdPersonDiscount?.value}
          onClick={() => setIsDialogOpen(true)}
        />
      </div>
      <OverallInformation isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
    </>
  );
};

export default DiscountPercentageChoice;
