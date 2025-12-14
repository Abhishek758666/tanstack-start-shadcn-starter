import { DataTable } from "@/components/dataTable";
import { DashboardColumns, DraggableRow } from "./components/table/columns";
import DashboardToolbar from "./components/table/toolbar";
import data from "./data.json";

const DataTablePage = () => {
  return (
    <div className="p-4">
      <DataTable
        data={data}
        columns={DashboardColumns}
        DraggableRow={DraggableRow}
        toolbar={(table) => <DashboardToolbar table={table} />}
        enableRowSelection
      />
    </div>
  );
};

export default DataTablePage;
