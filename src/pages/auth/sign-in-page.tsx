import { Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { SignInForm } from "./components/sign-in-form";

const SignInPage = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-12">
			<div className="w-full max-w-md space-y-6">
				<div className="text-center space-y-2">
					<h1 className="text-3xl font-bold tracking-tight text-foreground">
						Welcome back
					</h1>
					<p className="text-muted-foreground">
						Sign in to your account to continue
					</p>
				</div>

				<Card className="p-8 shadow-lg border-border/50">
					<SignInForm />
				</Card>

				<div className="text-center text-sm">
					<span className="text-muted-foreground">
						{"Don't have an account? "}
					</span>
					<Link
						to="/sign-up"
						className="font-semibold text-primary hover:underline"
					>
						Sign up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SignInPage;
