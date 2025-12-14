import { createFileRoute } from "@tanstack/react-router";
import SignInPage from "@/pages/auth/sign-in-page";

export const Route = createFileRoute("/_auth/sign-in")({
	component: SignInPage,
});
