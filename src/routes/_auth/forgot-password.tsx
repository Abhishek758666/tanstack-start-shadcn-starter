import { createFileRoute } from "@tanstack/react-router";
import ForgotPasswordPage from "@/pages/auth/forgot-password-page";

export const Route = createFileRoute("/_auth/forgot-password")({
	component: ForgotPasswordPage,
});
