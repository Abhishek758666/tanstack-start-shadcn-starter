import { DataTable } from "@/components/dataTable";
import type { DashboardOrder } from "./_types/interface";
import { Columns } from "./Columns";
import data from "./data.json";

export const Table = () => {
	const DashboardData = data as DashboardOrder[];
	return (
		<div>
			<DataTable columns={Columns} data={DashboardData} />
		</div>
	);
};
