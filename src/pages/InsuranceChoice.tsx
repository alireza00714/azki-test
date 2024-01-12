import { useNavigate } from "react-router-dom";
import InsuranceChoiceButton from "../components/InsuranceChoiceButton";
import useFormStore from "../store/useFormStore";
import { EInsurance } from "../types/commons";

const InsuranceChoice = () => {
  const { updateInsuranceTitle, resetStore } = useFormStore();
  const navigate = useNavigate();

  const onClickItem = (title: string) => {
    resetStore();
    updateInsuranceTitle(title);
    navigate("/vehicle-choice");
  };

  return (
    <div className="flex flex-col gap-4 lg:gap-10 lg:px-20 lg:mt-10">
      <h2 className="text-base font-medium text-center lg:text-right lg:text-3xl">
        انتخاب بیمه
      </h2>
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
        <InsuranceChoiceButton
          icon={<img className="size-10" src="/assets/svg/insurance.svg" />}
          text={EInsurance.ThirdPerson}
          onClick={() => onClickItem(EInsurance.ThirdPerson)}
        />
        <InsuranceChoiceButton
          isDisabled
          icon={<img className="size-10" src="/assets/svg/insurance.svg" />}
          text={EInsurance.BodyParts}
          onClick={() => updateInsuranceTitle(EInsurance.BodyParts)}
        />
      </div>
    </div>
  );
};

export default InsuranceChoice;
