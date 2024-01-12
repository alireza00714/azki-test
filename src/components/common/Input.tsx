import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: IProps) => (
  <input
    {...props}
    className={`w-full border border-gray-300 border-solid rounded-md px-3 transition-colors focus:border-gray-400 h-12 ${props.className}`}
  />
);

export default Input;
