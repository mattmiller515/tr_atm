import { Control, Controller } from "react-hook-form";
import { NumericFormat } from "react-number-format";

export const Input = ({
  control,
  name,
  isCurrency,
  maxLength,
  ref,
}: {
  control: Control<any>;
  name: string;
  isCurrency?: boolean;
  maxLength?: number;
  ref?: React.Ref<HTMLInputElement>;
}) => {
  const currencyProps = isCurrency
    ? {
        thousandSeparator: ",",
        decimalScale: 2,
        fixedDecimalScale: true,
      }
    : {};

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <NumericFormat
          {...field}
          {...currencyProps}
          allowNegative={false}
          maxLength={maxLength}
          autoComplete="off"
          className="bg-gray-100 text-black w-32"
          getInputRef={ref}
          onValueChange={(values) => {
            field.onChange(values.floatValue ?? "");
          }}
        />
      )}
    />
  );
};
