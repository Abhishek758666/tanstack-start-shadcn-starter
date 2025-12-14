import { createFileRoute } from "@tanstack/react-router";
import DashboardPage from "@/pages/dashboard/dashboard-page";

export const Route = createFileRoute("/dashboard/")({
	component: DashboardPage,
});


