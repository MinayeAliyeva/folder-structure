import { Button as AntdButton, type ButtonProps } from "antd";
import type { FC } from "react";
interface IButtonProps extends ButtonProps {
  buttonText: string;
}
const Button: FC<IButtonProps> = ({
  buttonText,
  type = "primary",
  ...rest
}) => {
  return (
    <AntdButton type={type} {...rest}>
      {buttonText}
    </AntdButton>
  );
};

export default Button;
