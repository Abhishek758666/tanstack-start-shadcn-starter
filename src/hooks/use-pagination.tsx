"";
import { useCallback, useMemo, useState } from "react";

export type IInitalFilterValue =
	| {
			limit: number;
			page: number;
	  }
	| any;

const initialPaginateFilterValue: IInitalFilterValue = {
	page: 1,
	limit: 10,
};

const useServerSidePagination = () => {
	const [initialFilterList, setInitialFilterList] =
		useState<IInitalFilterValue>(initialPaginateFilterValue);

	const handleServerSideTableChange = useCallback(
		(pagination: IInitalFilterValue) => {
			const updatedPagination = {
				...pagination,
				page: pagination?.page ?? initialPaginateFilterValue.page,
				limit: pagination?.limit ?? initialPaginateFilterValue.limit,
			};

			setInitialFilterList(updatedPagination);
		},
		[],
	);

	const hardResetFilters = useCallback(() => {
		setInitialFilterList(initialPaginateFilterValue);
	}, []);

	const serverPaginationParams = useMemo(
		() => ({
			initialFilterList,
			handleServerSideTableChange,
			setInitialFilterList,
			hardResetFilters,
		}),
		[initialFilterList, handleServerSideTableChange, hardResetFilters],
	);

	return serverPaginationParams;
};

export default useServerSidePagination;
