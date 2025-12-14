import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { type ColumnDef, flexRender, type Row } from "@tanstack/react-table";
import { Eye, GripVertical, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TableCell, TableRow } from "@/components/ui/table";

import type { DashboardOrder } from "@/interface/dashboard";

const DragHandle = ({ id }: { id: string }) => {
  const { attributes, listeners } = useSortable({
    id,
  });

  return (
    <Button
      {...attributes}
      {...listeners}
      variant="ghost"
      size="icon"
      className="text-muted-foreground size-7 hover:bg-transparent cursor-move"
    >
      <GripVertical className="text-muted-foreground size-3" />
      <span className="sr-only">Drag to reorder</span>
    </Button>
  );
};

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

export const DraggableRow = ({ row }: { row: Row<DashboardOrder> }) => {
  const { transform, transition, setNodeRef, isDragging } = useSortable({
    id: row.original.id,
  });

  return (
    <TableRow
      data-state={row.getIsSelected() && "selected"}
      data-dragging={isDragging}
      ref={setNodeRef}
      className="relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80"
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
      }}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  );
};

export const DashboardColumns: ColumnDef<DashboardOrder>[] = [
  {
    id: "drag",
    header: () => <div className="w-8" />,
    cell: ({ row }) => <DragHandle id={row.original.id} />,
  },
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
    cell: ({ row }) => {
      return <span>{row.original.customerName}</span>;
    },
    filterFn: (row, _id, value) => {
      const searchValue = (value as string)?.toLowerCase() || "";
      if (!searchValue) return true;
      const customerName = row.original.customerName?.toLowerCase() || "";
      const email = row.original.email?.toLowerCase() || "";
      return customerName.includes(searchValue) || email.includes(searchValue);
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      return <span>{row.original.email}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <span>{row.original.status}</span>;
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    enableSorting: true,
    cell: ({ row }) => {
      return <span>{row.original.amount}</span>;
    },
  },
  {
    accessorKey: "paymentMethod",
    header: "Payment Method",
    cell: ({ row }) => {
      return <span>{row.original.paymentMethod}</span>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      return <span>{row.original.createdAt}</span>;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: () => <Actions />,
  },
];
