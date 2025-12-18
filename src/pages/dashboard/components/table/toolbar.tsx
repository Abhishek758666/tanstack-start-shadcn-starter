import type { Table } from "@tanstack/react-table";
import { ChevronDown, Columns2, Plus, Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { DataTableOrder } from "@/interface/dashboard";
import { cn } from "@/lib/utils";

interface DataTableToolbarProps {
  table: Table<DataTableOrder>;
}

const DataTableToolbar = ({ table }: DataTableToolbarProps) => {
  const [searchValue, setSearchValue] = useState("");
  const statusColumn = table.getColumn("status");
  const paymentMethodColumn = table.getColumn("paymentMethod");
  const customerNameColumn = table.getColumn("customerName");

  const handleSearch = (value: string) => {
    setSearchValue(value);
    customerNameColumn?.setFilterValue(value || undefined);
  };

  const clearSearch = () => {
    setSearchValue("");
  };

  const statusFilterValue = statusColumn?.getFilterValue() as
    | string
    | undefined;
  const paymentMethodFilterValue = paymentMethodColumn?.getFilterValue() as
    | string
    | undefined;

  const statusValues = Array.from(
    new Set(
      table
        .getCoreRowModel()
        .rows.map((row) => row.original.status)
        .filter(Boolean)
    )
  ).sort();

  const paymentMethodValues = Array.from(
    new Set(
      table
        .getCoreRowModel()
        .rows.map((row) => row.original.paymentMethod)
        .filter(Boolean)
    )
  ).sort();

  return (
    <div className="flex items-center justify-between flex-wrap gap-3">
      <div className="flex items-center gap-2 flex-1 min-w-[200px] max-w-md">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or email..."
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            className={cn("pl-8 w-62", searchValue ? "pr-8" : "")}
          />
          {searchValue && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full px-2 hover:bg-transparent"
              onClick={clearSearch}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Select
          value={statusFilterValue || "all"}
          onValueChange={(value) =>
            statusColumn?.setFilterValue(value === "all" ? undefined : value)
          }
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            {statusValues.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={paymentMethodFilterValue || "all"}
          onValueChange={(value) =>
            paymentMethodColumn?.setFilterValue(
              value === "all" ? undefined : value
            )
          }
        >
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Payment Method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Methods</SelectItem>
            {paymentMethodValues.map((method) => (
              <SelectItem key={method} value={method}>
                {method}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer space-x-2"
            >
              <Columns2 className="h-4 w-4" />
              <span className="hidden lg:inline">Customize Columns</span>
              <span className="lg:hidden">Columns</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            {table
              .getAllColumns()
              .filter(
                (column) =>
                  typeof column.accessorFn !== "undefined" &&
                  column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="outline"
          size="sm"
          className="cursor-pointer space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span className="hidden lg:inline">Add New Order</span>
        </Button>
      </div>
    </div>
  );
};

export default DataTableToolbar;
