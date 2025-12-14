import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/data-table/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/data-table/"!</div>;
}
