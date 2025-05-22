import { Table as AntdTable } from "antd";
import type { ColumnsType } from "antd/es/table";

interface ITableProps<T> {
  columns: ColumnsType<T>;
  dataSource: T[];
}
const Table = <T,>({ columns, dataSource }: ITableProps<T>) => (
  <AntdTable columns={columns} dataSource={dataSource} />
);

export default Table;
