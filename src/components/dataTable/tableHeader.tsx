import { flexRender, type Table } from "@tanstack/react-table";
import {
	TableHeader as ShadTableHeader,
	TableHead,
	TableRow,
} from "@/components/ui/table";
import { Text } from "../ui/text";

export const TableHeader = <TData, _>({ table }: { table: Table<TData> }) => {
	return (
		<ShadTableHeader
			className="bg-background [&_tr]:border-b-0  rounded-xl!"
			data-cy="table-header"
		>
			{table.getHeaderGroups().map((headerGroup, groupIndex) => (
				<TableRow key={headerGroup.id} data-cy={`header-row-${groupIndex}`}>
					{headerGroup.headers.map((header, headerIndex) => {
						return (
							<TableHead
								key={header.id}
								className="py-3"
								data-cy={`header-cell-${groupIndex}-${headerIndex}`}
							>
								<Text variant="small" className="text-muted-foreground">
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext(),
											)}
								</Text>
							</TableHead>
						);
					})}
				</TableRow>
			))}
		</ShadTableHeader>
	);
};
