import { type FC, type ReactNode } from "react";
import { Modal as AntdModal, type ModalProps } from "antd";

interface IModalProps extends ModalProps {
  isModalOpen: boolean;
  children: ReactNode;
}
const Modal: FC<IModalProps> = ({ children, isModalOpen, ...rest }) => {
  return (
    <>
      <AntdModal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        {...rest}
      >
        {children}
      </AntdModal>
    </>
  );
};

export default Modal;
