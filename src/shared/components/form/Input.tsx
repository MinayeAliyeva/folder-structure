import { Input as AntdInput, type InputProps } from "antd";
import type { FC } from "react";
import { Controller, type Control, type FieldValues } from "react-hook-form";
interface IInputProps extends InputProps {
  name: string;
  control: Control<FieldValues>;
  error?: string;
}
const Input: FC<IInputProps> = ({ control, name, error, ...rest }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <AntdInput {...field} {...rest} />
          {error && (
            <div style={{ color: "red", fontSize: "12px" }}>{error}</div>
          )}
        </>
      )}
    />
  );
};

export default Input;
