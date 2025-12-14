import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/form/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/form/"!</div>;
}
