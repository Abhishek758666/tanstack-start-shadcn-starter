import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ForgotPasswordForm } from "./components/forgot-password-form";

const ForgotPasswordPage = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-12">
			<div className="w-full max-w-md space-y-6">
				<div className="text-center space-y-2">
					<h1 className="text-3xl font-bold tracking-tight text-foreground">
						Reset your password
					</h1>
					<p className="text-muted-foreground">
						{"Enter your email and we'll send you a reset link"}
					</p>
				</div>

				<Card className="p-8 shadow-lg border-border/50">
					<ForgotPasswordForm />
				</Card>

				<div className="text-center text-sm">
					<Link
						to="/sign-in"
						className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
					>
						<ArrowLeft className="h-4 w-4" />
						Back to sign in
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ForgotPasswordPage;
