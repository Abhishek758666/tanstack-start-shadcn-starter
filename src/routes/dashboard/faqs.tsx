import { createFileRoute } from "@tanstack/react-router";
import FaqsPage from "@/pages/dashboard/faqs-page";

export const Route = createFileRoute("/dashboard/faqs")({
  component: FaqsPage,
});
