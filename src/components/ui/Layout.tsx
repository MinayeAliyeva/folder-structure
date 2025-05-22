import { Layout as AntdLayout, type LayoutProps } from "antd";
import type { FC, ReactNode } from "react";
interface ILayoutProps extends LayoutProps {
  children: ReactNode;
}
const Layout: FC<ILayoutProps> = ({ children, ...rest }) => {
  return <AntdLayout {...rest}>{children}</AntdLayout>;
};

export default Layout;
