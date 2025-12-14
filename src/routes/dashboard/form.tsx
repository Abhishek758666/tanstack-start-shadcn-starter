import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/form")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/dashboard/form"!</div>;
}
