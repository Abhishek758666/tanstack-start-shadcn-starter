import type { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { DashboardOrder } from "./_types/interface";

export const Columns: ColumnDef<DashboardOrder>[] = [
	{
		id: "select",
		header: ({ table }) => {
			return (
				<Checkbox
					checked={
						table.getIsAllPageRowsSelected() ||
						(table.getIsSomePageRowsSelected() && "indeterminate")
					}
					onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
					aria-label="Select all"
				/>
			);
		},
		cell: ({ row }) => {
			return (
				<Checkbox
					checked={row.getIsSelected()}
					onCheckedChange={(value) => row.toggleSelected(!!value)}
					aria-label="Select row"
				/>
			);
		},
	},

	{
		accessorKey: "id",
		header: "Order ID",
		cell: ({ row }) => {
			return <span>{row.original.id}</span>;
		},
	},
	{
		accessorKey: "customerName",
		header: "Customer Name",
		cell: ({ row }) => {
			return <span>{row.original.id}</span>;
		},
	},
	{
		accessorKey: "email",
		header: "Email",
		cell: ({ row }) => {
			return <span>{row.original.id}</span>;
		},
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => {
			return <span>{row.original.id}</span>;
		},
	},
	{
		accessorKey: "amount",
		header: "Amount",
		enableSorting: true,
		cell: ({ row }) => {
			return <span>{row.original.id}</span>;
		},
	},
	{
		accessorKey: "paymentMethod",
		header: "Payment Method",
		cell: ({ row }) => {
			return <span>{row.original.id}</span>;
		},
	},
	{
		accessorKey: "createdAt",
		header: "Created At",
		cell: ({ row }) => {
			return <span>{row.original.id}</span>;
		},
	},
	{
		accessorKey: "actions",
		header: "Actions",
		cell: () => <Actions />,
	},
];

const Actions = () => {
	return (
		<div className="flex items-center gap-2">
			<Button variant="outline" size="icon">
				<Eye className="h-4 w-4" />
			</Button>
			<Button variant="outline" size="icon">
				<Pencil className="h-4 w-4" />
			</Button>
			<Button variant="outline" size="icon">
				<Trash2 className="h-4 w-4" />
			</Button>
		</div>
	);
};
