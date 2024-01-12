import { useEffect } from "react";
import useFormStore from "../../store/useFormStore";
import { Outlet, useNavigate } from "react-router-dom";

const InsuranceLayout = () => {
  const { insuranceTitle } = useFormStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!insuranceTitle) navigate("/insurance-choice");
  }, [insuranceTitle, navigate]);

  return (
    <div className="flex flex-col gap-4 lg:gap-10 lg:px-20 lg:mt-10">
      <h2 className="text-base font-medium text-center lg:text-right lg:text-3xl">
        {insuranceTitle}
      </h2>
      <Outlet />
    </div>
  );
};

export default InsuranceLayout;
