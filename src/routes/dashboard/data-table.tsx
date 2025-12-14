import { createFileRoute } from "@tanstack/react-router";
import DataTablePage from "@/pages/dashboard/data-table-page";

export const Route = createFileRoute("/dashboard/data-table")({
  component: DataTablePage,
});
