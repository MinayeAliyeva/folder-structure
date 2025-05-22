import "./App.css";
import Table from "./components/common/table";
import type { ColumnsType } from "antd/es/table";
import { IoIosAdd } from "react-icons/io";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import { useState } from "react";
interface DataType {
  key: string;
  name: string;
  age: number;
}
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
];

const dataSource: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
  },
  {
    key: "4",
    name: "Joe Black",
    age: 32,
  },
];
interface IState {
  tableData: Partial<DataType>[];
}
function App() {
  const [state, setState] = useState<IState>({ tableData: dataSource });
  const addRow = () => {
    if (state.tableData.length > dataSource.length) return;
    setState((prev) => ({
      ...prev,
      tableData: [
        ...prev.tableData,
        { key: (dataSource.length + 1).toString() },
      ],
    }));
  };
  console.log("dataSource", dataSource);
  return (
    <Card>
      <Button
        buttonText="Add"
        icon={<IoIosAdd />}
        value="small"
        onClick={addRow}
      />
      <Table columns={columns} dataSource={state?.tableData} />
    </Card>
  );
}

export default App;
