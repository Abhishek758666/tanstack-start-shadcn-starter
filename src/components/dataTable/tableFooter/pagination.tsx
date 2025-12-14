import type { Table } from "@tanstack/react-table";
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pagination<TData>({ table }: { table: Table<TData> }) {
	return (
		<div className="flex items-center space-x-1 sm:space-x-2">
			<Button
				variant="outline"
				className="hidden h-7 w-7 sm:h-8 sm:w-8 p-0 lg:flex"
				onClick={() => table.setPageIndex(0)}
				disabled={!table.getCanPreviousPage()}
			>
				<span className="sr-only">Go to first page</span>
				<ChevronsLeft className="h-3 w-3 sm:h-4 sm:w-4" />
			</Button>
			<Button
				variant="outline"
				className="h-7 w-7 sm:h-8 sm:w-8 p-0"
				onClick={() => table.previousPage()}
				disabled={!table.getCanPreviousPage()}
			>
				<span className="sr-only">Go to previous page</span>
				<ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
			</Button>
			<Button
				variant="outline"
				className="h-7 w-7 sm:h-8 sm:w-8 p-0"
				onClick={() => table.nextPage()}
				disabled={!table.getCanNextPage()}
			>
				<span className="sr-only">Go to next page</span>
				<ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
			</Button>
			<Button
				variant="outline"
				className="hidden h-7 w-7 sm:h-8 sm:w-8 p-0 lg:flex"
				onClick={() => table.setPageIndex(table.getPageCount() - 1)}
				disabled={!table.getCanNextPage()}
			>
				<span className="sr-only">Go to last page</span>
				<ChevronsRight className="h-3 w-3 sm:h-4 sm:w-4" />
			</Button>
		</div>
	);
}
