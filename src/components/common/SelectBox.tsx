import Select, { SingleValue } from "react-select";
import type { TOption } from "../../types/commons";

interface Props {
  options?: TOption[];
  value?: TOption | null;
  onChange?: (value: SingleValue<TOption>) => void;
  placeholder?: string;
  isDisable?: boolean;
}

const SelectBox = (props: Props) => {
  const { value, options, onChange, placeholder, isDisable } = props;
  return (
    <Select
      options={options}
      value={value}
      onChange={(value) => onChange?.(value)}
      placeholder={placeholder}
      isDisabled={isDisable}
      styles={{
        control: (baseStyles, props) => ({
          ...baseStyles,
          height: "3rem",
          border: props.isFocused
            ? "1px solid hsl(0, 0%, 70%) !important"
            : baseStyles.border,
          boxShadow: props.isFocused ? "none" : baseStyles.boxShadow,
        }),
        indicatorSeparator: () => ({ display: "none" }),
      }}
    />
  );
};

export default SelectBox;
