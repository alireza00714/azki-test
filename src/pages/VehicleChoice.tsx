import { useVehicleTypes } from "../api/hooks";
import Button from "../components/common/Button";
import SelectBox from "../components/common/SelectBox";
import type { TOption } from "../types/commons";
import { useNavigate } from "react-router-dom";
import useFormStore from "../store/useFormStore";

const VehicleChoice = () => {
  const { vehicleModel, vehicleType, updateVehicleModel, updateVehicleType } =
    useFormStore();
  const navigate = useNavigate();
  const { data } = useVehicleTypes();

  const vehicleTypeOptions: TOption[] = (data ?? []).map((item) => ({
    value: item.id,
    label: item.title,
  }));
  const selectedVehicleIndex = vehicleTypeOptions.findIndex(
    (vehicle) => vehicle.value === vehicleType?.value
  );
  const vehicleModelOptions: TOption[] =
    selectedVehicleIndex > -1
      ? (data ?? [])[selectedVehicleIndex].usages.map((usage) => ({
          label: usage.title,
          value: usage.id,
        }))
      : [];

  return (
    <>
      <p className="text-gray-400">نوع و مدل خودروی خود را انتخاب کنید</p>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex-1">
          <SelectBox
            placeholder="نوع خودرو"
            options={vehicleTypeOptions}
            value={vehicleType}
            onChange={(vehicleType) => {
              updateVehicleType(vehicleType);
              updateVehicleModel(null);
            }}
          />
        </div>
        <div className="flex-1">
          <SelectBox
            placeholder="مدل خودرو"
            value={vehicleModel}
            onChange={(vehicleModel) => updateVehicleModel(vehicleModel)}
            isDisable={!vehicleType?.value}
            options={vehicleModelOptions}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <Button
          text="بازگشت"
          variant="secondary"
          onClick={() => navigate("/insurance-choice")}
          iconright={
            <img src="/assets/svg/arrow.svg" className="rotate-180 size-3" />
          }
        />
        <Button
          text="مرحله بعد"
          variant="secondary"
          disabled={!vehicleModel?.value || !vehicleModel.value}
          onClick={() => navigate("/last-insurance-company-choice")}
          iconleft={<img src="/assets/svg/arrow.svg" className="size-3" />}
        />
      </div>
    </>
  );
};

export default VehicleChoice;
