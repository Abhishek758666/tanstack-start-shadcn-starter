import type { Table } from "@tanstack/react-table";
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from "lucide-react";
import { type KeyboardEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function TableFooter<TData>({
	table,
	enableRowSelection = false,
}: {
	table: Table<TData>;
	enableRowSelection?: boolean;
}) {
	const [pageInput, setPageInput] = useState<string>("");

	const handlePageInputChange = (value: string) => {
		const numValue = parseInt(value);
		const maxPages = table.getPageCount();

		// Only allow valid numbers within range or empty string
		if (value === "" || (numValue >= 1 && numValue <= maxPages)) {
			setPageInput(value);
		}
	};

	const handlePageInputSubmit = () => {
		const pageNumber = parseInt(pageInput);
		const totalPages = table.getPageCount();

		if (pageNumber && pageNumber >= 1 && pageNumber <= totalPages) {
			table.setPageIndex(pageNumber - 1); // Convert to 0-based index
			setPageInput(""); // Clear input after successful navigation
		}
	};

	const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handlePageInputSubmit();
		}
	};

	return (
		<div
			className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-4 sm:p-5 py-6 sm:py-10"
			data-cy="table-footer"
		>
			<div className="flex-1 text-sm text-muted-foreground text-center sm:text-left">
				{enableRowSelection && (
					<>
						{table.getFilteredSelectedRowModel().rows.length} of{" "}
						{table.getFilteredRowModel().rows.length} row(s) selected.
					</>
				)}
			</div>
			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:space-x-4 lg:space-x-8">
				<div className="flex items-center justify-center sm:justify-start space-x-2">
					<p className="text-sm">Rows per page</p>
					<Select
						value={`${table.getState().pagination.pageSize}`}
						onValueChange={(value) => {
							table.setPageSize(Number(value));
						}}
						data-cy="select-page-size"
					>
						<SelectTrigger
							className="h-8 w-17.5"
							data-cy="button-page-size-trigger"
						>
							<SelectValue placeholder={table.getState().pagination.pageSize} />
						</SelectTrigger>
						<SelectContent side="top">
							{[10, 50, 100].map((pageSize) => (
								<SelectItem
									key={pageSize}
									value={`${pageSize}`}
									data-cy={`option-page-size-${pageSize}`}
								>
									{pageSize}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				{/* Page display and manual input */}
				<div className="flex items-center justify-center space-x-1 sm:space-x-2">
					<Button
						variant="outline"
						className="hidden h-7 w-7 sm:h-8 sm:w-8 p-0 lg:flex"
						onClick={() => table.setPageIndex(0)}
						disabled={!table.getCanPreviousPage()}
						data-cy="button-first-page"
					>
						<span className="sr-only">Go to first page</span>
						<ChevronsLeft
							className="h-3 w-3 sm:h-4 sm:w-4"
							data-cy="icon-chevronsleft"
						/>
					</Button>
					<Button
						variant="outline"
						className="h-7 w-7 sm:h-8 sm:w-8 p-0"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
						data-cy="button-previous-page"
					>
						<span className="sr-only">Go to previous page</span>
						<ChevronLeft
							className="h-3 w-3 sm:h-4 sm:w-4"
							data-cy="icon-chevronleft"
						/>
					</Button>

					<div className="flex items-center space-x-1 sm:space-x-2">
						<span className="text-sm font-medium">Page</span>
						<Input
							type="number"
							min="1"
							max={table.getPageCount()}
							placeholder={`${table.getState().pagination.pageIndex + 1}`}
							value={pageInput}
							onChange={(e) => handlePageInputChange(e.target.value)}
							onKeyPress={handleKeyPress}
							onBlur={handlePageInputSubmit}
							className="h-7 w-12 sm:h-8 sm:w-16 text-center text-sm [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
							data-cy="input-page-number"
						/>
						<span className="text-sm font-medium">
							of {table.getPageCount()}
						</span>
					</div>

					<Button
						variant="outline"
						className="h-7 w-7 sm:h-8 sm:w-8 p-0"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
						data-cy="button-next-page"
					>
						<span className="sr-only">Go to next page</span>
						<ChevronRight
							className="h-3 w-3 sm:h-4 sm:w-4"
							data-cy="icon-chevronright"
						/>
					</Button>
					<Button
						variant="outline"
						className="hidden h-7 w-7 sm:h-8 sm:w-8 p-0 lg:flex"
						onClick={() => table.setPageIndex(table.getPageCount() - 1)}
						disabled={!table.getCanNextPage()}
						data-cy="button-last-page"
					>
						<span className="sr-only">Go to last page</span>
						<ChevronsRight
							className="h-3 w-3 sm:h-4 sm:w-4"
							data-cy="icon-chevronsright"
						/>
					</Button>
				</div>

				{/* <Pagination table={table} /> */}
			</div>
		</div>
	);
}
