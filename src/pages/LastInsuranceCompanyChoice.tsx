import { useInsuranceCompanies } from "../api/hooks";
import Button from "../components/common/Button";
import SelectBox from "../components/common/SelectBox";
import type { TOption } from "../types/commons";
import { useNavigate } from "react-router-dom";
import useFormStore from "../store/useFormStore";

const LastInsuranceCompanyChoice = () => {
  const { lastInsuranceCompany, updateLastInsuranceCompany } = useFormStore();
  const navigate = useNavigate();
  const { data } = useInsuranceCompanies();

  const companiesOptions: TOption[] = (data ?? []).map((item) => ({
    label: item.title,
    value: item.id,
  }));

  return (
    <>
      <p className="text-gray-400">
        شرکت بیمه گر قبلی خود را در این بخش وارد کنید
      </p>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex-1">
          <SelectBox
            placeholder="شرکت بیمه گر قبلی"
            value={lastInsuranceCompany}
            options={companiesOptions}
            onChange={(company) => updateLastInsuranceCompany(company)}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <Button
          text="بازگشت"
          variant="secondary"
          iconright={
            <img src="/assets/svg/arrow.svg" className="rotate-180 size-3" />
          }
          onClick={() => navigate("/vehicle-choice")}
        />
        <Button
          text="مرحله بعد"
          variant="secondary"
          iconleft={<img src="/assets/svg/arrow.svg" className="size-3" />}
          disabled={!lastInsuranceCompany?.value}
          onClick={() => navigate("/discount-percentage-choice")}
        />
      </div>
    </>
  );
};

export default LastInsuranceCompanyChoice;
