import { ButtonHTMLAttributes, ReactNode } from "react";

type TVariant = "primary" | "secondary";
type TIcon = ReactNode;

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TVariant;
  iconright?: TIcon;
  iconleft?: TIcon;
  text?: string;
  isLoading?: boolean;
}

const Button = (props: IProps) => {
  const {
    variant = "primary",
    iconright,
    iconleft,
    text,
    isLoading,
    ...buttonProps
  } = props;

  const buttonVariantClassName: Record<TVariant, string> = {
    primary: "text-white bg-primary hover:bg-dark-primary",
    secondary:
      "text-green-700 border border-solid border-primary hover:bg-gray-100",
  };

  return (
    <button
      className={`px-4 lg:px-8 py-3 flex gap-4 items-center rounded-3xl disabled:opacity-40 transition-colors ${buttonVariantClassName[variant]}`}
      type="button"
      {...buttonProps}
      onClick={(e) => {
        if (isLoading) return;
        if (props.onClick) props.onClick(e);
      }}
    >
      {isLoading ? (
        "loading..."
      ) : (
        <>
          {iconright && <span>{iconright}</span>}
          <span>{text}</span>
          {iconleft && <span>{iconleft}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
