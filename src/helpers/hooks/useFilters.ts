import React, { useState } from "react";
import type { IFilters } from "../../interfaces";

export const useFilters = (initialFilters: IFilters) => {
	const [filters, setFilters] = useState(initialFilters);

	const changeFilter = (key: string, value: string | null | number) => {
		setFilters((prev) => {
			return { ...prev, [key]: value };
		});
	};

   return {filters, changeFilter }
};
