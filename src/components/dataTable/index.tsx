/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import {
	type ColumnDef,
	type ColumnFiltersState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type PaginationState,
	type SortingState,
	useReactTable,
} from "@tanstack/react-table";
import React, { type Dispatch, type SetStateAction, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import type { IInitalFilterValue } from "@/hooks/use-pagination";
import { cn } from "@/lib/utils";
import { TableFooter } from "./tableFooter";
import { TableHeader } from "./tableHeader";

export interface DataTableProps<TData extends { id: string | number }, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	pagination?: boolean;
	onRowClick?: (
		row: TData,
		e?: React.MouseEvent<HTMLTableRowElement, MouseEvent> | any,
	) => void;
	rowClickable?: boolean;
	isLoading?: boolean;
	sorting?: SortingState;
	setSorting?: Dispatch<SetStateAction<SortingState>>;
	setPageSize?: Dispatch<SetStateAction<number>>;
	setCurrentPage?: Dispatch<SetStateAction<number>>;
	currentPage?: number;
	pageSize?: number;
	manualPagination?: boolean;
	rowCount?: number;
	initialFilterList?: IInitalFilterValue;
	handleServerSideTableChange?: (filters: IInitalFilterValue) => void;
	rowSelection?: Record<string, boolean>;
	onRowSelectionChange?: (rowSelection: Record<string, boolean>) => void;
	enableRowSelection?: boolean;
}

export function DataTable<TData extends { id: string | number }, TValue>({
	columns,
	data,
	pagination = true,
	onRowClick,
	rowClickable = true,
	isLoading = false,
	sorting: externalSorting,
	setSorting: externalSetSorting,
	setPageSize,
	setCurrentPage,
	currentPage = 1,
	pageSize = 10,
	manualPagination = false,
	rowCount = 10,
	initialFilterList,
	handleServerSideTableChange,
	rowSelection: externalRowSelection,
	onRowSelectionChange,
	enableRowSelection = false,
}: DataTableProps<TData, TValue>) {
	const [paginationState, setPaginationState] = React.useState<PaginationState>(
		{
			pageIndex: currentPage - 1,
			pageSize,
		},
	);

	useEffect(() => {
		if (initialFilterList) {
			setPaginationState({
				...initialFilterList,
				pageSize: paginationState.pageSize,
				pageIndex: initialFilterList?.page ? initialFilterList.page - 1 : 0,
			});
		}
	}, [initialFilterList, paginationState.pageSize]);

	const [internalSorting, setInternalSorting] = React.useState<SortingState>(
		[],
	);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[],
	);
	const sorting = externalSorting ?? internalSorting;
	const setSorting = externalSetSorting ?? setInternalSorting;

	const [internalRowSelection, setInternalRowSelection] = React.useState({});
	const rowSelection = externalRowSelection ?? internalRowSelection;
	const setRowSelection = onRowSelectionChange
		? (newState: any) => {
				onRowSelectionChange(newState);
			}
		: setInternalRowSelection;

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		onRowSelectionChange: setRowSelection,
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			rowSelection,
			sorting,
			columnFilters,
			pagination: paginationState,
		},
		onPaginationChange: setPaginationState,
		manualPagination: manualPagination,
		...(manualPagination && { rowCount: rowCount }),
		enableRowSelection,
		getRowId: (row) => String(row.id),
		initialState: {
			pagination: {
				pageSize: paginationState.pageSize,
				pageIndex: paginationState.pageIndex,
			},
		},
	});

	const setTablePaginationProps = () => {
		if (setPageSize) {
			setPageSize(table.getState().pagination.pageSize);
		}
		if (setCurrentPage) {
			setCurrentPage(table.getState().pagination.pageIndex + 1);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setTablePaginationProps();

		handleServerSideTableChange?.({
			...initialFilterList,
			page: table.getState().pagination.pageIndex + 1,
			limit: table.getState().pagination.pageSize,
			// sortOrder,
		});
	}, [
		table.getState().pagination.pageSize,
		table.getState().pagination.pageIndex,
		sorting,
		handleServerSideTableChange,
		initialFilterList,
	]);

	const handleTableRowClick = (
		row: TData,
		e?: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
	) => {
		if (rowClickable && onRowClick) {
			onRowClick(row, e);
		}
	};

	if (isLoading) {
		const skeletonRows = Array.from({ length: pageSize });
		return (
			<div className="flex flex-col">
				<div className="rounded-lg p-4 overflow-hidden relative">
					<Table className="border">
						<TableHeader table={table} />
						<TableBody>
							{skeletonRows.map((_, index) => (
								<TableRow
									key={index}
									className={cn(
										"border",
										index % 2 !== 1
											? "bg-neutral-200 dark:bg-accent"
											: "bg-background",
									)}
								>
									{Array.from({
										length: table.getVisibleLeafColumns().length,
									}).map((_, cellIndex) => (
										<TableCell
											key={cellIndex}
											className={cn(
												"py-0.5",
												cellIndex === 0 && "rounded-l-lg",
												cellIndex ===
													table.getVisibleLeafColumns().length - 1 &&
													"rounded-r-lg",
											)}
										>
											<Skeleton className="h-11.25 max-w-37.5" />
										</TableCell>
									))}
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col">
			<div className="rounded-lg p-4 overflow-hidden relative bg-background border">
				<Table>
					<TableHeader table={table} />
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row, index) => {
								return (
									<TableRow
										onClick={(e) => {
											handleTableRowClick(row.original, e);
										}}
										key={row.id === undefined ? index : index}
										data-state={row.getIsSelected() && "selected"}
										className={cn(
											"border-b-0",
											rowClickable ? "cursor-pointer" : "cursor-default",
											index % 2 !== 1
												? "bg-neutral-200 dark:bg-accent"
												: "bg-background",
										)}
										data-cy={`row-${index}`}
									>
										{row.getVisibleCells().map((cell, cellIndex) => (
											<TableCell
												onClick={(e) => {
													if (
														cell.getContext().column.id ===
														"colTagsDontUseAnyWhereElseTags"
													) {
														e.stopPropagation();
													}
												}}
												key={cell.id}
												className={cn(
													"text-sm py-0.5",
													cellIndex === 0 && "rounded-l-lg",
													cellIndex === row.getVisibleCells().length - 1 &&
														"rounded-r-lg",
												)}
												data-cy={`cell-${index}-${cellIndex}`}
											>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext(),
												)}
											</TableCell>
										))}
									</TableRow>
								);
							})
						) : (
							<TableRow data-cy="row-no-results">
								<TableCell
									colSpan={columns.length}
									className="h-96 text-center"
									data-cy="cell-no-results"
								>
									No data found, please try again.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			{pagination && (
				<TableFooter table={table} enableRowSelection={enableRowSelection} />
			)}
		</div>
	);
}
