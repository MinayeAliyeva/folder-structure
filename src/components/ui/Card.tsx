import { Card as AntdCard, type CardProps } from "antd";
import type { FC, ReactNode } from "react";
interface ICardProps extends CardProps {
  children: ReactNode;
}
const Card: FC<ICardProps> = ({ children, ...rest }) => {
  return <AntdCard {...rest}>{children}</AntdCard>;
};

export default Card;
