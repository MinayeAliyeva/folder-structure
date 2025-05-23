import "./App.css";
import Table from "./components/common/table";
import type { ColumnsType } from "antd/es/table";
import { IoIosAdd } from "react-icons/io";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import { useState } from "react";
import Modal from "./components/ui/Modal";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import { editUser } from "./store/slices/userSlicee";
import { Col, Row } from "antd";
import Input from "./shared/components/form/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./utils/validation/validateSchema";

interface DataType {
  key: string;
  name: string;
  age: number;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tableData } = useSelector((state: RootState) => state?.users);
  const dispatch = useDispatch();
  console.log("isModalOpen", isModalOpen);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns: ColumnsType<Partial<DataType>> = [
    {
      title: "Key",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <div>{text ? text : <input />}</div>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            buttonText="Edit"
            onClick={() => dispatch(editUser(record))}
          />
          <Button buttonText="Delete" style={{ background: "red" }} />
        </div>
      ),
    },
  ];
  const {
    control,
    formState: { errors },
    // handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      age: 0,
    },
  });

  return (
    <Card>
      <Button
        buttonText="Add"
        icon={<IoIosAdd />}
        value="small"
        onClick={showModal}
      />
      <Modal isModalOpen={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {" "}
        <Row className="gap-2">
          <Col sm={6} md={12} lg={24}>
            <Input
              name="name"
              placeholder="User Name"
              control={control as any}
              error={errors?.name?.message}
            />
          </Col>
          <Col sm={6} md={12} lg={24}>
            <Input
              name="age"
              placeholder="User Age"
              type="number"
              control={control as any}
              error={errors?.age?.message}
            />
          </Col>
        </Row>
      </Modal>
      <Table columns={columns} dataSource={tableData} />
    </Card>
  );
}

export default App;
//edit,delete,save,cancel
