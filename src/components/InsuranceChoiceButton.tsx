import { ReactNode } from "react";

interface IProps {
  text: string;
  icon: ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
}

const InsuranceChoiceButton = (props: IProps) => {
  const { icon, text, isDisabled, onClick } = props;
  return (
    <button
      className="flex flex-col items-center min-w-full gap-4 p-4 transition-colors border border-gray-200 border-solid rounded-lg hover:border-gray-300 hover:bg-gray-100 lg:min-w-40 disabled:opacity-50"
      disabled={isDisabled}
      onClick={() => !isDisabled && onClick?.()}
    >
      <span className="">{icon}</span>
      <span className="font-semibold">{text}</span>
    </button>
  );
};

export default InsuranceChoiceButton;
